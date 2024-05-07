'use strict';

/**
 * employee-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-card.employee-card');
