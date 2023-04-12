/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import { meta } from "../../data";
import api, { PostsResponseNode } from "../../lib/api";

function Card({ post }: { post: PostsResponseNode }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-row gap-3 rounded bg-background p-5 hover:underline md:transition-all md:hover:-translate-y-1 md:hover:-translate-x-1 md:hover:shadow-[5px_5px_0_0_theme(colors.foreground)] md:hover:shadow-foreground"
    >
      <img
        src={`https://jaimetrovoada.vercel.app/api/og?title=${post.title}`}
        width={100}
        height={100}
        className="aspect-auto object-cover"
        alt="post image preview"
      />
      <h2 className="text-xl font-bold text-header-secondary">{post.title}</h2>
    </Link>
  );
}

export default function Posts({ posts }: { posts: PostsResponseNode[] }) {
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
      <div className="flex flex-col gap-8">
        {posts && posts.length ? (
          posts.map((post, index) => {
            return <Card post={post} key={`${index}-${post.slug}`} />;
          })
        ) : (
          <>
            <div className="mx-auto text-3xl font-bold">
              WOW!!! SUCH EMPTY!!!
            </div>
          </>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await api.getPosts();
  console.log({ posts });

  return {
    props: { posts: posts },
  };
}
