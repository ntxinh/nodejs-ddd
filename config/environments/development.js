const path = require('path');
const logPath = path.join(__dirname, '../../logs/development.log');

module.exports = {
  web: {
    port: 3000
  },
  logging: {
    appenders: {
      out: { type: 'console' },
      app: { type: 'file', filename: logPath }
    },
    categories: {
      default: { appenders: ['out', 'app'], level: 'info' }
    }
  }
};
