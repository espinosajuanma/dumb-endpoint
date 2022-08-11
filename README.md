---
title: The Dumb Endpoint
keywords: 
last_updated: August 10, 2022
tags: []
summary: "Just a dumb Slingr Endpoint intended for learning purposes"
---

## Overview

This repository is a educational intended for write a Slingr NodeJS from
scratch.

## Scope

This is a limited tutorial. We are not going to see the whole of the
endpoint node framework. Take it as a survival kit for your first
endpoint.

- Clone and start a new repository from the skeleton endpoint
- Setup a proxy endpoint in slingr
- Endpoint functions
  - Simple `ping-pong` function
  - Function parameters
  - Callbacks
- Loggers
- Configuration fields
- Events
- Webhook
- Files
  - Upload a file
- Make a simple HTTP Request

What is out of scope:

- Datastores
  - Use it to save persistent data
- HTTP Requests
  - The `endpoint.httpModule` is an instance of axios

## Follow up

This repository has several branches named by numbers. To keep with the
lesson just go to the next numbered branch in order.

## Getting Started

We can write ourselves the code to run an endpoint. But to avoid a lot
of boiler plate we can just clone the bare skeleton endpoint and start
tweaking it. I recommend to remove the `.git` folder too and start a git
repository from scratch.

```bash
git clone https://github.com/slingr-stack/skeleton-nodejs-endpoint dumb-endpoint
cd dumb-endpoint
rm -rf .git && git init
```

Avoid commit secrets and temporal files... Your `.gitignore` file should
look like this:

```
.env
node_modules
.DS_Store
tmp
```

## Installing Dependencies

Make sure there is no useless dependencies and that we have the latest
version of the `slingr-endpoints` framework.

Check the [npm package](https://www.npmjs.com/package/slingr-endpoints)
for more information about the endpoint version.

```json
{
  "dependencies": {
    "slingr-endpoints": "^1.4.4"
  }
}
```

Once is ready install the dependencies with: `npm install`

You can also install `nodemon` as a development dependency. This is
helpful to restart the endpoint when a file changes: `npm install
nodemon -D`

## The `endpoint.json` descriptor

This is a normal JSON file as the endpoints we have already in Java. The
main difference is that we need the key `deployment.jsEndpoint` set to
true if we want a NodeJS build when we deploy it.

## Setting a Proxy Endpoint

1. Go to your Slingr App
1. Create a `Proxy` endpoint
1. Run `ngrok http 10000` in your terminal
1. Copy `ngrok` https url to the Proxy Endpoint configuration
1. Copy generated configurations from slingr to a `.env` file
1. Save changes in Slingr App and Push Changes
1. Run your endpoint with `node endpoint.js`

## My First Function

Check `scripts/functions.js` file this is our helpers functions which is
loaded to the slingr runtime, so we can use the Slingr Javascript API
there.

We usually use it to make a better interface between the app and the
endpoints functions.

It is important that the file is in the `scripts` folder. We can add
more files but these needs to be defined in the `scripts[]` key of the
`endpoint.json` file.

To call the function from the Slingr App we need to follow this path:

```js
app.endpoints.proxy.ping()
```

Testing the ping function:

```js
let res = app.endpoints.proxy.ping()
log(res.ping)
```

**helpers.js**

```js
endpoint.ping = function() {
  sys.logs.info('Sending [ping] function to the endpoint');
  return endpoint._ping();
}
```

**endpoint.js**

```js
endpoint.functions._ping = () => {
  endpoint.logger.info('Received [ping] function in the endpoint');
  return '🏓 Pong!';
}
```
