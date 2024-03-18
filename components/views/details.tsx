"use client";

import { aboutMe as _aboutMe } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Linkedin,
  GitHub,
  MapPin,
  ArrowRight,
  Home,
  Clipboard,
} from "react-feather";
import { useCopyToClipboard } from "@/lib/hooks";
import { useState } from "react";
import { getClasses } from "@/lib/utils";
import { AboutMeProps } from "@/types";

const SocialIcon: React.FC<{ social: string }> = ({ social }) => {
  switch (social) {
    case "GitHub":
      return <GitHub size={14} />;

    default:
      return <Linkedin size={14} />;
  }
};

interface Props {
  resumeUrl: string;
  aboutMe: AboutMeProps;
}

const Details = ({ resumeUrl, aboutMe }: Props) => {
  const path = usePathname();

  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  const [_, copy] = useCopyToClipboard();

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    const ok = await copy(aboutMe.email);
    console.log({ ok });
    setCopied(ok);
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timeout);
  };

  return (
    <aside className="flex h-fit basis-1/3 flex-col gap-10 rounded-2xl bg-neutral-950 p-4 shadow-md transition-all">
      <div className="flex flex-col gap-4">
        <Link href="/" className="mx-auto rounded-full bg-gray-700/25 p-2">
          <Image
            src={_aboutMe.avatar as string}
            alt={"avatar"}
            width={100}
            height={100}
          />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-yellow-400 md:text-4xl">
            <Link href="/">{aboutMe.name}</Link>
          </h1>
          <h2 className="text-lg font-semibold text-blue-400">
            {aboutMe.occupation}
          </h2>
        </div>
      </div>

      <div
        className={`flex-col gap-4 ${
          path?.includes("/blog") ? "hidden md:flex" : "flex"
        }`}
      >
        <div>
          <p className="font-semibold">Get in touch:</p>
          <div className="flex flex-col gap-2">
            <span className="flex flex-row items-center gap-1 text-slate-300">
              Email:
              <Link
                href={`mailto:${aboutMe.email}`}
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                {aboutMe.email}
              </Link>
              <button
                onClick={copyToClipboard}
                className="relative cursor-pointer"
              >
                <Clipboard size={16} />
                <span
                  className={getClasses(
                    "absolute -right-1 top-1/2 hidden -translate-y-1/2 translate-x-full rounded-full bg-gray-600/25 px-1 text-sm text-slate-300",
                    { block: copied }
                  )}
                >
                  Copied!
                </span>
              </button>
            </span>
            <div className="flex flex-row flex-wrap gap-2">
              {aboutMe.socials.map((media) => (
                <Link
                  href={media.url}
                  key={media.name}
                  className="flex items-center gap-1 text-sm text-slate-300 underline"
                >
                  <SocialIcon social={media.name} />
                  {media.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="font-semibold">My Skills:</p>
          <div className="flex flex-row flex-wrap gap-2">
            {aboutMe.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-gray-600/25 p-2 text-xs leading-none text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex w-fit flex-row items-center gap-2 rounded-full  text-sm leading-none text-slate-300">
          <MapPin size={12} />
          <span>{aboutMe.location}</span>
        </div>
      </div>

      <div className="flex flex-row gap-4">
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
