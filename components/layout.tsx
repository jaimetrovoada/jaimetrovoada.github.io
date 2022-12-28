import React, { useEffect, useState } from "react";
import { aboutMe } from "../data";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen h-screen flex flex-col">
      <header className="fixed px-4 py-2 bg-background-secondary-75 backdrop-blur-md h-16 z-10 w-screen">
        <div className="flex flex-row justify-between items-center container mx-auto">
          <div className="grid grid-flow-col">
            <div>
              <Image
                src="/images/avatar.webp"
                alt={""}
                width={50}
                height={50}
              />
            </div>
            <div>
              <p className="font-bold text-xl">{aboutMe.name}</p>
              <p className="text-foreground-secondary">{aboutMe.occupation}</p>
            </div>
          </div>
          <div>
            <Link
              href="/posts"
              className="font-bold text-header-secondary underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </header>
      <div className=" px-4 pt-20 flex-1 overflow-y-auto">
        <div className="container mx-auto">{children}</div>
        <button
          className="bg-background-secondary absolute bottom-6 right-6 text-2xl rounded-full py-2 px-3"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </div>
    </div>
  );
}
