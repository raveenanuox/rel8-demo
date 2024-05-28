"use strict";

/**
 * employee-card router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::employee-card.employee-card", {
    config: {
        find: { middlewares: ["api::employee-card.employee-card-section-middleware"] },
        findOne: { middlewares: ["api::employee-card.employee-card-section-middleware"] },
      },
});
