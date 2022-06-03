import { Breadcrumbs, Hero } from 'components/common'
import { CourseList } from 'components/course'
import { BaseLayout } from 'components/layout'
import Card from 'components/order/Card'
import { EthRates, WalletBar } from 'components/web3'

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Breadcrumbs />
      <EthRates />
      <WalletBar />
      <Card />
      <CourseList />
    </BaseLayout>
  )
}
