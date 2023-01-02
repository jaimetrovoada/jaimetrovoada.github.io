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
      </Head>
      <main className="flex flex-col gap-12">
        <Intro />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
