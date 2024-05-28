"use strict";

/**
 * `pricingSectionMiddleware` middleware
 */
const populate = {
  plans: {
    populate: {
      priceSection: {
        populate: {
          book: {
            populate: true
          }
        }
      }
    }
  }
};

  

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In pricingSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.plans
    ) {
      const plans =
        ctx.response.body.data.attributes.plans[0];
      ctx.response.body.data.attributes.plans = plans;
    }
  };
};
