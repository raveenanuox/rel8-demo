'use strict';

/**
 * transform-org router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::transform-org.transform-org');
