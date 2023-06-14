import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function Section({ children, className }: Props) {
  return (
    <section
      className={`${
        className || ""
      } container mx-auto flex flex-col gap-6 rounded-2xl bg-background p-4`}
    >
      {children}
    </section>
  );
}
