import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql'
import User from '../types/GraphqlUser'


const userQuery = {
  type: null,
  name: 'user query',
  description: '查询用户信息',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(source, args): any {
    return { id: args.id, name: '张三-' + args.id, age: 20 }
  },
  zpfeExtra: {
    fieldResolves: {
      courses(source) {
        return [{ name: source.name + '-' + '数学' }, { name: '语文' }]
      }
    }
  }
}

const UserType = User(null)
debugger
userQuery.type = UserType

export default userQuery
