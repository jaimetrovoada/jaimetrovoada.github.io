import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Wow from "../../components/nopost";
import Head from "next/head";
import { Frontmatter } from "../../types";

interface PostProps {
  slug: string;
  frontmatter: Frontmatter;
}

export default function Posts({ posts }: { posts: PostProps[] }) {

  if (posts.length === 0) {
    return (
      <>
        <Head>
          <title>Blog | Jaime Trovoada</title>
          <meta name="description" content="Jaime's blog" />
          {/*   <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          {/*  <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <Wow />;
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Blog | Jaime Trovoada</title>
        <meta name="description" content="Jaime's blog" />
        {/*   <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/*  <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post, index) => {
          return (
            <Link
              href={`/blog/${post.slug}`}
              className="bg-background-secondary p-5 rounded md:hover:shadow-[5px_5px_0_0_theme(colors.foreground)] md:transition-all md:hover:shadow-foreground md:hover:-translate-y-1 md:hover:-translate-x-1"
              key={`${index}-${post.slug}`}
            >
              <h2 className="text-header-secondary font-bold text-xl">
                {post.frontmatter.title}
              </h2>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = readdirSync(path.join("_posts"));

  const posts = files
    .filter((filename) => filename.match(/\.md$/))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");

      const mdWithMeta = readFileSync(path.join("_posts", filename), "utf-8");

      const { data: frontmatter } = matter(mdWithMeta);

      return { slug, frontmatter };
    });

  return {
    props: { posts: posts },
  };
}
