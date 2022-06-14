import { Hero } from '@components/common'
import { CourseList } from '@components/course'

import { getAllCourses } from '@content/courses/fetcher'
import { HomeProps } from './types'

export default function Home({ courses }: HomeProps) {
  return (
    <>
      <Hero />
      <CourseList courses={courses} />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}
