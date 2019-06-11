import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql'

import Course from './Course'

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
        return `${source.name}是一个${source.age}岁的同学`
      }
    },
    courses: {
      type: new GraphQLList(Course),
      description: '所学课程列表',
      resolve(source) {
        return [{ name: source.name + '-' + '数学' }, { name: '语文' }]
      }
    }
  }
})
