'use strict';

/**
 * banner router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::banner.banner',{
    config: {
        find: { middlewares: ["api::banner.country-banner-middileware"] },
        findOne: { middlewares: ["api::banner.country-banner-middileware"] },
      },
});
