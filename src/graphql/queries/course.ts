import {
  GraphQLString,
  GraphQLNonNull,
  typeFromAST
} from 'graphql'
import Course from '../types/Course'

export default {
  type: Course,
  name: 'course query',
  description: '查询用户课程信息',
  resolve(source) {
    return { name: source.name + '数学' }
  }
}
