import axios from "axios";

export interface PostsResponse {
  data: PostsResponseData;
  extensions: Extensions;
}

export interface PostsResponseData {
  posts: PostsResponsePosts;
}

export interface PostsResponsePosts {
  nodes: PostsResponseNode[];
}

export interface PostsResponseNode {
  excerpt: string;
  slug: string;
  title: string;
}

export interface Extensions {
  debug: Debug[];
}

export interface Debug {
  type: string;
  message: string;
}

export interface PostBySlugResponse {
  data: PostBySlugData;
  extensions: Extensions;
}

export interface PostBySlugData {
  post: PostBySlugPost;
}

export interface PostBySlugPost {
  content: string;
  slug: string;
  title: string;
}

const API_URL = process.env.NEXT_PUBLIC_WPGRAPHQL_URL as string;

async function fetchAPI<T>(query = "", variables: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await axios.post<T>(
    API_URL,
    {
      query,
      variables,
    },
    {
      headers,
    }
  );

  return res.data;
}

export async function getPosts(first = 10) {
  const res = await fetchAPI<PostsResponse>(
    `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            excerpt
            slug
            title
          }
        }
      }`,
    { first }
  );

  return res.data.posts.nodes;
}

export async function getPostBySlug(slug: string) {
  console.log({ slug });
  const id = slug;
  const res = await fetchAPI<PostBySlugResponse>(
    `query GetPost($id: ID = "") {
    post(id: $id, idType: SLUG) {
      content
      slug
      title
    }
  }`,
    { id }
  );

  return res.data.post;
}

export default { getPosts, getPostBySlug };
