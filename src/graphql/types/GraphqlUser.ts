
import { parse, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

export default parse(`

# 用户信息
type User {
  id: String!
  name: String!
  introduction: String
}
`
).definitions[0]
