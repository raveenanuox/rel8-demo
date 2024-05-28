"use strict";

/**
 * `countListSectionMidlleware` middleware
 */
const populate = {
    countGrowth: {
      populate: {
        countInfo: true
      }
    }
  };

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In countListSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.countGrowth
    ) {
      const countGrowth =
        ctx.response.body.data.attributes.countGrowth[0];
      ctx.response.body.data.attributes.countGrowth = countGrowth;
    }
  };
};
