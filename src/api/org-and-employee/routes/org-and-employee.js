'use strict';

/**
 * org-and-employee router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::org-and-employee.org-and-employee',{
    config: {
        find: { middlewares: ["api::org-and-employee.org-and-employee-section-middleware"] },
        findOne: { middlewares: ["api::org-and-employee.org-and-employee-section-middleware"] },
      },
});
