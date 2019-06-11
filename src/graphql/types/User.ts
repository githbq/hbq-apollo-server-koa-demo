import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql'

import Course from './Course'
let UserType = null

export default (fieldResolves = {}) => {

  if (UserType) { return UserType }
  return UserType = new GraphQLObjectType({
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
        resolve: fieldResolves['courses']
      }
    }
  })
}
