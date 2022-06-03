import { Modal } from 'components/common'
import { CourseHero, KeyPoints, Curriculum } from 'components/course'
import { BaseLayout } from 'components/layout'

export default function Course() {
  return (
    <BaseLayout>
      <CourseHero />
      <KeyPoints />
      <Curriculum />
      <Modal />
    </BaseLayout>
  )
}
