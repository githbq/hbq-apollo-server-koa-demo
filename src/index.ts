import * as Koa from 'koa'
import * as Router from 'koa-router'
import routes from './routes/index'

const router = new Router()

routes(router)

const app = new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
)