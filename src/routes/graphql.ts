import * as  Router from 'koa-router'
import {
  execute,
  parse,
  validate,
  validateSchema,
  GraphQLSchema,
  GraphQLSchemaConfig,
  GraphQLObjectType
} from 'graphql'

import queries from '../graphql/queries'
import mutations from '../graphql/mutations'

export const name = 'graphql'
export const router = new Router()



router.post('/', async ctx => {

  let { variables, query } = ctx.request.body

  const schemaConfig = {
    query: new GraphQLObjectType({
      name: 'rootQuery',
      description: '根查询',
      fields: queries,
    }),
    mutation: new GraphQLObjectType({
      name: 'rootMutation',
      description: '根变更',
      fields: mutations,
    }),
  }

  const schema = new GraphQLSchema(schemaConfig)


  console.log('schema created')
  // const schemaValidationErrors = validateSchema(schema)


  // Parse
  let document
  try {
    document = parse(query)
  } catch (error) {
    // do error 
    console.log('document error', error)
  }

  const validationRules = []

  // // Validate
  const validationErrors = validate(schema, document, validationRules)
  if (validationErrors.length > 0) {
    console.log('validation error', validationErrors)
    this.callErrorDecorator(ctx, validationErrors[0])
    return { error: validationErrors }
  }
  const rootObject = {}
  const result = await execute(schema, document, rootObject, ctx, variables)

  ctx.response.body = result

})

router.get('/', ctx => {
  ctx.response.redirect('/playground')
})
