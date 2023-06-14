"use client";
import { useState } from "react";
import { works } from "../../data";
import Section from "../section";
import { WorkProps } from "../../types";
export default function Experience() {
  const [work, setWork] = useState<WorkProps>(works[0]);

  const handleClick = (index: number) => {
    setWork(works[index]);
  };

  return (
    <Section>
      <h2 className="text-3xl font-bold"> &gt; Experience</h2>
      <div className="mx-auto flex h-80 max-h-80 w-full max-w-screen-xl flex-row">
        <div className="flex flex-none basis-1/4 flex-col">
          {works.map((work, index) => (
            <button
              key={`${work.position}+${work.company}`}
              onClick={() => handleClick(index)}
              className="rounded-md bg-background-secondary-75 p-1"
            >
              {work.company}
            </button>
          ))}
        </div>
        <div className="flex-none basis-3/4 px-4">
          <div className="m mb-4">
            <p className="font-bold">
              {work.position} @{" "}
              <span className="font-normal text-header-secondary">
                {work.company}
              </span>
            </p>
            <p className="text-foreground-secondary">{work.period}</p>
          </div>
          <p className="text-foreground-secondary">{work.description}</p>
        </div>
      </div>
    </Section>
  );
}
