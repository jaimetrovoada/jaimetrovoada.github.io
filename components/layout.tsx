"use client";

import React, { useEffect } from "react";
import Prism from "prismjs";
import Details from "./views/details";
import { AboutMeProps } from "@/types";

interface LayoutProps {
  children: React.ReactNode;
  resumeUrl: string;
  aboutMe: AboutMeProps;
}

export default function Layout({ children, resumeUrl, aboutMe }: LayoutProps) {
  useEffect(() => {
    // setMounted(true);
    Prism.highlightAll();
  }, []);

  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <>
      <Details resumeUrl={resumeUrl} aboutMe={aboutMe} />
      <main className="flex flex-1 flex-col gap-4 pb-4 md:overflow-y-auto">
        {children}
      </main>
      <footer className="mt-14 flex flex-row justify-around p-4 text-slate-200 md:hidden">
        <p>&copy; {getYear()} - Jaime Trovoada</p>
      </footer>
    </>
  );
}
