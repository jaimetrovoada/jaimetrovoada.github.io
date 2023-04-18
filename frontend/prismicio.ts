import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

export const repositoryName = prismic.getRepositoryName(
  process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT as string
);

const routes = [
  {
    type: "blog",
    path: "/:uid",
  },
];

export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(
    process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT as string,
    { routes, ...config }
  );

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
}
