"use strict";

/**
 * hero-page router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter('api::hero-page.hero-page', {
  config: {
    find: { middlewares: ["api::hero-page.hero-section-middleware"] },
    findOne: { middlewares: ["api::hero-page.hero-section-middleware"] },
  },
});
