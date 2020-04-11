import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

//https://github.com/nareshbhatia/graphql-bookstore/blob/master/apollo-bookstore-server/src/graphql/typedefs.ts
const typesArray = fileLoader(path.join(__dirname, './typeDefs'));

export default mergeTypes(typesArray);
