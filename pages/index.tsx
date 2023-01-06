import Intro from "../components/views/intro";
import Experience from "../components/views/experience";
import Projects from "../components/views/projecs";
import Head from "next/head";
import { meta } from "../data";

export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="keyword" content={meta.keywords.home} />
        <meta name="description" content={meta.description.home} />
        <meta property="og:description" content={meta.description.home} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description.home} />
      </Head>
      <main className="flex flex-col gap-12">
        <Intro />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
