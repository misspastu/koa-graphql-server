import good from './good'
import store from './store'
import goodType from './scalar/good_type'

const resolvers = {
  Query: {
    good,
    store
  },
  // Mutation: {
  //   good,
  //   store
  // },
  // scalar
  good,
  store,
  GoodType: goodType
}
export default resolvers
