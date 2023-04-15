import markdownStyles from "./markdown-styles.module.scss";
import api from "../../lib/api";
import { InferGetStaticPropsType } from "next";
import * as primsicHelper from "@prismicio/helpers";
import Head from "next/head";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function PostPage({ post }: PageProps) {
  const title = primsicHelper.asText(post.data.title);
  const description = primsicHelper.asText(post.data.description);
  const keywords = post.data.keywords as string;

  return (
    <>
      <Head>
        <title>{`${title} | Jaime Trovoada`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={`${title} | Jaime Trovoada`} />
        <meta
          property="og:image"
          content={`https://jaimetrovoada.vercel.app/api/og?title=${title}`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:title" content={`${title} | Jaime Trovoada`} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`https://jaimetrovoada.vercel.app/api/og?title=${title}`}
        />
      </Head>
      <div className="rounded-2xl bg-background p-4">
        <article
          className={`${markdownStyles["markdown"]} container prose prose-base prose-slate mx-auto`}
        >
          <PrismicRichText
            field={post.data.content}
            components={{
              image: ({ node }) => (
                <Image
                  src={node.url}
                  alt={node.alt || "image"}
                  width={500}
                  height={500}
                  priority
                  className="aspect-auto h-auto w-auto object-cover"
                />
              ),
            }}
          />
        </article>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await api.getAllPosts();

  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

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
  const post = await api.getPostByUid(slug);

  return {
    props: {
      post: post,
    },
  };
}
