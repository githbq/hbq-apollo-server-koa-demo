
import { parse, buildSchema, typeFromAST, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'


const graphqlString = `  
"用户信息"
type User {
  "id信息"
  id: String!
  name: String!
  introduction: String 
}
 
`
const typeASTUser = parse(graphqlString)

const schema = buildSchema(graphqlString)

const User = schema.getType((typeASTUser.definitions[0] as any).name.value)

export default (options: any) => User
