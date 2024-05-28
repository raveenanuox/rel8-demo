"use strict";

/**
 * count-list router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::count-list.count-list", {
  config: {
    find: { middlewares: ["api::count-list.count-list-section-middleware"] },
    findOne: { middlewares: ["api::count-list.count-list-section-middleware"] },
  },
});
