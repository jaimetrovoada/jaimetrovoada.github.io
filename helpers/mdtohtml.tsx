import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkPrism from "remark-prism";
import remarkMath from "remark-math";
import {
  remarkDefinitionList,
  defListHastHandlers,
} from "remark-definition-list";
import rehypeKatex from "rehype-katex";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkPrism)
    .use(remarkMath)
    .use(remarkDefinitionList)
    .use(remarkRehype, {
      handlers: {
        ...defListHastHandlers,
      },
    })
    .use(rehypeKatex)
    .use(remarkGfm)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
