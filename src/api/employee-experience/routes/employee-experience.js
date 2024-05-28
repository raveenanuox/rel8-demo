"use strict";

/**
 * employee-experience router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::employee-experience.employee-experience",
  {
    config: {
      find: { middlewares: ["api::employee-experience.employee-experience-section-middleware"] },
      findOne: { middlewares: ["api::employee-experience.employee-experience-section-middleware"] },
    },
  }
);
