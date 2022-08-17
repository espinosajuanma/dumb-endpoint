const endpoint = require('slingr-endpoints');

const URL = 'https://xkcd.com/info.{number}.json'

endpoint.hooks.onEndpointStart = async () => {
    endpoint.logger.info('Endpoint started');
}

endpoint.functions._getComic = async ({ params }) => {
  let number = params.number ?? 0;
  let url = URL.replace('{number}', number)

  endpoint.appLogger.info(`Making HTTP GET request to [${url}]`)

  let { data } = await endpoint.httpModule.get(url);
  return data;
}

endpoint.start();