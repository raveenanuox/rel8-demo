'use strict';

/**
 * smart-phone router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::smart-phone.smart-phone',{
    config: {
        find: { middlewares: ["api::smart-phone.smart-phone-section-middleware"] },
        findOne: { middlewares: ["api::smart-phone.smart-phone-section-middleware"] },
      },
});
