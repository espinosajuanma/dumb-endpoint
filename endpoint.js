const endpoint = require('slingr-endpoints');

endpoint.hooks.onEndpointStart = () => {
    endpoint.logger.info('Endpoint started');
}

function getResponse (sender, receiver, message, callId) {
  endpoint.appLogger.info(`Sending message [${message}] to [${receiver}]`);
  setTimeout(() => {
    let messageResponse = {
      receiver: sender,
      message: '🏃 Screw you!',
      sender: receiver
    };
    endpoint.events.send('messageReceived', messageResponse, callId);
  }, 10000);
}

endpoint.functions._leaveMessage = ({ params, id, userEmail }) => {
  if (!params.receiver || !params.message) {
    throw 'Reicever and Message can\'t be empty';
  }
  getResponse(userEmail, params.receiver, params.message, id);
  return { sent: true };
}

endpoint.start();