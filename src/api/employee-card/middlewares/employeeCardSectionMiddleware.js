"use strict";

/**
 * `employeeCardSectionMiddleware` middleware
 */
const populate = {
    card: {
      populate: {
        employeeCard: {
          populate: {
            heading: {
              populate: true
            },
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
    strapi.log.info("In employeeCardsSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.card
    ) {
      const card =
        ctx.response.body.data.attributes.card[0];
      ctx.response.body.data.attributes.card = card;
    }
  };
};
