import * as  Router from 'koa-router'

export const name = 'graphql'
export const router = new Router()


router.get('/', ctx => {
  ctx.response.body = name
})
