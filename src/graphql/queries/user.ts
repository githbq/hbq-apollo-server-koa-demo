import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql'
import User from '../types/User'


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
    return { name: '张三-' + args.id, age: 20 }
  },
  zpfeExtra: {
    fieldResolves: {
      courses(source) {
        return [{ name: source.name + '-' + '数学' }, { name: '语文' }]
      }
    }
  }
}

const UserType = User(userQuery.zpfeExtra.fieldResolves)
userQuery.type = UserType

export default userQuery
