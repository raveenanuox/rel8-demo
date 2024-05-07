'use strict';

/**
 * employee-benefit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-benefit.employee-benefit');
