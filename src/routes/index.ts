import * as graphqlRoute from './graphql'
import * as playgroundRoute from './playground'

const routes = [graphqlRoute, playgroundRoute]

export default (router) => {
  routes.forEach(route => {
    router.use('/' + route.name, route.router.routes(), route.router.allowedMethods())
  })
}