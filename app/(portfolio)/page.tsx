import api from "@/lib/api";
import React from "react";
import Experience from "../../components/views/experience";
import Intro from "../../components/views/intro";
import Projects from "../../components/views/projecs";

export default async function Page() {
  const projects = await api.getProjects();
  return (
    <>
      <Intro />
      <Experience />
      <Projects projects={projects} />
    </>
  );
}
