import { styles } from "../../styles.js";
import { Container } from "./styles"
import subhashis from "../../assets/subhashis.png";
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import facebook from '../../assets/facebook.png'
import telegram from '../../assets/telegram.svg'
import email from '../../assets/email.png'

export function About() {
  return (
    <Container>
      <section id="about" className={`relative w-full h-screen`}>
          <div className={`absolute inset-0 top-[120px] ${styles.paddingX} flex items-center justify-between`}>
              <div>
                  <h1 className={`font-weight: 700; ${styles.heroHeadText}`}>Hi, I'm 
                        <p className='text-[#23ce6b]'>
                        Subhashis Mollick</p>
                  </h1> 
                  
                  <p className={`${styles.heroSubText} mt-2`}>
                      <span >Full Stack Software Engineer | Selise Digital Platforms</span>
                      <p className="font-bold text-[#23ce6b]">3.5+ Years of Experience</p>
                      <div className="flex w-max gap-4 mt-8">
                        <button class="bg-primary-500 hover:bg-blue-600 text-white font-bold px-4 rounded-full"><a href="#contact">Contact</a>
                        </button>
                      </div>
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
                  </p>
              </div>
              <div className="about-image" style={{ marginLeft: 'auto' }}>
                  <img style={{ width: 400 }} src={subhashis} alt="Subhashis Mollick" />
              </div>
          </div>
      </section>
    </Container>
  )
}