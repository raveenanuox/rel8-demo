"use strict";

 /**
  * `heroSectionMiddleware` middleware
  */
 module.exports = (config, { strapi }) => {
   return async (ctx, next) => {
     strapi.log.info("In heroSectionMiddleware middleware.");
 
     // Extract country from query parameters
     const country = ctx.query.country;
 
     // Initialize query with populate
     ctx.query = {
       ...ctx.query,
      // populate: "*"
     };
 
     // Add country filter if country is specified
     if (country) {
       ctx.query.filters = {
         ...ctx.query.filters,
         country: {
           countryName: {
             $eq: country
           }
         }
       };
     }
 
     await next();
 
     if (
       ctx.response.body &&
       ctx.response.body.data&&country
      // ctx.response.body.data.attributes.name
     ) {
       const data = ctx.response.body.data[0];
       ctx.response.body.data = data;
     }else{
      ctx.response.body.data
     }
   };
 };
 