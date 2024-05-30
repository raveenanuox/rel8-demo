"use strict";

/**
 * A set of functions called "actions" for `weather`
 */

module.exports = {
  async getWeather(ctx) {
    const city = ctx.query.city;
    if (!city) {
      ctx.throw(400, "City is required");
    }
    try {
      const data = await strapi
        .service("api::weather.weather")
        .fetchWeatherData(city);
      ctx.send(data);
    } catch (error) {
      ctx.throw(500, "Failed to fetch weather data");
    }
  },
  async translate(ctx) {
    const { language ,type} = ctx.request.params;
    const { data } = ctx.request.body;
    if (!data || !language) {
      ctx.throw(400, "data or language is required");
    }
    try {
      const dataSet = await strapi
        .service("api::weather.weather")
        .translateData(data,language,type);
      ctx.send(dataSet);
    } catch (error) {
      ctx.throw(500, "Failed to translate weather data");
    }
  },
};
