import '../styles/globals.css'
import '../components/spinner.css';
import type { AppProps } from 'next/app'

function TvApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default TvApp
