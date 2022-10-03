const winston = require('winston');
const expressWinston = require('express-winston');

/*
 *  Setup logging for the application
 *  returns a logging instance
 */

const transport = new winston.transports.Console({
  json: false,
  colorize: true
});

const api = (module.exports = function init(app) {
  if (app) {
    app.use(
      expressWinston.errorLogger({
        transports: [transport]
      })
    );

    app.use(
      expressWinston.logger({
        transports: [transport],
        meta: false,
        msg: 'HTTP {{req.method}} {{req.url}}',
        expressFormat: true,
        colorStatus: true
      })
    );
  }

  const logger = new winston.Logger({
    transports: [transport]
  });
  return logger;
});
