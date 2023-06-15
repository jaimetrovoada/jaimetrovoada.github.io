import { aboutMe } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Linkedin, GitHub, AtSign, MapPin, ArrowRight } from "react-feather";

const SocialIcon: React.FC<{ social: string }> = ({ social }) => {
  switch (social) {
    case "Email":
      return <AtSign size={16} />;
    case "GitHub":
      return <GitHub size={16} />;

    default:
      return <Linkedin size={16} />;
  }
};

interface Props {
  resumeUrl: string;
}

const Details = ({ resumeUrl }: Props) => {
  const path = usePathname();

  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <aside className="flex h-fit basis-1/3 flex-col gap-4 rounded-2xl bg-gray-800/50 p-4 text-slate-200 shadow-md transition-all">
      <Link href="/" className="mx-auto rounded-full bg-gray-700/25 p-2">
        <Image
          src={aboutMe.avatar as string}
          alt={"avatar"}
          width={100}
          height={100}
        />
      </Link>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-yellow-400 md:text-4xl">
          <Link href="/">{aboutMe.name}</Link>
        </h1>
        <h2 className="text-lg font-semibold text-blue-400">
          {aboutMe.occupation}
        </h2>
      </div>

      <div className="flex w-fit flex-row items-center gap-2 rounded-full bg-gray-600/50 p-2 text-xs leading-none text-gray-200">
        <MapPin size={12} />
        <span>{aboutMe.location}</span>
      </div>

      <div className={`${path?.includes("/blog") && "hidden"} md:block`}>
        <p className="font-semibold">Get in touch:</p>
        <div className="flex flex-row gap-2">
          {aboutMe.socials.map((media) => (
            <Link
              href={media.link}
              key={media.name}
              className="flex items-center gap-1 text-slate-300 underline"
            >
              <SocialIcon social={media.name} />
              {media.name}
            </Link>
          ))}
        </div>
      </div>
      <div className={`${path?.includes("/blog") && "hidden"} md:block`}>
        <p className="font-semibold">My Skills:</p>
        <div className="flex flex-row flex-wrap gap-2">
          {aboutMe.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-gray-600/50 p-2 text-xs leading-none text-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-row gap-4">
        <Link
          href="/blog"
          className="inline-flex items-center text-lg font-semibold text-header-secondary underline"
        >
          Blog
          <ArrowRight size={16} />
        </Link>
        <Link
          href={resumeUrl}
          className="inline-flex items-center text-lg font-semibold text-header-secondary underline"
        >
          Resume
          <ArrowRight size={16} />
        </Link>
      </div>
      <footer className="mx-auto hidden p-4 md:block">
        <p>&copy; {getYear()} - Jaime Trovoada</p>
      </footer>
    </aside>
  );
};

export default Details;
