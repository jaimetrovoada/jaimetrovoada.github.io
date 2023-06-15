import Layout from "@/components/layout";
import { Metadata } from "next";
import { meta } from "@/data";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Release } from "@/types";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description.home,
  keywords: meta.keywords.home,
  openGraph: {
    title: meta.title,
    description: meta.description.home,
    images: [
      {
        url: `https://jaimetrovoada.vercel.app/api/og?title=Jaime%20Trovoada`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description.home,
    images: [
      {
        url: `https://jaimetrovoada.vercel.app/api/og?title=Jaime%20Trovoada`,
        alt: "Jaime's portfolio",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [releases, _] = await getReleases();
  const assets = releases?.assets;
  const resume = assets?.find(
    (asset) => asset.name === "jaime_trovoada-resume.pdf"
  )?.browser_download_url;

  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " flex min-h-screen max-w-full flex-col gap-4 overflow-y-auto bg-gray-900 p-4 md:max-h-screen md:flex-row md:overflow-hidden md:p-8"
        }
      >
        <Layout resumeUrl={resume as string}>{children}</Layout>
      </body>
    </html>
  );
}

async function getReleases() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/jaimetrovoada/resume/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    const data: Release = await res.json();
    return [data, null] as const;
  } catch (error) {
    return [null, error] as const;
  }
}

export const revalidate = 86400;
