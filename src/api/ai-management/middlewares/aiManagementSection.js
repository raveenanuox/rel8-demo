"use strict";

/**
 * `aiManagementSection` middleware
 */
const populate = {
  AI: {
    populate: {
      aiManagement: {
        populate: true
      },
      getStartedButtonLink: {
        populate: true
      },
      aiFeaturesGrid: {
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
    strapi.log.info("In aiManagementSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.AI
    ) {
      const AI = ctx.response.body.data.attributes.AI[0];
      ctx.response.body.data.attributes.AI = AI;
    }
  };
};
