import { AppProps } from 'next/app'
import '@styles/globals.css'
import { BaseLayout } from '@components/layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default App
