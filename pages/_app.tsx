import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="content">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>プリコネプロフ</title>
      </Head>
      <Header className="pt-3" />
      <Component {...pageProps} />
      <Footer className="footer" />
    </div>
  );
}

export default MyApp;
