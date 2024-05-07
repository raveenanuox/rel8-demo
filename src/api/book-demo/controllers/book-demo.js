'use strict';

/**
 * book-demo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::book-demo.book-demo');
