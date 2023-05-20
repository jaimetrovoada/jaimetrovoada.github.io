import { Metadata } from "next";
import { meta } from "@/data";
import "@/styles/globals.css";
import { Providers } from "./providers";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
