import { Container } from "./styles";
import email from "../../assets/email.svg";
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2 className='font-bold'>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:smollickcseiu@gmail.com"><img src={email} alt="Email"/></a> 
          <a href="mailto:smollickcseiu@gmail.com">smollickcseiu@gmail.com</a>
        </div> 
      </div>
      <Form></Form>
    </Container>
  )
}