'use strict';

/**
 * software-package router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::software-package.software-package',{
    config: {
        find: { middlewares: ["api::software-package.software-package-section-middleware"] },
        findOne: { middlewares: ["api::software-package.software-package-section-middleware"] },
      },
});
