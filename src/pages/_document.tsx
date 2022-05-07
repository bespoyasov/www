import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { HeadContents } from "@components/HeadContents";
import { currentLocale } from "@env/locale";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={currentLocale}>
        <Head>
          <HeadContents />
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
