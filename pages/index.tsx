import Intro from "../components/views/intro";
import Experience from "../components/views/experience";
import Projects from "../components/views/projecs";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-12">
        <Intro />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
