import client from "../client";

export interface SanityPost {
  author: Author;
  content: string;
  keywords: string;
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
}

export interface Author {
  name: string;
}

const getPosts = async () => {
  const posts = await client.fetch<
    Pick<SanityPost, "slug" | "title" | "description" | "publishedAt">[]
  >(
    `*[_type == "post" && defined(slug.current)]{"slug": slug.current, title, description, publishedAt}`
  );

  return posts;
};

const getPostBySlug = async (slug: string) => {
  const post = await client.fetch<SanityPost>(
    `
    *[_type == "post" && slug.current == $slug][0]{title, "slug": slug.current, content, author->{name}, keywords, description}
  `,
    { slug }
  );

  return post;
};

export default { getPosts, getPostBySlug };
