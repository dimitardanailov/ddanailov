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
        <script async src="https://ddanailov.dev/ga.js"></script>

        <base href="/" />
      </Head>
    </div>
  )
}

export default MainHeader
