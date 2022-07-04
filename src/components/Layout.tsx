import React, { ReactNode } from 'react'

import { Nav } from './Nav'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
        <Nav/>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout