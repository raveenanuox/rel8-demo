"use strict";

/**
 * `fosterOrganizationMiddleware` middleware
 */
const populate = {
    fosterOrg: {
      populate: {
        fosterOrgCultureSection: {
          populate: true
        },
        reqDemoButtonLink: {
          populate: true
        },
        imageCarousel: {
          fields: ["name", "alternativeText", "url"]
        }
      }
    }
  };
  

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In fosterOrgSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.fosterOrg
    ) {
      const fosterOrg =
        ctx.response.body.data.attributes.fosterOrg[0];
      ctx.response.body.data.attributes.fosterOrg = fosterOrg;
    }
  };
};
