import React from 'react';
import { styles } from "../../styles.js";
import { Container } from "./styles";
import islamicuniversity from "../../assets/Education/islamicuniversity.png";
;

export function Education() {
  return (
    <Container id="education">
        <h2>Education</h2>
        <div className="education-card-container">
            <div className="education-card-left">
                <img crossorigin="anonymous" class="education-roundedimg" src={islamicuniversity} alt="Shahjalal University of Science and Technology"/>
            </div>
            <div className='education-card-right'>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    Islamic University, Bangladesh
                </p>
            </div>
        </div>
    </Container>
  );
};

export default Education;
