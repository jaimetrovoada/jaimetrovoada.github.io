import React, { useEffect } from "react";
import { aboutMe, meta } from "../data";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import Prism from "prismjs";
import Head from "next/head";
import { useRouter } from "next/router";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faLocationPin } from "@fortawesome/free-solid-svg-icons";

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
  // const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    // setMounted(true);
    Prism.highlightAll();
  }, []);

  /* if (!mounted) {
    return null;
  } */

  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        {/* <meta
          property="og:url"
          content={`https://jaimetrovoada.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://jaimetrovoada.vercel.app${router.asPath}`}
        /> */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex max-h-screen min-h-screen flex-col gap-4 p-4 md:flex-row md:p-8">
        <aside className="flex h-fit basis-1/3 flex-col gap-4 rounded-2xl bg-background p-4 transition-all">
          <Link href="/" className="flex flex-row items-center gap-2">
            <Image
              src={aboutMe.avatar as string}
              alt={"avatar"}
              width={50}
              height={50}
            />
            <h1 className="bg-gradient-to-r from-header-primary to-header-secondary bg-clip-text text-xl font-bold text-transparent md:-skew-y-6 md:text-5xl">
              &lt;{aboutMe.name} /&gt;
            </h1>
          </Link>
          <h2 className="text-lg font-bold text-foreground">
            {aboutMe.occupation}
          </h2>

          {router.asPath.includes("/blog") ? null : (
            <>
              <Link
                href="/blog"
                className="font-bold text-header-secondary underline"
              >
                Blog
              </Link>
              <div>
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
              <div>
                <p className="font-bold">My Skills:</p>
                <span className="">{aboutMe.skills.join(", ").toString()}</span>
              </div>
              <Link
                href={aboutMe.resumeLink as string}
                className="font-bold text-header-secondary underline"
              >
                Resume
              </Link>
              <p className="text-foreground-secondary">
                <FontAwesomeIcon icon={faLocationPin} /> {aboutMe.location}
              </p>
            </>
          )}
          <footer className="mt-14 hidden flex-row justify-around bg-background-secondary p-4 md:flex">
            <p>&copy; {getYear()} - Jaime Trovoada</p>
          </footer>
        </aside>
        <main className="flex flex-col gap-14 rounded-2xl bg-background p-4">
          {children}
        </main>
        <button
          className="fixed bottom-6 right-6 rounded-full bg-background-secondary py-2 px-3 text-2xl"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          aria-label="theme-switcher"
        >
          {resolvedTheme === "dark" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
        <footer className="mt-14 flex flex-row justify-around bg-background-secondary p-4 md:hidden">
          <p>&copy; {getYear()} - Jaime Trovoada</p>
        </footer>
      </div>
    </>
  );
}
