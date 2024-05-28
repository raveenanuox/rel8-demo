"use strict";

/**
 * `footerSectionMiddleware` middleware
 */
const populate = {
    footerOptions: {
      populate: {
        footerOptions: {
          populate: true
        }
      }
    }
  };
  

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In footerSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.footerOptions
    ) {
      const footerOptions =
        ctx.response.body.data.attributes.footerOptions[0];
      ctx.response.body.data.attributes.footerOptions = footerOptions;
    }
  };
};
