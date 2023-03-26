import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "../../data";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faTools } from "@fortawesome/free-solid-svg-icons";
import Section from "../section";

interface CardProps {
  title: string;
  // description: string;
  tools: string;
  source: string;
  live?: string;
}
function Card({ title, tools, source, live }: CardProps) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded bg-background-secondary p-5 md:transition-all md:hover:-translate-y-1 md:hover:-translate-x-1 md:hover:shadow-[5px_5px_0_0_theme(colors.foreground)] md:hover:shadow-foreground">
      <p className="font-bold text-header-secondary">{title}</p>
      {/*       <p>{description}</p> */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faTools} />
          <p>{tools}</p>
        </div>
        <div className="flex flex-row gap-2">
          <Link
            href={source}
            className="flex items-center gap-1 text-foreground-secondary underline"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </Link>
          {live ? (
            <>
              <Link
                href={live}
                className="flex items-center gap-1 text-foreground-secondary underline"
              >
                <FontAwesomeIcon icon={faGlobe} />
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
    <Section>
      <h2 className="text-3xl font-bold"> &gt; Projects</h2>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
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
    </Section>
  );
}
