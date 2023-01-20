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
    <div className="bg-background-secondary p-5 rounded flex flex-col gap-4 justify-between md:hover:shadow-[5px_5px_0_0_theme(colors.foreground)] md:transition-all md:hover:shadow-foreground md:hover:-translate-y-1 md:hover:-translate-x-1">
      <p className="font-bold text-header-secondary">{title}</p>
      {/*       <p>{description}</p> */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faTools} />
          <p>{tools}</p>
        </div>
        <div className="flex flex-row gap-2">
          <Link
            href={source}
            className="underline text-foreground-secondary flex items-center gap-1"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </Link>
          {live ? (
            <>
              <Link
                href={live}
                className="underline text-foreground-secondary flex items-center gap-1"
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
      <h2 className="font-bold text-3xl"> &gt; Experience</h2>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4">
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
