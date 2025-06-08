module.exports = {
    projects: [
      {
        name: 'chromium',
        use: {
          browserName: 'chromium',
          headless: false, // для отладки можно включить headless: true
        },
      },
    ],
  };
  