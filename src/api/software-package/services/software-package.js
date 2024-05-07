'use strict';

/**
 * software-package service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::software-package.software-package');
