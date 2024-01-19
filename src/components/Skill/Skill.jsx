import React from 'react';
import { Container } from "./styles";

const TechListComponent = ({ techList, category }) => {
    const techString = techList.join(', ')
    return (
         <div className='flex mb-2'>
            <div>
                <span className='text-3xl font-bold text-[#23ce6b]'>{category} : </span>
                <span className='text-3xl'>{techString}</span>
            </div>
        </div>
    );
  };
export function Skill() {
    const languages = ['C','C++', 'C#', 'Java', 'JavaScript', 'Typescript'];
    const frontend = ['HTML', 'CSS','Bootstrap','Angular','React'];
    const backend = ['.Net', 'Spring Boot', 'Php','MongoDb','PostgreSQL', 'NoSQL','Cosmos DB'];
    const devOps = ['Git','Docker','Kubernetes','Github CI/CD','Linux'];
    const others = ['Data Stuctures','Algorithms','Problem Solving','OOP','Design Patterns','Azure Functions'];
    const cloud = ['Microsoft Azure'];
    return (
        <Container id="skill">
            <h2 className='font-bold'>Skills</h2>
            <div className="flex mb-16">
                <div className='skill-card'>
                    <TechListComponent techList={languages} category="Languages" />
                    <TechListComponent techList={frontend} category="Frontend" />
                    <TechListComponent techList={backend} category="Backend" />
                    <TechListComponent techList={devOps} category="Devops" />
                    <TechListComponent techList={cloud} category="Cloud" />
                    <TechListComponent techList={others} category="Others" />
                </div>
            </div>
        </Container>
    );
}


export default Skill;