import { Modal } from '@components/common'
import { CourseHero, KeyPoints, Curriculum } from '@components/course'

import { getAllCourses } from '@content/courses/fetcher'
import { GetStaticPaths, GetStaticProps } from 'next'
import { CourseDetailProps } from './types'

export default function CourseDetail({ course }: CourseDetailProps) {
  return (
    <>
      <CourseHero
        title={course.title}
        description={course.description}
        image={course.coverImage}
      />
      <KeyPoints points={course.wsl} />
      <Curriculum locked={true} />
      <Modal />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = getAllCourses()

  return {
    paths: data.map((course) => ({
      params: {
        slug: course.slug
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = getAllCourses()
  const course = data.filter((c) => c.slug === params?.slug)[0]

  if (course) {
    try {
      return {
        props: {
          course
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    notFound: true
  }
}
