import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import Link from "next/link";
import { repositoryName } from "../prismicio";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}></PrismicPreview>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </PrismicProvider>
  );
}
