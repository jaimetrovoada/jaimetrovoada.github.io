import Link from "next/link";
import { meta } from "@/data";
import api, { SanityPost } from "@/lib/api";
import { Metadata } from "next";

interface CardProps {
  post: Pick<SanityPost, "slug" | "title" | "description" | "publishedAt">;
}

function Card({ post }: CardProps) {
  const pubDate = new Date(post.publishedAt);
  const year = pubDate.getFullYear();
  const monthDay = pubDate.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="group flex flex-row gap-3 overflow-hidden rounded-lg bg-neutral-950 text-slate-200">
      <div className="rotate-180 p-2 py-4 [writing-mode:_vertical-lr]">
        <time
          dateTime={post.publishedAt}
          className="flex items-center justify-between gap-2 text-xs font-semibold uppercase text-slate-400"
        >
          <span>{year}</span>
          <span className="w-px flex-1 bg-gray-100/10"></span>
          <span>{monthDay}</span>
        </time>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2">
        <Link
          href={`/blog/${post.slug}`}
          className="p-4 pb-0 text-xl font-semibold uppercase group-hover:underline"
        >
          {post.title}
        </Link>
        <p className="px-4 text-sm/relaxed text-slate-400 line-clamp-3">
          {post.description}
        </p>
        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            href={`/blog/${post.slug}`}
            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
          >
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function Page() {
  const posts = await getPosts();
  console.log({ posts });
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {posts && posts.length ? (
          posts.map((post) => {
            return <Card post={post} key={`${post.slug}`} />;
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

async function getPosts() {
  const posts = await api.getPosts();
  return posts;
}

export const revalidate = 3600;

export const metadata: Metadata = {
  title: `Blog | ${meta.title} `,
  description: meta.description.blog,
  keywords: meta.keywords.blog,
  openGraph: {
    title: `Blog | ${meta.title} `,
    description: meta.description.blog,
    type: "website",
    url: "https://jaimetrovoada.vercel.app/blog",
    images: [
      {
        url: `https://jaimetrovoada.vercel.app/api/og?title=Blog`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${meta.title} `,
    description: meta.description.blog,
    images: [
      {
        url: `https://jaimetrovoada.vercel.app/api/og?title=Blog`,
        alt: "Jaime's Blog",
      },
    ],
  },
};
