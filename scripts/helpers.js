endpoint.leaveMessage = function(receiver, message, callback) {
  return endpoint._leaveMessage({
    receiver: receiver,
    message: message
  }, {}, callback);
}
