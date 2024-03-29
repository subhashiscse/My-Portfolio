import { Container } from "./styles";
import React from 'react';
import { programmingAchievements } from '../../static/config.js';
import externalLink from "../../assets/external-link.svg"

const SingleAchievement = ({ achievement }) => (
  <div className="project">
    <header>
      <p className="font-bold text-[#23ce6b] text-3xl">{achievement.JudgeName}</p>
      <div className="project-links">
        <a href={achievement.ProfileLink} target="_blank" rel="noreferrer">
          <img src={externalLink} alt="Visit site" />
        </a>
      </div>
    </header>
    <div className="body">
        <div className="flex justify-center mb-8">
          <img className="rounded-full achievement-image" src={achievement.ImageUrl} alt={achievement.Title}/>
        </div>
        <p className="font-bold">Rating: {achievement.CodingTitle}</p>
        <p className="font-bold">Total Problem Solved: {achievement.ProblemSolveCount}</p>
    </div>
    <footer className='text-[#23ce6b]'>
      {achievement.Stack}
    </footer>
  </div>
);
export function ProblemSolving() {
  return (
    <Container id="programming">
      <h2 className='font-bold'>Competitive Progamming</h2>
      <div className="projects">
          {programmingAchievements.map((achievement, index) => (
            <SingleAchievement key={index} achievement={achievement} />
          ))}
      </div>
    </Container>
  );
}