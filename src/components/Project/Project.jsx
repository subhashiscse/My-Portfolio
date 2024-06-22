import { Container } from "./styles";
import React from 'react';
import { projects} from '../../static/config.js' 
import externalLink from "../../assets/external-link.svg"

const SingleProject = ({ project }) => (
  <div className="project">
    <header>
    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
      <title>GitHub</title>
      <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.19 11.34c.6.11.82-.26.82-.58v-2.25c-3.34.72-4.04-1.43-4.04-1.43-.54-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.22 1.83 1.22 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 013.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.23 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
    <div className="project-links">
        <a href={project.ProjectUrl} target="_blank" rel="noreferrer">
          <img src={externalLink} alt="Visit site" />
        </a>
    </div>
    </header>
    <div className="body">
      <h3 className="font-bold">{project.Title}</h3>
      <p>{project.Description}</p>
    </div>
    <footer className='text-[#23ce6b]'>
      {project.Stack}
    </footer>
  </div>
);
export function Project() {
  return (
    <Container id="project">
      <h2 className='font-bold'>My Projects</h2>
      <div className="projects">
          {projects.map((project, index) => (
            <SingleProject key={index} project={project} />
          ))}
      </div>
    </Container>
  );
}