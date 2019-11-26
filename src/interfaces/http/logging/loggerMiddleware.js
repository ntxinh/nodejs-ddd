const morgan = require('morgan');
const LoggerStreamAdapter = require('~root/src/infra/logging/LoggerStreamAdapter');

module.exports = ({ logger }) => {
  return morgan('dev', {
    stream: LoggerStreamAdapter.toStream(logger)
  });
};
