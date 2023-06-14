import Link from "next/link";
import { meta } from "@/data";
import api, { SanityPost } from "@/lib/api";
import Image from "next/image";
import { Metadata } from "next";

interface CardProps {
  post: Pick<SanityPost, "slug" | "title">;
}

function Card({ post }: CardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-row gap-3 rounded bg-background p-5 hover:underline md:transition-all md:hover:-translate-x-1 md:hover:-translate-y-1 md:hover:shadow-[5px_5px_0_0_theme(colors.foreground)] md:hover:shadow-foreground"
    >
      <Image
        src={`https://jaimetrovoada.vercel.app/api/og?title=${post.title}`}
        width={100}
        height={100}
        className="aspect-auto h-auto w-auto object-cover"
        alt="post image preview"
      />
      <h2 className="text-xl font-bold text-header-secondary">{post.title}</h2>
    </Link>
  );
}

export default async function Page() {
  const posts = await getPosts();
  return (
    <>
      <div className="flex flex-col gap-8">
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
    card: 'summary_large_image',
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
