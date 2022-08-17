# Branch `003`

## Hey Dude! Call me back!

Callbacks are still a thing. When the Slingr App sends a request to the
endpoint (call a function) it will wait a certain amount of time and
then if the endpoint doesn't respond it will gave up and treat it like
an error (Timeout).

If we have a heavy process that takes a lot to finish and you don't want
to get a timeout error you can use callbacks which are a kind of event
that are attached to a function call.

In this example we are going to send a message to a friend with the
helper `leaveMessage`. The endpoint should tell us that the message was
sent, but we can't wait the response. So we need to set a callback to
listen when our friend read and send us the response back.

### Endpoint Descriptor

**endpoint.json**

```json
{
  "events": [
    {
      "label": "Message Received",
      "name": "messageReceived",
      "description": "Send an event when receiver respond a message"
    }
  ]
  "functions": [
    {
      "label": "Leave Message",
      "name:": "_leaveMessage",
      "description": "Leave an inbox message and send response callback",
      "callbacks": [
        {
          "name": "messageReceived",
          "maxWaitingTime": 300000,
          "maxExpectedResponses": 1
        }
      ]
    }
  ]
}
```

### 🤖 "I'll be back"

**scripts/helpers.js**

```js
endpoint.leaveMessage = function(receiver, message, callback) {
  return endpoint._leaveMessage({
    receiver: receiver,
    message: message
  }, {}, callback);
}
```

### Endpoint

**endpoint.js**

```js
endpoint.functions._leaveMessage = ({ params, id, userEmail }) => {
  getResponse(userEmail, params.receiver, params.message);
  return { sent: true };
}

getResponse = (sender, receiver, message) => {
  setTimeout(() => {
    let messageResponse = {
      receiver: sender,
      message: '🏃 Screw you!',
      sender: receiver
    };
    endpoint.events.send('messageReceived', messageResponse, id);
  }, 10000);
}
```

## Try it in the Dynamic Console

```js
let res = app.endpoints.proxy.leaveMessage('Saul Goodman', 'You owe me a bunch of money 💰', function (message) {
  // This callback will run in another context
  sys.logs.info(`Message received. Check response: `, message);
});
log(JSON.stringify(res))
```
