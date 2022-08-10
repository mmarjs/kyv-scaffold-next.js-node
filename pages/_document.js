import React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document"; //next의 html과 나머지 기타 기능들을 넣어주는 Main과 NextScript
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
       
`;

class MyDocument extends Document {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet(); // 서버사이드 렌더링 할 수 있게함.
    const page = context.renderPage((App) => (props) =>
      sheet.collectStyles(
        <>
          <GlobalStyles />
          <App {...props} />
        </>
      )
    ); // 아래의 스타일들을 모아서 페이지를 그려준다. 원래는 <GlobalStyles/> 없이 하는데 글로벌 스타일을 지정해주기 위해 저렇게 적었다.
    const styleTags = sheet.getStyleElement();
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps, ...page, styleTags,  };
  }
  render() {
    const { styleTags } = this.props;
    return (
      <Html>
        <Head>
          {styleTags}
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