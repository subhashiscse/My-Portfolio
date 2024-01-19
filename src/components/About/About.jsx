import { styles } from "../../styles.js";
import subhashis from "../../assets/subhashis.png";


export function About() {
  const isActive = false;
  return (
    <section className={`relative w-full h-screen`}>
        <div className={`absolute inset-0 top-[120px] ${styles.paddingX} flex items-center justify-between`}>
            <div>
                <h1 className={`font-weight: 700; ${styles.heroHeadText} ${isActive ? 'text-black' : 'text-white'}`}>Hi, I'm 
                      <p className='text-[#23ce6b]'>
                      Subhashis Mollick</p>
              </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    Full Stack Software Engineer
                    <div className="flex w-max gap-4 mt-8">
                      <button class="bg-primary-500 hover:bg-blue-600 text-white font-bold px-4 rounded-full">Contact
                      </button>
                    </div>
                </p>
            </div>
            <div className="about-image" style={{ marginLeft: 'auto' }}>
                <img style={{ width: 400 }} src={subhashis} alt="Subhashis Mollick" />
            </div>
        </div>
    </section>
  )
}