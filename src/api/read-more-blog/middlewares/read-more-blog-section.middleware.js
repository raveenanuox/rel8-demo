"use strict";

/**
 * `readMoreBlogSectionMiddleware` middleware
 */
const populate = {
    blogHome: {
      populate: {
        blogTemplate: {
          fields: ["name", "alternativeText", "url"]
        },
        path: {
          populate: true
        }
      }
    }
  };
  

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In readMoreBlogSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.blogHome
    ) {
      const blogHome =
        ctx.response.body.data.attributes.blogHome[0];
      ctx.response.body.data.attributes.blogHome = blogHome;
    }
  };
};
