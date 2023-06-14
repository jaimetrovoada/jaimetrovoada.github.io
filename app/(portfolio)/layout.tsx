import Layout from "@/components/layout";
import { Metadata } from "next";
import { meta } from "@/data";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " flex min-h-screen max-w-full flex-col gap-4 overflow-y-auto bg-gray-900 p-4 md:max-h-screen md:flex-row md:overflow-hidden md:p-8"
        }
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
