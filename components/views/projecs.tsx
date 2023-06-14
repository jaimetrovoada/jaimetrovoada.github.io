import { projects } from "../../data";
import Link from "next/link";
import Section from "../section";
import { GitHub, Globe, Tool } from "react-feather";

interface CardProps {
  title: string;
  tools: string;
  source: string;
  live?: string;
}
function Card({ title, tools, source, live }: CardProps) {
  return (
    <div className="grid grid-flow-row gap-4 rounded  bg-gray-50 p-4">
      <p className="font-bold text-header-secondary">{title}</p>
      <div className="flex flex-row items-center gap-2 text-sm">
        <Tool size={14} />
        <p className="flex-1">{tools}</p>
      </div>
      <div className="flex flex-row gap-2 self-end text-sm">
        <Link href={source} className="flex items-center gap-1 underline">
          <GitHub size={14} />
          GitHub
        </Link>
        {live ? (
          <>
            <Link href={live} className="flex items-center gap-1 underline">
              <Globe size={14} />
              Live
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section>
      <h2 className="text-3xl font-bold"> &gt; Projects</h2>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            title={project.title}
            tools={project.techStack}
            source={project.githubLink}
            live={project.liveLink}
            key={`${index}-${project.title}`}
          />
        ))}
      </div>
    </Section>
  );
}
