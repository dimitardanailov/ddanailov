import Head from 'next/head';

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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-156006558-1"
        ></script>
        <script async src="http://ddanailov.dev/ga.js"></script>
      </Head>
      <style jsx global>{`
        html,
        body {
          position: relative;

          margin: 0;
          padding: 0;
          height: 100%;
        }

        html {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.5;
        }

        body {
          color: #515151;
          background-color: #fff;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }

        h1 {
          font-size: 2rem;
        }
        h2 {
          margin-top: 1rem;
          font-size: 1.5rem;
        }
        h3 {
          margin-top: 1.5rem;
          font-size: 1.25rem;
        }
        h4,
        h5,
        h6 {
          margin-top: 1rem;
          font-size: 1rem;
        }
        a {
          color: #268bd2;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

export default MainHeader;
