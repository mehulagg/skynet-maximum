import { SkynetProvider } from 'lib/skynet'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <SkynetProvider>
      <Component {...pageProps} />
    </SkynetProvider>
  )
}

export default MyApp
