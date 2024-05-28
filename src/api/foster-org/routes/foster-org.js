'use strict';

/**
 * foster-org router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::foster-org.foster-org', {
    config: {
        find: { middlewares: ["api::foster-org.foster-organization-section-middleware"] },
        findOne: { middlewares: ["api::foster-org.foster-organization-section-middleware"] },
      },
});
