'use strict';

/**
 * about-us-section router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::about-us-section.about-us-section', {
    config: {
        find: { middlewares: ["api::about-us-section.about-us-section-middleware"] },
        findOne: { middlewares: ["api::about-us-section.about-us-section-middleware"] },
      },
});
