import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .skill-card-container {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }
  .skill-card-right {
    max-width: 70%;
  }
  .skill-subject-section{
    font-weight: 800;
    font-size: 20px;
  }
  .skill-category{
    font-size: 20px,
    color: blue;
  }
  .skill{
      img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }
  .image-and-span-container {
    display: flex;
    align-items: center;
  }
  
  .text {
    margin-left: 10px;
    font-size: 1.875rem !important; 
  }
  
`