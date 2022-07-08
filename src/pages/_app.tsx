import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LoginTestPage from './users/loginTest'
import { wrapper } from '@/modules/store'
import { Nav } from '@/components/Nav'
import { BrowserRouter, Route } from 'react-router-dom'


function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {
  return ( 
    <>
    <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)