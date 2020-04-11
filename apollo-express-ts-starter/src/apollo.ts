import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema });

export default server;
