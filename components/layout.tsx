"use client";

import React, { useEffect } from "react";
import Prism from "prismjs";
import Details from "./views/details";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
      <Details />
      <main className="flex flex-1 flex-col gap-14 pb-4 md:overflow-y-auto">
        {children}
      </main>
      <footer className="mt-14 flex flex-row justify-around bg-background-secondary p-4 md:hidden">
        <p>&copy; {getYear()} - Jaime Trovoada</p>
      </footer>
    </>
  );
}
