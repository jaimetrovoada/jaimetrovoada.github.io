
import Link from "next/link";
import api from "@/lib/api";
import { Metadata } from "next";
import { SocialLinkProps } from "@/types";

interface CardProps {
  link: SocialLinkProps
}

function Card({ link }: CardProps) {

  return (
    <div className="group flex flex-row gap-3 overflow-hidden rounded-lg bg-neutral-950 text-slate-200 flex-1">
      <Link
        href={link.url}
        className="text-xl font-semibold uppercase group-hover:underline w-full p-4"
      >
        {link.name}
      </Link>
    </div>
  );
}

export default async function Page() {
  const links = await getLinks();
  console.log({ links });
  return (
    <main className="mx-auto w-3xl">
      <div className="flex flex-row gap-4">
        {links?.length ? (
          links.map((link) => {
            return <Card link={link} key={`${link.slug}`} />;
          })
        ) : (
          <>
            <div className="mx-auto text-3xl font-bold">
              WOW!!! SUCH EMPTY!!!
            </div>
          </>
        )}
      </div>
    </main>
  );
}

async function getLinks() {
  const links = await api.getLinks();
  return links;
}

export const revalidate = 3600;

export const metadata: Metadata = {
  title: `Jaime Trovoada | Social Links`,
  openGraph: {
    title: `Jaime Trovoada | Social Links`,
    type: "website",
    url: "https://jaimetrovoada.vercel.app/links",
  },
};
