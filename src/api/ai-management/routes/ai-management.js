"use strict";

/**
 * ai-management router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ai-management.ai-management", {
  config: {
    find: { middlewares: ["api::ai-management.ai-management-section"] },
    findOne: { middlewares: ["api::ai-management.ai-management-section"] },
  },
});
