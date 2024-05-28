"use strict";

/**
 * `appMiddleware` middleware
 */
const populate = {
  apps: {
    populate: {
      appImage: {
        fields: ["name", "alternativeText", "url"]
      }
    }
  }
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In appMiddleware middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.apps
    ) {
      const apps = ctx.response.body.data.attributes.apps[0];
      ctx.response.body.data.attributes.apps = apps;
    }
  };
};
