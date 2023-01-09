import { aboutMe } from "../../data";
import Section from "../section";
import Image from "next/image";
import heroStyles from "./hero.module.scss";

export default function Hero() {
  const { name, occupation } = aboutMe;
  return (
    <Section
      className={`bg-hero-illustration bg-no-repeat bg-contain bg-bottom md:bg-none h-screen ${heroStyles["hero"]}`}
    >
      <aside className="flex flex-col gap-6 md:max-w-screen-sm">
        <h2 className="font-bold text-4xl md:text-5xl -skew-y-6 bg-clip-text bg-gradient-to-r from-header-primary to-header-secondary text-transparent lg:whitespace-nowrap">
          &lt;{name} /&gt;
        </h2>
        <h2 className="font-bold text-2xl text-foreground mt-10">
          {occupation}
        </h2>
      </aside>
      <aside className="hidden md:block">
        <Image
          src="/images/website-development.svg"
          width={800}
          height={600}
          alt="developer-illustration"
        />
      </aside>
    </Section>
  );
}
