'use strict';

/**
 * book-demo router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::book-demo.book-demo');
