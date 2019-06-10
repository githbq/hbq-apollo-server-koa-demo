import * as Koa from 'koa'
import * as Router from 'koa-router'
import { ApolloServer, gql } from 'apollo-server-koa'
import koaPlayground from 'graphql-playground-middleware-koa'

const {
  execute,
  parse,
  validateSchema,
  validate,
  GraphQLError
} = require('graphql')

const router = new Router()

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = new Koa()
server.applyMiddleware({ app })


router.all('/playground', koaPlayground({ endpoint: '/graphql' }))

router.get('/test', ctx => {
  ctx.response.body = { a: 1 }
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
)