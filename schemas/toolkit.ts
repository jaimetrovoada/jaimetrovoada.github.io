
import { defineField, defineType } from "sanity";

export default defineType({
  name: "toolkit",
  title: "Toolkit",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
  ],
});
