import express from 'express';
import http from 'http';
import server from './apollo'

const PORT = 3000;

const app = express();

// use middleware
server.applyMiddleware({ app, path: '/graphql' });

// create HTTP server
const httpServer = http.createServer(app);

// add subscriptions 
server.installSubscriptionHandlers(httpServer);

httpServer.listen(({ port: PORT }), (() => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
}));