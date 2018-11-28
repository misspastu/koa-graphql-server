import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from 'typeDefs'
import resolvers from 'resolvers'
const SCHEMA = makeExecutableSchema({
  typeDefs,
  resolvers,
})
export default SCHEMA
