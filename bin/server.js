#!/usr/bin/env node

const SESServer = require('../').FakeSESServer
const myServer = new SESServer({
  port: 10001
})
myServer.bootstrap();
process.on('unhandledRejection', (err) => { throw err });
