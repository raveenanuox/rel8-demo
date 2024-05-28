"use strict";

/**
 * `orgAndEmployeeSectionMiddleware` middleware
 */
const populate = {
    employeeManagement: {
      populate: {
        orgAndEmployees: true,
        reqDemoButton: true,
        featuresGrid: {
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
    strapi.log.info("In orgAndEmployeeSection middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
    if (
      ctx.response.body &&
      ctx.response.body.data &&
      ctx.response.body.data.attributes.employeeManagement
    ) {
      const employeeManagement =
        ctx.response.body.data.attributes.employeeManagement[0];
      ctx.response.body.data.attributes.employeeManagement = employeeManagement;
    }
  };
};
