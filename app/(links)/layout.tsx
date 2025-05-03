import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

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
          " flex h-screen max-w-full flex-col gap-4 overflow-y-auto p-4 md:flex-row md:p-8 bg-zinc-900 text-slate-200"
        }
      >{children}</body>
    </html>
  );
}
