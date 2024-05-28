"use strict";

/**
 * `blogsAndNewsMiddleware` middleware
 */
const populate = {
  blogsAndNews: {
    populate: {
      viewAllButton: {
        populate: true
      },
      featuredBlogs: {
        populate: {
          image: {
            fields: ["name", "alternativeText", "url"]
          }
        }
      }
    }
  }
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In blogsAndNewsMiddleware middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      Array.isArray(ctx.response.body.data)
    ) {
      ctx.response.body.data.forEach(entry => {
        if (entry.attributes && entry.attributes.blogsAndNews && Array.isArray(entry.attributes.blogsAndNews)) {
          entry.attributes.blogsAndNews.forEach(blog => {
            if (blog.featuredBlogs && Array.isArray(blog.featuredBlogs)) {
              blog.featuredBlogs.forEach(featuredBlog => {
                if (featuredBlog.image && featuredBlog.image.data && Array.isArray(featuredBlog.image.data)) {
                  featuredBlog.image = featuredBlog.image.data.map(image => image.attributes);
                }
              });
            }
          });
        }
      });
    }
  };
};
