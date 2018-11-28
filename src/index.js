import Koa from 'koa'
import KoaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import SCHEMA from './schema'
import Sequelize from 'sequelize'
import config from 'config'
require('dotenv').config()
const app = new Koa()
const router = new KoaRouter()
const PORT = process.env.PORT || 8080
app.use(koaBody())
global.Sequelize = Sequelize
global.config = config
// 浏览器端
router.get('/graphiql', graphiqlKoa({
  endpointURL: '/graphql',
}))
// 接口
router.post(
  '/graphql',
  (ctx, next) => graphqlKoa({
    schema: SCHEMA,
    context: { ctx },
  })(ctx, next),
)
// router.post('/graphql', graphqlKoa({ schema: SCHEMA }))
global.sequelize = new global.Sequelize(global.config.get('db.database'), global.config.get('db.username'), global.config.get('db.password'), {
  host: global.config.get('db.host'),
  port: global.config.get('db.port'),
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})
require('./models')
app.use(router.routes())
app.use(router.allowedMethods())
console.log(`Listening on http://localhost:${PORT}/graphql`)
console.log(`GraphiQL on http://localhost:${PORT}/graphiql`)
app.listen(PORT)
