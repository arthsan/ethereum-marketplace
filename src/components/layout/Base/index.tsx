import { Navbar, Footer } from '@components/common'
import { Web3Provider } from '@components/providers'
import React from 'react'

interface BaseProps {
  children: React.ReactNode
}

export default function BaseLayout({ children }: BaseProps) {
  return (
    <Web3Provider>
      <div className="mx-auto max-w-7xl px-4">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </Web3Provider>
  )
}
