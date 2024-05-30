"use strict";
const axios = require("axios");
/**
 * weather service
 */

module.exports = {
  async fetchWeatherData(city) {
    try {
      const apiKey = "fb91bf3d461b4148b7f53659242905";
      strapi.log.info(apiKey);
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      const weatherData = response.data;

      // Extract relevant data
      const newWeatherEntry = {
        name: weatherData.location.name,
        region: weatherData.location.region,
        country: weatherData.location.country,
        localTime: weatherData.location.localtime,
        condition: weatherData.current.condition.text,
        "tz-id": weatherData.location.tz_id,
        publishedAt: new Date(),
      };

      // Save data to the Weather model
      const savedWeather = await strapi.entityService.create(
        "api::weather.weather",
        {
          data: newWeatherEntry,
        }
      );
      return savedWeather;
    } catch (error) {
      strapi.log.error(
        "Error fetching weather data from third-party API:",
        error
      );
      throw new Error("Failed to fetch weather data");
    }
  },
  async translateData(data, language, type) {
    // const weather = await strapi.service('api::weather.weather').findOne(id);
    try {
      if (type === "weather") {
        let prompt = `Translate the given data into Arabic language ,
  condition : ${data.condition} region : ${data.region}, name : ${data.name}, country : ${data.county} in the following JSON format :-
     {
      condition:"",
      region:"",
      name:"",
      country:""
     }
  `;
        const response = await axios.post(
          "https://exportx-api-ai.e8demo.com/openAI/text",
          { prompt },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
      } else if (type === "banner") {
      }
      // Update the weather record with the translated data
      // const updatedWeather = await strapi.service('api::weather.weather').update(id, {
      //   data: {
      //     condition: translationResponse.data.translatedText,
      //   },
      // });
    } catch (error) {
      strapi.log.error("Error translating weather data:", error);
      throw new Error("Failed to translate weather data");
    }
  },
};
