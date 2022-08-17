endpoint.log = function(level, message, additionalInfo) {
  return endpoint._log({
    level: level,
    message: message,
    additionalInfo: additionalInfo
  });
};

endpoint.info = function(message, additionalInfo) {
  return endpoint.log('info', message, additionalInfo)
};

endpoint.warn = function(message, additionalInfo) {
  return endpoint.log('warn', message, additionalInfo)
};

endpoint.error = function(message, additionalInfo) {
  return endpoint.log('error', message, additionalInfo)
};
