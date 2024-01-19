import React from 'react';
import { styles } from "../../styles.js";
import { Container } from "./styles";
import islamicuniversity from "../../assets/Education/islamicuniversity.png";
;

export function Education() {
  return (
    <Container id="education">
        <h2 className='font-bold'>Education</h2>
        <div className="flex mb-16">
            <div className="education-card-left h-24">
                <img crossorigin="anonymous" class="education-roundedimg" src={islamicuniversity} alt="Shahjalal University of Science and Technology"/>
            </div>
            <div className='education-card-right'>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    Islamic University, Bangladesh
                </p>
                <h4 className='education-subject-section'>
                    Masters of Science in Computer Science and Engineering
                </h4>
                <h5 className="">
                    November 2020 - August 2022
                </h5>
            </div>
        </div>
        <div className="flex">
            <div className="education-card-left h-24">
                <img crossorigin="anonymous" class="education-roundedimg" src={islamicuniversity} alt="Shahjalal University of Science and Technology"/>
            </div>
            <div className='education-card-right'>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    Islamic University, Bangladesh
                </p>
                <h4 className="education-subject-section">
                    Bachelor of Science in Computer Science and Engineering
                </h4>
                <h5 className="">
                    May 2015 - October 2020
                </h5>
            </div>
        </div>
    </Container>
  );
};

export default Education;
