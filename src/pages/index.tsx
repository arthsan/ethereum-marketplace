import { Hero } from '@components/common'
import { CourseList } from '@components/course'
import { BaseLayout } from '@components/layout'

import { getAllCourses } from '@content/courses/fetcher'
import { Course } from '@content/courses/type'

interface StaticProps {
  courses: Course[]
}

export default function Home({ courses }: StaticProps) {
  return (
    <BaseLayout>
      <Hero />
      <CourseList courses={courses} />
    </BaseLayout>
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
