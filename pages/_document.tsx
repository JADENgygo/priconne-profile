import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="プリコネRのプロフカードの作成ツール" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JADENgygo" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="プリコネプロフ" />
        <meta
          property="og:description"
          content="プリコネRのプロフカードの作成ツール"
        />
        <meta property="og:url" content="https://priconne-profile.vercel.app" />
        <meta
          property="og:image"
          content="https://priconne-profile.vercel.app/img/card.webp"
        />
        <link rel="icon" href="/img/peko.png" />
      </Head>
      <body>
        <script src="/script.js" async />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
