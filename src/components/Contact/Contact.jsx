import { Container } from "./styles";
import email from "../../assets/email.png";
import { Form } from "../Form/Form";
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import facebook from '../../assets/facebook.png'
import telegram from '../../assets/telegram.svg'


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2 className='font-bold'>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div className="social-media">
          <a 
            href="mailto:smollickcseiu@gmail.com" 
            class="icon-button google" 
            target="_blank" 
            rel="noopener noreferrer" title="Gmail">
            <img src={email} alt="email"/>
          </a>
          <a
            href="https://www.linkedin.com/in/subhashis-mollick/"
            target="_blank"
            rel="noreferrer">
            <img src={linkedin} alt="Linkedin"/>
          </a>
          <a
            href="https://github.com/subhashiscse"
            target="_blank"
            rel="noreferrer">
            <img src={github} alt="github"/>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B8801705206077&text=Hello+Subhashis"
            target="_blank"
            rel="noreferrer">
            <img src={whatsapp} alt="whatsapp"/>
          </a>
          <a
            href="https://www.facebook.com/SubhashisMollick/"
            target="_blank"
            rel="noreferrer">
            <img src={facebook} alt="facebook"/>
          </a>
          <a
            href="https://t.me/Subhashis_Mollick"
            target="_blank"
            rel="noreferrer">
            <img src={telegram} alt="telegram"/>
          </a>
        </div>
      </div>
      <Form></Form>
      
    </Container>
  )
}