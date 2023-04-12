import markdownStyles from "./markdown-styles.module.scss";
import Head from "next/head";
import api, { PostBySlugPost } from "../../lib/api";

interface Props {
  post: PostBySlugPost;
  slug: string;
  content: string;
}

export default function PostPage({ post, slug, content }: Props) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Jaime Trovoada`}</title>
{/*         <meta name="description" content={frontmatter.summary} />
        <meta name="keywords" content={frontmatter.keywords.join(", ")} />
        <meta property="og:description" content={frontmatter.summary} /> */}
        <meta property="og:title" content={`${post.title} | Jaime Trovoada`} />
        <meta
          property="og:image"
          content={`https://jaimetrovoada.vercel.app/api/og?title=${post.title}`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:title" content={`${post.title} | Jaime Trovoada`} />
{/*         <meta name="twitter:description" content={frontmatter.summary} /> */}
        <meta
          name="twitter:image"
          content={`https://jaimetrovoada.vercel.app/api/og?title=${post.title}`}
        />
      </Head>

      <div className="rounded-2xl bg-background p-4">
        <article
          className={`${markdownStyles["markdown"]} container prose prose-base prose-slate mx-auto`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
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
  params: {
    slug: string;
  };
}) {
  const post = await api.getPostBySlug(slug);
  const content = post.content;

  return {
    props: {
      slug,
      content,
      post: post,
    },
  };
}
