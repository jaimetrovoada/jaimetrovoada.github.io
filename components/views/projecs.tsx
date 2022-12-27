import { projects } from "../../data";
import Link from "next/link";

interface CardProps {
  title: string;
  // description: string;
  tools: string;
  source: string;
  live?: string;
}
function Card({ title, tools, source, live }: CardProps) {
  return (
    <div className="bg-[#1d2021] p-5 rounded flex flex-col justify-between">
      <p className="font-bold">{title}</p>
      {/*       <p>{description}</p> */}
      <div className="flex flex-col gap-3">
        <p>{tools}</p>
        <div className="flex flex-row gap-2">
          <Link href={source} className="underline ">
            GitHub
          </Link>
          {live ? (
            <>
              <Link href={live} className="underline ">
                Live
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-bold text-3xl"> &gt; Experience</h2>
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <Card
            title={project.title}
            //description={project.description as string}
            tools={project.techStack}
            source={project.githubLink}
            live={project.liveLink}
            key={`${index}-${project.title}`}
          />
        ))}
      </div>
    </section>
  );
}
