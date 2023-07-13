import markdownStyles from "./markdown-styles.module.scss";
import api from "@/lib/api";
import { Metadata } from "next";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const post = await getPost(params);
  return (
    <>
      <div className="rounded-2xl bg-gray-800/50 p-4">
        <ReactMarkdown
          className={`${markdownStyles["markdown"]} container prose prose-base prose-slate mx-auto text-slate-200`}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            img: function ({ ...props }) {
              const alt = props.alt;

              return (
                <Image
                  src={props.src as string}
                  alt={alt as string}
                  width={500}
                  height={500}
                  className="object-fit aspect-auto h-auto w-auto"
                />
              );
            },
            h1: function ({ children }) {
              return <h1 className="text-3xl text-blue-400">{children}</h1>;
            },
            h2: function ({ children }) {
              return <h2 className="text-2xl text-blue-400">{children}</h2>;
            },
            h3: function ({ children }) {
              return <h3 className="text-xl text-blue-400">{children}</h3>;
            },
            strong: function ({ children }) {
              return (
                <strong className="font-bold text-indigo-300">
                  {children}
                </strong>
              );
            },
            a: function ({ href, children }) {
              return (
                <Link href={href as string} className="text-indigo-300">
                  {children}
                </Link>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await api.getPosts();

  const paths = posts.map((post) => {
    return { slug: post.slug };
  });

  return paths;
}

async function getPost(params: { slug: string }) {
  const post = await api.getPostBySlug(params.slug);

  return post;
}

export const dynamicParams = true,
  revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params);
  const image = `https://jaimetrovoada.vercel.app/api/og?title=${post.title}`;
  return {
    title: post.title + " | " + "Jaime Trovoada",
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title + " | " + "Jaime Trovoada",
      description: post.description,
      images: [{ url: image, type: "image/png" }],
      type: "article",
      url: `https://jaimetrovoada.vercel.app/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title + " | " + "Jaime Trovoada",
      description: post.description,
      images: [image],
    },
  };
}
