import Link from "next/link";
import { aboutMe } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Section from "../section";

const getFaIcon = (name: string): React.ReactNode => {
  switch (name) {
    case "Email":
      return (
        <FontAwesomeIcon icon={faAt} className="text-foreground-secondary" />
      );
    case "GitHub":
      return (
        <FontAwesomeIcon
          icon={faGithub}
          className="text-foreground-secondary"
        />
      );

    default:
      return (
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-foreground-secondary"
        />
      );
  }
};
export default function Intro() {
  return (
    <Section>
      <h2 className="font-bold text-3xl">&gt; About Me</h2>
      <p>{aboutMe.introduction}</p>
      <p>
        My skills include:{" "}
        <span className="font-bold text-header-secondary">
          {aboutMe.skills.join(", ").toString()}
        </span>
      </p>
      <p>
        Here is where you can find my{" "}
        <Link
          href={aboutMe.resumeLink as string}
          className="underline font-bold text-header-secondary"
        >
          resume
        </Link>
      </p>
      <div>
        <p>If you want to reach out, here is where to find me:</p>
        <div className="flex flex-row gap-2">
          {aboutMe.socials.map((media) => (
            <Link
              href={media.link}
              key={media.name}
              className="underline flex items-center gap-1"
            >
              {getFaIcon(media.name)}
              {media.name}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-foreground-secondary">
        {" "}
        <FontAwesomeIcon icon={faLocationPin} /> {aboutMe.location}
      </p>
    </Section>
  );
}
