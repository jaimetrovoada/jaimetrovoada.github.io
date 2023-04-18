import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function App({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith("/studio")) {
    return <Component {...pageProps} />;
  }
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
