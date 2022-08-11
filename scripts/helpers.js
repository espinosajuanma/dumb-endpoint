// This file runs in Slingr side so we can use the Slingr Javascript API

endpoint.ping = function () {
	sys.logs.info('Sending ping to the dumb endpoint...');
	return endpoint._ping();
}
