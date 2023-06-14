import { aboutMe } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Linkedin, GitHub, AtSign, MapPin } from "react-feather";

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

const Details = () => {
  const path = usePathname();

  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <aside className="flex h-fit basis-1/3 flex-col gap-4 rounded-2xl bg-white p-4 shadow-md transition-all md:sticky md:top-0">
      <Link
        href="/"
        className="mx-auto rounded-2xl bg-background-secondary p-2"
      >
        <Image
          src={aboutMe.avatar as string}
          alt={"avatar"}
          width={100}
          height={100}
        />
      </Link>
      <Link href="/">
        <h1 className="bg-gradient-to-r from-header-primary to-header-secondary bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
          &lt;{aboutMe.name} /&gt;
        </h1>
      </Link>
      <h2 className="text-lg font-bold text-foreground">
        {aboutMe.occupation}
      </h2>

      <Link href="/blog" className="font-bold text-header-secondary underline">
        Blog
      </Link>
      <div className={`${path?.includes("/blog") && "hidden"} md:block`}>
        <p className="font-bold">Get in touch:</p>
        <div className="flex flex-row gap-2">
          {aboutMe.socials.map((media) => (
            <Link
              href={media.link}
              key={media.name}
              className="flex items-center gap-1 underline"
            >
              <SocialIcon social={media.name} />
              {media.name}
            </Link>
          ))}
        </div>
      </div>
      <div className={`${path?.includes("/blog") && "hidden"} md:block`}>
        <p className="font-bold">My Skills:</p>
        <span className="">{aboutMe.skills.join(", ").toString()}</span>
      </div>
      <Link
        href={aboutMe.resumeLink as string}
        className={"font-bold underline"}
      >
        Resume
      </Link>
      <div className="flex w-fit flex-row items-center gap-2 rounded-full bg-gray-100 p-2 text-xs">
        <MapPin size={12} />
        <span>{aboutMe.location}</span>
      </div>
      <footer className="mt-14 hidden flex-row justify-around bg-background-secondary p-4 md:flex">
        <p>&copy; {getYear()} - Jaime Trovoada</p>
      </footer>
    </aside>
  );
};

export default Details;
