import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql'
import User from '../types/User'

export default {
  type: User,
  name: 'user query',
  description: '查询用户信息',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(): any {
    return { name: '张三', age: 20 }
  },
}
