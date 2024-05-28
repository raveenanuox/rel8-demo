"use strict";

/**
 * `bookDemoMiddleware` middleware
 */
const populate = {
    demo: {
      populate: {
        fields: {
          populate: true
        },
        otherFields: {
          populate: true
        },
        submit: {
          populate: true
        }
      }
    }
  };

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In bookDemoMiddleware middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.demo
    ) {
      const demo = ctx.response.body.data.attributes.demo[0];
      ctx.response.body.data.attributes.demo = demo;
    }
  };
};
