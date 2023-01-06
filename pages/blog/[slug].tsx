import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";
import markdownToHtml from "../../helpers/mdtohtml";
import markdownStyles from "./markdown-styles.module.scss";
import Head from "next/head";
import { Frontmatter } from "../../types";

interface Props {
  frontmatter: Frontmatter;
  slug: string;
  content: string;
}

export default function PostPage({ frontmatter, slug, content }: Props) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | Jaime Trovoada</title>
        <meta name="description" content={frontmatter.summary} />
        <meta name="keywords" content={frontmatter.keywords.join(", ")} />
        <meta property="og:description" content={frontmatter.summary} />
        <meta
          property="og:title"
          content={`${frontmatter.title} | Jaime Trovoada`}
        />
        <meta
          property="og:image"
          content={`https://jaimetrovoada.vercel.app/api/og?title=${frontmatter.title}`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          name="twitter:title"
          content={`${frontmatter.title} | Jaime Trovoada`}
        />
        <meta name="twitter:description" content={frontmatter.summary} />
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

  const { data: frontmatter, content } = matter(mdWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content: await markdownToHtml(content || ""),
    },
  };
}
