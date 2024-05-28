"use strict";

/**
 * `smartPhoneSectionMiddleware` middleware
 */
const populate = {
    phoneImage: {
      fields: ["name", "alternativeText", "url"]
    }
  };

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In smartPhoneSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    // if (
    //   ctx.response.body &&
    //   ctx.response.body.data &&
    //   ctx.response.body.data.attributes.phoneImage
    // ) {
    //   const phoneImage =
    //     ctx.response.body.data.attributes.phoneImage[0];
    //   ctx.response.body.data.attributes.phoneImage = phoneImage;
    // }
  };
};
