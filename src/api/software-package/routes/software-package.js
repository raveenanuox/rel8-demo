'use strict';

/**
 * software-package router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::software-package.software-package');
