import { useState } from "react";
import { works, WorkProps } from "../../data";
import Section from "../section";
export default function Experience() {
  const [work, setWork] = useState<WorkProps>(works[0]);

  const handleClick = (index: number) => {
    setWork(works[index]);
  };

  return (
    <Section>
      <h2 className="font-bold text-3xl"> &gt; Experience</h2>
      <div className="flex flex-row h-80 max-h-80 w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col flex-none basis-1/4">
          {works.map((work, index) => (
            <button
              key={`${work.position}+${work.company}`}
              onClick={() => handleClick(index)}
              className="bg-background-secondary-75 p-1 rounded-md"
            >
              {work.company}
            </button>
          ))}
        </div>
        <div className="flex-none basis-3/4 px-4">
          <div className="m mb-4">
            <p className="font-bold">
              {work.position} @{" "}
              <span className="text-header-secondary font-normal">
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
