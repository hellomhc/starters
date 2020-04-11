import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';

// https://github.com/nareshbhatia/graphql-bookstore/blob/master/apollo-bookstore-server/src/graphql/resolvers.ts
const resolversArray = fileLoader(path.join(__dirname, './resolvers'));

export default mergeResolvers(resolversArray);
