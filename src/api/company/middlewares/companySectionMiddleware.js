"use strict";

/**
 * `trustedCompaniesMiddleware` middleware
 */
const populate = {
  trustedCompanies: {
    populate: {
      demo: {
        populate: true
      },
      trustedCompanies: {
        populate: {
          logo: {
            fields: ["name", "alternativeText", "url"],
          },
        },
      },
    },
  },
};


module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In companySection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.trustedCompanies
    ) {
      const trustedCompanies =
        ctx.response.body.data.attributes.trustedCompanies[0];
      ctx.response.body.data.attributes.trustedCompanies = trustedCompanies;
    }
  };
};
