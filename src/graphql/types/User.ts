import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql'

export default new GraphQLObjectType({
  name: 'User',
  description: '用户信息',
  fields: {
    name: {
      type: GraphQLString,
      description: '昵称'
    },
    age: {
      type: GraphQLInt,
      description: '年龄'
    },
    introduction: {
      type: GraphQLString,
      description: '简介',
      resolve(source): any {
        return `${source.name}是一个${source.age}岁同学`
      }
    }
  }
})
