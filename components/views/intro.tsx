import { aboutMe } from "../../data";
import Section from "../section";

export default function Intro() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold text-indigo-300">&gt; About Me</h2>
      <p className="text-slate-300">{aboutMe.introduction}</p>
    </Section>
  );
}
