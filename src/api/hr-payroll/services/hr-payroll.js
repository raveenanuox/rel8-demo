'use strict';

/**
 * hr-payroll service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hr-payroll.hr-payroll');
