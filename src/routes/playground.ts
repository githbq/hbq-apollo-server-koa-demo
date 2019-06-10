import * as Router from 'koa-router'
import koaPlayground from 'graphql-playground-middleware-koa'


export const name = 'playground'
export const router = new Router()

router.get('/', koaPlayground(
  {
    endpoint: '/graphql'
  }
)
)
