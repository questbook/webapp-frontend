import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Roboto&display=swap"
            rel="stylesheet"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta
            name="description"
            content="Questbook is a Decentralized University​ where learning is always free.
Get started with Web 3.0 along with 10,000+developers who are building on Web 3.0, earning crypto &amp; NFTs along the way."
          />
          <meta
            property="og:description"
            content="Questbook is a Decentralized University​ where learning is always free.
Get started with Web 3.0 along with 10,000+developers who are building on Web 3.0, earning crypto &amp; NFTs along the way."
          />
          <meta property="og:site_name" content="Questbook Learn Web3" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Questbook is a Decentralized University​ where learning is always free.
Get started with Web 3.0 along with 10,000+developers who are building on Web 3.0, earning crypto &amp; NFTs along the way."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
