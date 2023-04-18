import { createClient } from "@sanity/client";

export default createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_PROJECT_DATASET,
  useCdn: true,
  apiVersion: "2023-04-04",
});
