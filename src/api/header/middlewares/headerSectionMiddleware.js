"use strict";

/**
 * `heroSectionMiddleware` middleware
 */
const populate = {
    name: {
      populate: {
        demoButton: {
          populate: true
        },
        logo: {
          populate: true,
          fields: ["name", "alternativeText", "url"]
        },
        navItem: {
          populate: true
        }
      }
    }
  };

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In heroSectionMiddleware middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.name
    ) {
      const name = ctx.response.body.data.attributes.name[0];
      ctx.response.body.data.attributes.name = name;
    }
  };
};
