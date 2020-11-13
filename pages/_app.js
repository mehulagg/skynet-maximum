import { SkynetProvider } from 'lib/skynet'

function MyApp({ Component, pageProps }) {
  return (
    <SkynetProvider>
      <Component {...pageProps} />
    </SkynetProvider>
  )
}

export default MyApp
