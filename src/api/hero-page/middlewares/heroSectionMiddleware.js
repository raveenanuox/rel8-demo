"use strict";

/**
 * `heroSectionMiddleware` middleware
 */
const populate = {
  heroSection: {
    populate: {
      HeroPage: true,
      link: true,
      images: {
        populate: true,
        fields: ["name", "alternativeText", "url"],
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In heroSectionMiddleware middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.heroSection
    ) {
      const heroSection = ctx.response.body.data.attributes.heroSection[0];
      ctx.response.body.data.attributes.heroSection = heroSection;
    }
  };
};
