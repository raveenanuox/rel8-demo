"use strict";

/**
 * `faqFieldSectionMiddleware` middleware
 */
const populate = {
    faqSection: {
      populate: {
        faqHome: {
          populate: true
        },
        contactUsButton: {
          populate: true
        },
        questionsAndAnswers: {
          populate: true
        }
      }
    }
  };

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In faqSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.faqSection
    ) {
      const faqSection =
        ctx.response.body.data.attributes.faqSection[0];
      ctx.response.body.data.attributes.faqSection = faqSection;
    }
  };
};
