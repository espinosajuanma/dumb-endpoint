const endpoint = require('slingr-endpoints');

endpoint.hooks.onEndpointStart = async () => {
    endpoint.logger.info('Endpoint started');

    setTimeout(() => {
      endpoint.events.send('profile', {
        time: new Date().getTime(),
        memoryUsage: process.memoryUsage
      });
    }, 15000);

    let info = await endpoint.events.sendSync('getInfo', {});
    endpoint.appLogger.info('Got info from app', info);
}

endpoint.start();