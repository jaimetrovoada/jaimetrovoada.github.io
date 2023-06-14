import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function Section({ children, className }: Props) {
  return (
    <section
      className={`${
        className || ""
      } flex flex-col gap-6 rounded-2xl bg-gray-900/50 p-4 text-slate-200 shadow-md`}
    >
      {children}
    </section>
  );
}
