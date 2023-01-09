import Link from "next/link";
import Head from "next/head";
import { meta } from "../data";
import Image from "next/image";
import React from "react";

export default function BlogBody({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Blog | Jaime Trovoada</title>
        <meta name="description" content={meta.description.blog} />
        <meta name="keywords" content={meta.keywords.blog} />
        <meta property="og:description" content={meta.description.blog} />
        <meta property="og:title" content="Blog | Jaime Trovoada" />
        <meta
          property="og:image"
          content={`https://jaimetrovoada.vercel.app/api/og?title=Blog | Jaime Trovoada`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:title" content="Blog | Jaime Trovoada" />
        <meta name="twitter:description" content={meta.description.blog} />
        <meta
          name="twitter:image"
          content={`https://jaimetrovoada.vercel.app/api/og?title=Blog | Jaime Trovoada`}
        />
      </Head>
      <div className="mt-20 container mx-auto p-4 flex flex-col gap-16">
        <div className="mx-auto">
          <Image
            src="/images/hero-blog.svg"
            alt="blog-illustration"
            width={400}
            height={300}
          />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
