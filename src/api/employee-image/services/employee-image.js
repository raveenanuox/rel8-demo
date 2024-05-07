'use strict';

/**
 * employee-image service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-image.employee-image');
