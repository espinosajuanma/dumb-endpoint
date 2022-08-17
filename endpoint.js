const endpoint = require('slingr-endpoints');

const URL = 'https://xkcd.com/info.0.json'

function getUrl(number) {
  return `https://xkcd.com/${number}/info.0.json`
}

endpoint.hooks.onEndpointStart = async () => {
    endpoint.logger.info('Endpoint started');
}

endpoint.functions._getComic = async ({ params }) => {
  let number = params.number ?? 0;
  let url = URL;
  if (number) url = getUrl(number);

  endpoint.appLogger.info(`Making HTTP GET request to [${url}]`)

  let { data } = await endpoint.httpModule.get(url);
  return data;
}

endpoint.start();