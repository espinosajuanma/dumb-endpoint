# Branch `001`

## The Coffee Endpoint

Now that everybody knows how to setup an almost bare endpoint we are
kinda thirsty and needs a cup of coffee ☕a.

The goal of this endpoint is to call the function `makeCoffee` and the
get the appropiate amount of coffee. We need to send the preference that
can be `light`, `medium` or `dark`.

### Endpoint Descriptor

**endpoint.json**

```json
{
  "functions": [
    {
      "label": "Make Coffee",
      "name:": "_makeCoffee"
    }
  ]
}
```

### Helpers

**scripts/helpers.js**

```js
endpoint.makeCoffee = function(preference) {
  return endpoint._makeCoffee({
    preference : preference
  });
}
```

### Endpoint

**endpoint.js**

```js
endpoint.functions._makeCoffee = ({ params }) => {
  let res = {};
  switch (params.preference) {
    case 'light':
      res.coffee = '☕';
      break;
    case 'medium':
      res.coffee = '☕☕';
      break;
    case 'dark':
      res.coffee = '☕☕☕';
      break;
    default:
      throw `There is no coffee [${params.preference}]`;
  }

  return res;
}
```

## Try it in the Dynamic Console

```js
let { coffee } = app.endpoints.proxy.makeCoffee('dark');
log(coffee)
```
