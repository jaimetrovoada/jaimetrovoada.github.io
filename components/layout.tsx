"use client";

import React, { useEffect } from "react";
import { aboutMe } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import Prism from "prismjs";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const SocialIcon: React.FC<{ social: string }> = ({ social }) => {
  switch (social) {
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
export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // setMounted(true);
    Prism.highlightAll();
  }, []);

  const path = usePathname();

  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <>
      <div className="flex max-h-screen min-h-screen flex-col gap-4 overflow-y-auto p-4 md:flex-row md:p-8">
        <aside className="flex h-fit basis-1/3 flex-col gap-4 rounded-2xl bg-background p-4 transition-all md:sticky md:top-0">
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

          <Link
            href="/blog"
            className="font-bold text-header-secondary underline"
          >
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
            className={`${
              path?.includes("/blog") && "hidden"
            } font-bold text-header-secondary underline md:block`}
          >
            Resume
          </Link>
          <p
            className={`${
              path?.includes("/blog") && "hidden"
            } text-foreground-secondary md:block`}
          >
            <FontAwesomeIcon icon={faLocationPin} /> {aboutMe.location}
          </p>
          <footer className="mt-14 hidden flex-row justify-around bg-background-secondary p-4 md:flex">
            <p>&copy; {getYear()} - Jaime Trovoada</p>
          </footer>
        </aside>
        <main className="flex flex-1 flex-col gap-14 rounded-2xl">
          {children}
        </main>
        <footer className="mt-14 flex flex-row justify-around bg-background-secondary p-4 md:hidden">
          <p>&copy; {getYear()} - Jaime Trovoada</p>
        </footer>
      </div>
    </>
  );
}
