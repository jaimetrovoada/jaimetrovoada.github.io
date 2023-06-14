import { aboutMe } from "../../data";
import Section from "../section";

export default function Intro() {
  return (
    <Section>
      <h2 className="text-3xl font-bold">&gt; About Me</h2>
      <p>{aboutMe.introduction}</p>
    </Section>
  );
}
