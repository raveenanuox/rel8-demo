'use strict';

/**
 * employee-benefit router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::employee-benefit.employee-benefit', {
    config: {
        find: { middlewares: ["api::employee-benefit.employee-benefit-section-middleware"] },
        findOne: { middlewares: ["api::employee-benefit.employee-benefit-section-middleware"] },
      },
});
