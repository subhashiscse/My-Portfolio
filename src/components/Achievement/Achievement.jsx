import { Container } from "./styles";
import React from 'react';
import { achievements } from '../../static/config.js'

const SingleAchievement = ({ achievement }) => (
  <div className="project">
    <header>
      <p className="font-bold text-[#23ce6b] text-3xl">{achievement.Title}</p>
    </header>
    <div className="body">
      <div className="flex justify-center">
        <img className="rounded-full achievement-image" src={achievement.ImageUrl} alt={achievement.Title}/>
      </div>
      <p>{achievement.Description}</p>
    </div>
    <footer className='text-[#23ce6b]'>
      {achievement.Stack}
    </footer>
  </div>
);
export function Achievement() {
  return (
    <Container id="achievement">
      <h2 className='font-bold'>My Achievements</h2>
      <div className="projects">
          {achievements.map((achievement, index) => (
            <SingleAchievement key={index} achievement={achievement} />
          ))}
      </div>
    </Container>
  );
}