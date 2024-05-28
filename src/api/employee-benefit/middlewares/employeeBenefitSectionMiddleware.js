"use strict";

/**
 * `employeeBenefitSectionMiddleware` middleware
 */
const populate = {
    benefitBanner: {
      populate: {
        demo: {
          populate: {
            demo: true
          }
        },
        benefits: {
          populate: {
            benefits: true
          }
        }
      }
    }
  };
  

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In employeeBenefitSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.benefitBanner
    ) {
      const benefitBanner =
        ctx.response.body.data.attributes.benefitBanner[0];
      ctx.response.body.data.attributes.benefitBanner = benefitBanner;
    }
  };
};
