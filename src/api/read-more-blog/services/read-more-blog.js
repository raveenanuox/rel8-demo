'use strict';

/**
 * read-more-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::read-more-blog.read-more-blog');
