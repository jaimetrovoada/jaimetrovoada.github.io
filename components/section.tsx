import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function Section({ children, className }: Props) {
  return (
    <section className={className}>
      <div className={`container mx-auto h-full px-4 flex flex-col gap-6`}>
        {children}
      </div>
    </section>
  );
}
