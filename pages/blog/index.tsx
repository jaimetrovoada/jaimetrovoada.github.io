/* eslint-disable @next/next/no-img-element */
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Wow from "../../components/nopost";
import Head from "next/head";
import { Frontmatter } from "../../types";
import { meta } from "../../data";
import Image from "next/image";
import BlogBody from "../../components/blogs";

interface PostProps {
  slug: string;
  frontmatter: Frontmatter;
}

function Card({ post }: { post: PostProps }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col gap-3 bg-background-secondary p-5 rounded md:hover:shadow-[5px_5px_0_0_theme(colors.foreground)] md:transition-all md:hover:shadow-foreground md:hover:-translate-y-1 md:hover:-translate-x-1 hover:underline"
    >
      <img
        src={`https://jaimetrovoada.vercel.app/api/og?title=${post.frontmatter.title}`}
        width="100%"
        height={50}
        className="object-cover aspect-auto"
        alt="post image preview"
      />
      <h2 className="text-xl font-bold text-header-secondary">
        {post.frontmatter.title}
      </h2>
    </Link>
  );
}

export default function Posts({ posts }: { posts: PostProps[] }) {
  if (posts.length === 0) {
    return (
      <>
        <BlogBody>
          <Wow />
        </BlogBody>
      </>
    );
  }

  return (
    <>
      <BlogBody>
        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
          {posts.map((post, index) => {
            return <Card post={post} key={`${index}-${post.slug}`} />;
          })}
        </div>
      </BlogBody>
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
