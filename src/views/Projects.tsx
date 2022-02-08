// import React from 'react'
import styled from 'styled-components'
import { projects } from 'data'
import { Section } from 'components'
import { ProjectCard } from 'components/Cards'

const StyledSection = styled(Section)`
  @include flexContainer;

  p {
    font-size: 2rem;
  }
  &-wrapper {
    @include gridContainer;
    .card {
      padding: 2rem;
      height: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      background-color: bg-color(odd);
      border: 1px solid #ccc;
      border-bottom: 3px solid $accent-color;

      &:last-child {
        flex-direction: column-reverse;
      }

      @include neumorphism;

      img {
        height: 2em;
        width: 2em;
      }
      &:hover img {
        filter: invert(1);
      }
      &:nth-child(odd) {
        &:hover {
          background: linear-gradient(to bottom, #f3cbab, #feedca);
        }
      }
      &:nth-child(even) {
        &:hover {
          background: linear-gradient(to bottom, #b1e5f9, #f4d2fe);
        }
      }
      &-link {
        align-self: flex-end;
        width: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media only screen and (max-width: 56.25em) {
          width: 30%;
        }
      }
      &-title {
        align-self: center;
      }
    }
  }
`

const Projects = () => {
  return (
    <StyledSection>
      {projects.map((project) => <ProjectCard name={project.name} github={project.githubLink} live={project.liveLink} />)}
    </StyledSection>
  )
}

export default Projects
