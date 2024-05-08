'use strict';

/**
 * header router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::header.header',{
config: {
    find: { middlewares: ["api::header.header-section-middleware"] },
    findOne: { middlewares: ["api::header.header-section-middleware"] },
  },
});
