import React from "react";
import { aboutMe } from "../data";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const handleSwitchTheme = () => {
    console.log("theme switch pressed");
  };

  return (
    <>
      <header className="fixed px-10 py-1 bg-[#1d2021bf] backdrop-blur-md h-16 z-10 w-screen">
        <div className="flex flex-row justify-between">
          <div>
            <p>{aboutMe.name}</p>
            <p>{aboutMe.occupation}</p>
          </div>
          <div>
            <Link href="/posts">Blog</Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 pt-20 flex-1 overflow-y-auto flex flex-col gap-12">
        {children}
        <button
          className="bg-[#1d2021bf] absolute bottom-6 right-6 text-3xl rounded-full p-3"
          onClick={() => handleSwitchTheme()}
        >
          
        </button>
      </div>
    </>
  );
}
