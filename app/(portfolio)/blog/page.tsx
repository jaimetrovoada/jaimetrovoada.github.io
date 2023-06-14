import Link from "next/link";
import { meta } from "@/data";
import api, { SanityPost } from "@/lib/api";
import Image from "next/image";
import { Metadata } from "next";

interface CardProps {
  post: Pick<SanityPost, "slug" | "title" | "description">;
}

function Card({ post }: CardProps) {
  return (
    <div className="group flex flex-row gap-3 overflow-hidden rounded-lg bg-gray-800/50 text-slate-200">
      <div className="relative hidden aspect-square object-cover sm:block sm:basis-1/4">
        <Image
          src={`https://jaimetrovoada.vercel.app/api/og?title=${post.title}`}
          fill
          className="object-cover"
          alt="post image preview"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2">
        <Link
          href={`/blog/${post.slug}`}
          className="p-4 pb-0 text-xl font-semibold uppercase group-hover:underline"
        >
          {post.title}
        </Link>
        <p className="px-4 text-sm/relaxed text-gray-400 line-clamp-3">
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
    images: [
      {
        url: `https://jaimetrovoada.vercel.app/api/og?title=Blog | Jaime Trovoada`,
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${meta.title} `,
    description: meta.description.blog,
    images: [
      {
        url: `https://jaimetrovoada.vercel.app/api/og?title=Blog | Jaime Trovoada`,
        alt: "Jaime's Bl",
      },
    ],
  },
};
