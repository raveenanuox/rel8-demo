'use strict';

/**
 * transform-org service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transform-org.transform-org');
