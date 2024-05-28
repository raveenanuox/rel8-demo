"use strict";

/**
 * `softwarePackageSectionMiddleware` middleware
 */
const populate = {
    packages: {
      populate: {
        pages: {
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
    strapi.log.info("In softwarePackageSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.packages
    ) {
      const packages =
        ctx.response.body.data.attributes.packages[0];
      ctx.response.body.data.attributes.packages = packages;
    }
  };
};
