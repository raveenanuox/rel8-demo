module.exports = ({ env }) => ({
    localazy: {
      config: {
        populateDefaultDepth: env('LOCALAZY_POPULATE_DEFAULT_DEPTH', 5), // default is 5
        populateMaxDepth: env('LOCALAZY_POPULATE_MAX_DEPTH', 10), // default is 10
      },
    },
    'weather': {
      enabled: true,
      resolve: './src/plugins/weather'
    },
  });
  