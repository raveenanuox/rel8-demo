"use strict";

/**
 * `transformOrgSectionMiddleware` middleware
 */
const populate = {
    transform: {
      populate: {
        main: true,
        image: {
          fields: ["name", "alternativeText", "url"]
        }
      }
    }
  };
  
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In transformOrgSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.transform
    ) {
      const transform =
        ctx.response.body.data.attributes.transform[0];
      ctx.response.body.data.attributes.transform = transform;
    }
  };
};
