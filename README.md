# Branch `002`

## My secret is protected

Configuration fields are useful to avoid hardcoded stuff or even pass
secrets... In this case we are going to ask the endpoint to reveal a
secret.

The secret will only be returned if we send the correct "password" or
secret.

### Endpoint Descriptor

**endpoint.json**

```json
{
  "configuration": [
        {
            "name": "superSecretToken",
            "label": "Super Secret Token",
            "description": "A secret token to reveal the endpoint secrets",
            "type": "text",
            "required": true
        }
    ]
}
```

## Local development - `.env`

We can't set the value of this field in the Builder UI because the Proxy
endpoint will not render the form.

We have to use our `.env` environment file, and store the `superSecretToken`
in a JSON format

```
_endpoint_config={"superSecretToken":"1234"}
```

### Helpers

**scripts/helpers.js**

```js
endpoint.revealSecret = function (secret) {
  return endpoint._revealSecret({
    secret: secret
  });
};
```

### Endpoint

**endpoint.js**

```js
endpoint.functions._revealSecret = ({ params }) => {
  if (!params.secret) throw 'Secret can\'t be empty';
  if (endpoint.endpointConfig.superSecretToken != params.secret) {
    throw 'Wrong secret... You will never know my secret!';
  }

  return { secret: 'I sleep with the lights on' }
}
```

## Try it in the Dynamic Console

```js
let res = app.endpoints.proxy.revealSecret(1234);
log(JSON.stringify(res))
```
