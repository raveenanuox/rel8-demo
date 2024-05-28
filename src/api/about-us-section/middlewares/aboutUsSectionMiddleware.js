"use strict";

/**
 * `aboutUsSectionMiddleware` middleware
 */
const populate = {
  employeeFeedback: {
    populate: {
      aboutUs: {
        populate: {
          userImage: {
            fields: ["name", "alternativeText", "url"]
          },
          companyLogo: {
            fields: ["name", "alternativeText", "url"]
          }
        }
      }
    }
  }
};



module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In aboutUsSectionMiddleware middleware.");
    ctx.query = { populate, ...ctx.query }; // Merge populate object with existing query params
    await next();
   if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.employeeFeedback
    ) {
      const employeeFeedback = ctx.response.body.data.attributes.employeeFeedback[0];
      ctx.response.body.data.attributes.employeeFeedback = employeeFeedback;
    }
  };
};
