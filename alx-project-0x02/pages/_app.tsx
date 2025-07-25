
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Header from '@/components/layout/Header'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
