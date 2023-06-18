import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "string",
    }),
    defineField({
      name: "liveLink",
      title: "Live Link",
      type: "url",
    }),
    defineField({
      name: "githubLink",
      title: "Github Link",
      type: "url",
    }),
  ],
});
