'use strict';

/**
 * hr-payroll router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hr-payroll.hr-payroll', {
    config: {
        find: { middlewares: ["api::hr-payroll.hr-payroll-section-middleware"] },
        findOne: { middlewares: ["api::hr-payroll.hr-payroll-section-middleware"] },
      },
});
