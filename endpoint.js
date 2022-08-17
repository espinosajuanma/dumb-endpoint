const endpoint = require('slingr-endpoints');

endpoint.hooks.onEndpointStart = () => {
    endpoint.logger.info('Endpoint started');
}

endpoint.functions._log = ({ params }) => {
  let { level, message, additionalInfo } = params;

  // Internal logger
  endpoint.logger[level](message, additionalInfo);

  // App logger
  endpoint.appLogger[level](message, additionalInfo);

  return { level, message, additionalInfo }
}

endpoint.start();