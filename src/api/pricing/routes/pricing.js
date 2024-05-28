'use strict';

/**
 * pricing router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pricing.pricing', {
    config: {
        find: { middlewares: ["api::pricing.pricing-section-middleware"] },
        findOne: { middlewares: ["api::pricing.pricing-section-middleware"] },
      },
});
