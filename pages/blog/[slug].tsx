import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";
import markdownToHtml from "../../helpers/mdtohtml";
import markdownStyles from "./markdown-styles.module.scss";
import Head from "next/head";

interface Props {
  data: {
    title: string;
    author: string;
    date: string;
  };
  slug: string;
  content: string;
}

export default function PostPage({ data, slug, content }: Props) {
  console.log(content);
  return (
    <>
      <Head>
        <title>{data.title} | Jaime Trovoada</title>
        <meta name="description" content="Jaime's blog" />
        {/*   <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/*  <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <article className="max-w-2xl mx-auto">
        <div
          className={`${markdownStyles["markdown"]} prose prose-slate prose-base `}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const files = readdirSync(path.join("_posts"));

  const paths = files
    .filter((filename) => filename.match(/\.md$/))
    .map((filename) => ({
      params: {
        slug: filename.replace(".md", ""),
      },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const mdWithMeta = readFileSync(path.join("_posts", slug + ".md"), "utf-8");

  const { data, content } = matter(mdWithMeta);

  return {
    props: {
      data,
      slug,
      content: await markdownToHtml(content || ""),
    },
  };
}
