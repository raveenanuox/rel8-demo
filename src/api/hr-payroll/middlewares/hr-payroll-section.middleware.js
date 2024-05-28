"use strict";

/**
 * `hrPayrollSectionMiddleware` middleware
 */
const populate = {
    hrPayroll: {
      populate: {
        reqDemoButtonLink: {
          populate: true
        },
        payrollGrid: {
          populate: {
            image: {
              fields: ["name", "alternativeText", "url"]
            }
          }
        }
      }
    }
  };
  
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In hrPayrollSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.hrPayroll
    ) {
      const hrPayroll =
        ctx.response.body.data.attributes.hrPayroll[0];
      ctx.response.body.data.attributes.hrPayroll = hrPayroll;
    }
  };
};
