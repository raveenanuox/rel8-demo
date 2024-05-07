'use strict';

/**
 * book-demo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-demo.book-demo');
