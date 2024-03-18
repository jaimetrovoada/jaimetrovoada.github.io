import { ProjectProps, AboutMeProps, WorkProps } from "@/types";
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

const getProjects = async () => {
  const projects = await client.fetch<ProjectProps[]>(
    `*[_type == "projects"] | order(title asc)`
  );

  return projects;
};

const getAboutMe = async () => {
  const aboutMe = await client.fetch<AboutMeProps>(
    `*[_type == "author"]{name, ocupation, introduction, skills, image, location, email, socials}`
  );

  return aboutMe[0];
}

const getWork = async () => {
  const work = await client.fetch<WorkProps[]>(
    `*[_type == "work"]{company, position, startDate, endDate, description}`
  );

  return work;
}

export default { getPosts, getPostBySlug, getProjects, getAboutMe, getWork };
