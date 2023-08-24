import ContactForm from "@/components/contactForm";
import { getClasses } from "@/lib/utils";
import { type ClassValue } from "clsx";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const sectionStyle: ClassValue = getClasses(
  "flex flex-col gap-2 [&_p]:text-slate-300"
);
const h3Style: ClassValue = getClasses("text-lg font-bold");

const Page = () => {
  return (
    <div className="bg-neutral-95 flex flex-col gap-6 rounded-2xl border border-gray-600/50 bg-neutral-950 p-4">
      <section className={sectionStyle}>
        <h3 className={h3Style}>Hi there!</h3>
        <p>
          My name is <span className="text-slate-200">Jaime</span>, I&apos;m a
          Fullstack Developer, who specializes in building web applications with{" "}
          <strong className="font-semibold text-slate-200">
            React/Next.js
          </strong>
          .
        </p>
      </section>
      <section className={sectionStyle}>
        <h3 className={h3Style}>Why Next.js</h3>
        <p>
          <Link
            href="https://nextjs.org/showcase"
            className="font-semibold text-slate-200 underline hover:text-yellow-400"
          >
            Next.js
          </Link>{" "}
          is a powerful framework for building content-heavy websites. It can be
          used to create static or server-rendered pages, making it ideal for
          both performance and SEO.{" "}
        </p>
        <p>
          Next.js is also compatible with a wide range of content management
          systems (CMS), such as Shopify, Contentful, WordPress, etc. This makes
          it a good choice for projects that require a lot of content.
        </p>
      </section>
      <section className={sectionStyle}>
        <h3 className={h3Style}>Get in touch</h3>
        <ContactForm />
      </section>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Freelance Web Developer | Jaime Trovoada",
  description: "",
  keywords: "freelance, next.js, nextjs, web, developer",
  openGraph: {},
  twitter: {},
};

export default Page;
