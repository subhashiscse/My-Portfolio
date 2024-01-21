import { Container } from "./styles";
import React from 'react';
import { experiences } from '../../static/config.js' 
import externalLink from "../../assets/external-link.svg"

const SingleProject = ({ project }) => (
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
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