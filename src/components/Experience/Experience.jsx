import { Container } from "./styles";
import React from 'react';
import { experiences } from '../../static/config.js'

const SingleProject = ({ project }) => (
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <title>Experience</title>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 7V5a4 4 0 0 0-8 0v2"></path>
      </svg>

    </header>
    <div className="body">
      <h3 className="font-bold">{project.ProjectName}</h3>
      <p>{project.Description}</p>
    </div>
    <footer className='text-[#23ce6b] font-bold'>
      {project.Responsiblity}
    </footer>
  </div>
);
export function Experience() {
  return (
    <Container id="experience">
      <h2 className='font-bold'>Work Experiences</h2>
      <div className="projects">
          {experiences.map((project, index) => (
            <SingleProject key={index} project={project} />
          ))}
      </div>
    </Container>
  );
}