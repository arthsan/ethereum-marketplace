import { Modal } from '@components/common'
import { CourseHero, KeyPoints, Curriculum } from '@components/course'
import { BaseLayout } from '@components/layout'
import { getAllCourses } from '@content/courses/fetcher'
import { GetStaticPaths, GetStaticProps } from 'next'
import { CourseDetailProps } from './types'

export default function CourseDetail({ course }: CourseDetailProps) {
  return (
    <BaseLayout>
      <CourseHero
        title={course.title}
        description={course.description}
        image={course.coverImage}
      />
      <KeyPoints points={course.wsl} />
      <Curriculum locked={true} />
      <Modal />
    </BaseLayout>
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
