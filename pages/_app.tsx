import React from 'react'
import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'

interface MyAppProps extends AppProps {
  pageProps: any
}

class MyApp extends App<MyAppProps> {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover"
          />
          <meta name="description" content="솔로 계산기" />
          <meta property="og:title" content="Solo-Calculator-Web" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:image" content="" />
          <meta property="og:description" content="솔로 계산기" />
          <title>솔로 계산기</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}

  return { pageProps }
}

export default MyApp
