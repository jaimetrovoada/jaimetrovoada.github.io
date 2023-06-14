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
      <h2 className="text-3xl font-semibold text-indigo-300">
        {" "}
        &gt; Experience
      </h2>
      <div className="mx-auto flex h-80 max-h-80 w-full max-w-screen-xl flex-col md:flex-row">
        <div className="flex flex-none basis-1/4 flex-col">
          {works.map((work, index) => (
            <button
              key={`${work.position}+${work.company}`}
              onClick={() => handleClick(index)}
              className="rounded-md bg-gray-600/50 p-2 leading-none text-gray-200 hover:bg-gray-600/75"
            >
              {work.company}
            </button>
          ))}
        </div>
        <div className="flex-none basis-3/4 px-4">
          <div className="m mb-4">
            <p>
              <span className="mr-2 font-semibold underline">
                {work.position}
              </span>
              <span className="text-slate-300">@{work.company}</span>
            </p>
            <p className="text-slate-400">{work.period}</p>
          </div>
          <p className="text-slate-300">{work.description}</p>
        </div>
      </div>
    </Section>
  );
}
