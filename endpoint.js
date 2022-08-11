const endpoint = require('slingr-endpoints');

endpoint.hooks.onEndpointStart = () => {
    endpoint.logger.info('Endpoint started');
}

endpoint.functions._makeCoffee = ({ params }) => {
  let res = {};
  switch (params.preference) {
    case 'light':
      res.coffee = '☕';
      break;
    case 'medium':
      res.coffee = '☕☕';
      break;
    case 'dark':
      res.coffee = '☕☕☕';
      break;
    default:
      throw `There is no coffee [${params.preference}]`;
  }

  return res;
}

endpoint.start();