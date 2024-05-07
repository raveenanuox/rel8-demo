'use strict';

/**
 * count-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::count-list.count-list');
