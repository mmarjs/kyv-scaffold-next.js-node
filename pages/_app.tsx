import React from 'react'
import type { AppProps } from "next/app";
import Head from 'next/head'

import Layout from '../src/components/Layout'

import '../src/styles/mainStyles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon.png"
        />
        <title>
          Know Your Vote 20222 - Toronto Election Education Platform by Toronto
          Public Library
        </title>
      </Head>

      <Component {...pageProps} />
    </Layout>
  )
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
  return {
    pageProps: Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {},
  };
}
export default MyApp
