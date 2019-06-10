import * as x from 'graphql'

import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql'
import User from '../types/User'

export default {
  type: User,
  name: 'user mutaion',
  description: '更新用户名',
  args: {
    name: {
      name: 'name',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(source, args) {

    return { name: args.name, age: 20 }
  }
}

