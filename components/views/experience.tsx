import Section from "../section";
import { WorkProps } from "@/types";

interface Props {
  works: WorkProps[]
}

export default function Experience({ works }: Props) {
  const sortedByStartDate = works.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )

  return (
    <Section>
      <h2 className="text-3xl font-semibold text-indigo-300">
        {" "}
        &gt; Experience
      </h2>
      <ol className="border-l border-neutral-500">
        {sortedByStartDate.map((work) => (
          <li key={`${work.position}+${work.company}`}>
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-500"></div>
              <p className="text-sm text-slate-300">
                {`${work.startDate} - ${work.endDate ? work.endDate : "Present"}`}
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h4 className="mb-1.5 font-semibold">
                {work.position} @ {work.company}
              </h4>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
