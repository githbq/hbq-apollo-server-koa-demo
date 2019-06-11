import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql'
import { resolve } from 'url'

export default new GraphQLObjectType({
  name: 'Course',
  description: '课程',
  fields: {
    name: {
      type: GraphQLString,
      description: '课程名'
    }
  }
})
