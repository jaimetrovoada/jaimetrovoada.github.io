import markdownStyles from "./markdown-styles.module.scss";
import api from "@/lib/api";
import { Metadata } from "next";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { ImageResponse } from "next/server";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const post = await getPost(params);
  return (
    <>
      <div className="rounded-2xl bg-background p-4">
        <ReactMarkdown
          className={`${markdownStyles["markdown"]} container prose prose-base prose-slate mx-auto`}
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
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title + " | " + "Jaime Trovoada",
      description: post.description,
      images: [image],
    },
  };
}
