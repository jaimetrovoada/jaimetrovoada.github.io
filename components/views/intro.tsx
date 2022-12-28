import Link from "next/link";
import { aboutMe } from "../../data";

export default function Intro() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-bold text-3xl">&gt; About Me</h2>
      <p>{aboutMe.introduction}</p>
      <p>My skills include: {aboutMe.skills.join(", ").toString()}</p>
      <p>
        Here is where you can find my{" "}
        <Link href={aboutMe.resumeLink as string} className="underline">
          resume
        </Link>
      </p>
      <div>
        <p>If you want to reach out, here is where to find me:</p>
        <div className="flex flex-row gap-2">
          {aboutMe.socials.map((media) => (
            <Link href={media.link} key={media.name} className="underline">
              {media.name}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-foreground-secondary">{aboutMe.location}</p>
    </section>
  );
}
