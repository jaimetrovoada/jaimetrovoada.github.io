import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkPrism from "remark-prism";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkPrism)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
