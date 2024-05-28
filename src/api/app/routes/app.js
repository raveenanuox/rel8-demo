'use strict';

/**
 * app router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::app.app', {
    config: {
    find: { middlewares: ["api::app.app-section-middleware"] },
    findOne: { middlewares: ["api::app.app-section-middleware"] },
  
    }
});
