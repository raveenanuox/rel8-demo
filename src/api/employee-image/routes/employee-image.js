'use strict';

/**
 * employee-image router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::employee-image.employee-image', {
    config: {
        find: { middlewares: ["api::employee-image.employee-image-section-middleware"] },
        findOne: { middlewares: ["api::employee-image.employee-image-section-middleware"] },
      },
});
