import Link from "next/link";
import { aboutMe } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Section from "../section";

export default function Intro() {
  return (
    <Section>
      <h2 className="text-3xl font-bold">&gt; About Me</h2>
      <p>{aboutMe.introduction}</p>
    </Section>
  );
}
