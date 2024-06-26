"use strict";

/**
 * book-demo router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::book-demo.book-demo", {
  config: {
    find: { middlewares: ["api::book-demo.book-a-demo-section-middleware"] },
    findOne: { middlewares: ["api::book-demo.book-a-demo-section-middleware"] },
  },
});
