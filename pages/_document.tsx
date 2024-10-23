/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
        <script src="/embeded.js" />
        <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      {/* <iframe id="iframeB" src="iframe-b.html"></iframe> */}
    </Html>
  );
}
