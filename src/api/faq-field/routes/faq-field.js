'use strict';

/**
 * faq-field router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::faq-field.faq-field',{
    config: {
        find: { middlewares: ["api::faq-field.faq-section-middleware"] },
        findOne: { middlewares: ["api::faq-field.faq-section-middleware"] },
      },
});
