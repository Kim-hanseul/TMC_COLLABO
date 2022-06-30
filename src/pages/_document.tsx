import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const initialProps = await Document.getInitialProps(ctx);
    
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="Gute | React Next Minimalist Blog Template - ThemeForest" />
          <meta name="description" content="Gute | React Next Minimalist Blog Template - ThemeForest" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/assets/images/fav.png" />
          <link href="https://kit-pro.fontawesome.com/releases/v5.13.0/css/pro.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal"/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
