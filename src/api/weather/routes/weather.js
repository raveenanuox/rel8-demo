module.exports = {
  routes: [
    {
      method: "GET",
      path: "/weather",
      handler: "weather.getWeather",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/weather/translate/:language/:type',
      handler: 'weather.translate',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
