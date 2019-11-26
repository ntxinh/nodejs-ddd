require('module-alias/register');
const container = require('~root/src/container');

const app = container.resolve('app');

app
  .start()
  .catch((error) => {
    app.logger.error(error.stack);
    process.exit();
  });
