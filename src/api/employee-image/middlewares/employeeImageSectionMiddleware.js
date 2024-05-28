"use strict";

/**
 * `employeeImageSectionMiddleware` middleware
 */
const populate = {
    image: {
      fields: ["name", "alternativeText", "url"]
    }
  };
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In employeeImageSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
//     if (
//       ctx.response.body &&
//       ctx.response.body.data &&
//       ctx.response.body.data.attributes.image
//     ) {
//       const image =
//         ctx.response.body.data.attributes.image[0];
//       ctx.response.body.data.attributes.image = image;
//     }
};
};
