import Head from 'next/head'

function MainHeader() {
  return (
    <div>
      <Head>
        <title>
          Danailov Consulting: Javascript Consultant and Remote architect
        </title>
        <meta
          name="description"
          content="Javascript Consultant and Remote architect"
        />
        <meta name="author" content="Dimitar Danailov" />
        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="https://ddanailov.dev" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-156006558-1"
        ></script>

        <base href="/" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://ddanailov.dev/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://ddanailov.dev/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://ddanailov.dev/favicon-16x16.png"
        />
        <link rel="manifest" href="https://ddanailov.dev/site.webmanifest" />
      </Head>
    </div>
  )
}

export default MainHeader
