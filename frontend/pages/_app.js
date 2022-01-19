import Head from "next/head"
import { MantineProvider } from "@mantine/core"

export default function App(props) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Niramit:wght@200;300;400;500;700"
          rel="stylesheet"
        ></link>
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          fontFamily: "Niramit , sans-serif",
          fontWeight: "200",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
