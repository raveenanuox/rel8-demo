"use strict";

/**
 * `employeeExperienceSectionMiddleware` middleware
 */
const populate = {
    count: {
      populate: {
        percent: {
          populate: true
        }
      }
    }
  };
  

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In employeeExperience middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.count
    ) {
      const count =
        ctx.response.body.data.attributes.count[0];
      ctx.response.body.data.attributes.count = count;
    }
  };
};
