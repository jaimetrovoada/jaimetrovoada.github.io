import React, { useEffect, useState } from "react";
import { aboutMe, meta } from "../data";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import Prism from "prismjs";
import Head from "next/head";
import router from "next/router";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    Prism.highlightAll();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <meta
          property="og:url"
          content={`https://jaimetrovoada.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://jaimetrovoada.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta name="twitter:card" content="summary" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen h-screen flex flex-col">
        <header className="fixed px-4 py-2 bg-background-secondary-75 backdrop-blur-md h-16 z-10 w-screen">
          <div className="flex flex-row justify-between items-center container mx-auto">
            <div>
              <Link href="/" className="grid grid-flow-col">
                <div>
                  <Image
                    src="/images/avatar.webp"
                    alt={"avatar"}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <h1 className="font-bold text-xl">{aboutMe.name}</h1>
                  <h2 className="text-foreground-secondary">
                    {aboutMe.occupation}
                  </h2>
                </div>
              </Link>
            </div>
            <div>
              <Link
                href="/blog"
                className="font-bold text-header-secondary underline"
              >
                Blog
              </Link>
            </div>
          </div>
        </header>
        <div className="mt-20 flex-1 overflow-y-auto">
          {children}
          <button
            className="bg-background-secondary absolute bottom-6 right-6 text-2xl rounded-full py-2 px-3"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="theme-switcher"
          >
            {resolvedTheme === "dark" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
