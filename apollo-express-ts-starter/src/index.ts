import express from 'express';
import http from 'http';
import server from './apollo';

const app = express();

// use middleware
server.applyMiddleware({app, path: '/graphql'});

// create HTTP server
const httpServer = http.createServer(app);

// add subscriptions
server.installSubscriptionHandlers(httpServer);

httpServer.listen({port: process.env.SERVER_PORT}, () => {
  console.log(
    `Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`,
  );
  console.log(
    `Subscriptions ready at ws://localhost:${process.env.SERVER_PORT}${server.subscriptionsPath}`,
  );
});
