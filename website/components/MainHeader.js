import Head from 'next/head'
import PropTypes from 'prop-types'
import SEO from '@ddanailov/utils/seo'

function MainHeader({seo}) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />

        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />

        <meta name="author" content="Dimitar Danailov" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href={`https://ddanailov.dev${seo.canonicalTag}`}
        />
        <meta
          property="og:url"
          content={`https://ddanailov.dev${seo.canonicalTag}`}
        />
        <meta property="og:type" content="website" />

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

        <script defer async src="https://ddanailov.dev/ga.js"></script>
      </Head>
    </div>
  )
}

MainHeader.propTypes = {
  seo: PropTypes.instanceOf(SEO),
}

export default MainHeader
