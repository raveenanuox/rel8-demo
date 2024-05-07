'use strict';

/**
 * smart-phone service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::smart-phone.smart-phone');
