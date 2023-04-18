import markdownStyles from "./markdown-styles.module.scss";
import api from "../../lib/api";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import markdownToHtml from "../../helpers/mdtohtml";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function PostPage({ post, content }: PageProps) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Jaime Trovoada`}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <meta property="og:description" content={post.description} />
        <meta property="og:title" content={`${post.title} | Jaime Trovoada`} />
        <meta
          property="og:image"
          content={`https://jaimetrovoada.vercel.app/api/og?title=${post.title}`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:title" content={`${post.title} | Jaime Trovoada`} />
        <meta name="twitter:description" content={post.description} />
        <meta
          name="twitter:image"
          content={`https://jaimetrovoada.vercel.app/api/og?title=${post.title}`}
        />
      </Head>
      <div className="rounded-2xl bg-background p-4">
        <article
          className={`${markdownStyles["markdown"]} container prose prose-base prose-slate mx-auto`}
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
        naet
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await api.getPosts();

  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
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
  params: { slug: string };
}) {
  const post = await api.getPostBySlug(slug);

  const content = await markdownToHtml(post.content);
  return {
    props: {
      post: post,
      content,
    },
  };
}
