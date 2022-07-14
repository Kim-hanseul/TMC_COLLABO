import React, { ReactNode } from 'react'
import Main from "@/components/Home/home";
import { Nav2 } from './Nav2'


type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
        <main>
          <Nav2/>
          <Main>
          </Main>
            {children}
        </main>
    </div>
  )
}

export default Layout