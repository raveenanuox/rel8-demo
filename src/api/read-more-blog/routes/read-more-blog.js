'use strict';

/**
 * read-more-blog router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::read-more-blog.read-more-blog',{
    config: {
        find: { middlewares: ["api::read-more-blog.read-more-blog-section-middleware"] },
        findOne: { middlewares: ["api::read-more-blog.read-more-blog-section-middleware"] },
      },
});
