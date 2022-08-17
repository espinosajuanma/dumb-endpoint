const endpoint = require('slingr-endpoints');

endpoint.hooks.onEndpointStart = () => {
    endpoint.logger.info('Endpoint started');
}

endpoint.functions._revealSecret = ({ params }) => {
  if (!params.secret) throw 'Secret can\'t be empty';
  if (endpoint.endpointConfig.superSecretToken != params.secret) {
    throw 'Wrong secret... You will never know my secret!';
  }

  return { secret: 'I sleep with the lights on' }
}

endpoint.start();