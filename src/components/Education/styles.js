import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .education-card-container {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }
  .education-card-left{
    .education-roundedimg {
      object-fit: cover;
      margin-right: 2rem;
      width: 6rem;
      height: 6rem;
      box-shadow: 0 0.5rem 1rem rgba(0,0,0,.3);
      border-radius: 50%;
    }
  }
  .education-card-right {
    max-width: 70%;
  }
`