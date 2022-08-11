const endpoint = require('slingr-endpoints');

// Hooks are functions that we want to run on certain events
endpoint.hooks.onEndpointStart = () => {
    // We just make an internal info log
    endpoint.logger.info('Endpoint started');
}

// Defining the function ping inside the endpoint function
endpoint.functions._ping = ({ date, id, userId, userEmail, params }) => {
    endpoint.logger.info(`Received Ping Request from [${userEmail}]`);
    // Response should always be an object able to be serializable as JSON
    return { ping: '🏓 Pong' };
}

// We need to initialize our endpoint once we define all
endpoint.start();