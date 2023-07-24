import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function Section({ children, className }: Props) {
  return (
    <section
      className={`${
        className || ""
      } flex flex-col gap-6 rounded-2xl border border-gray-600/50  bg-neutral-950 p-4 shadow-md`}
    >
      {children}
    </section>
  );
}
