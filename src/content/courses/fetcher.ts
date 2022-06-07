import courses from './index.json'
import { Course, ReduceReturnType } from './type'

export const getAllCourses = () => {
  const courseMap = courses.reduce<ReduceReturnType>(
    (accumulator, course, index) => {
      accumulator[course.id] = course
      accumulator[course.id].index = index
      return accumulator
    },
    {}
  )

  return {
    data: courses as Course[],
    courseMap: courseMap
  }
}
