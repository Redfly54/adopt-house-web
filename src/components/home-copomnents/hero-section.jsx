import { Link } from 'react-router-dom';
import HeroBG from '../../assets/img/HeroBG.png'
import IcTermsPolicy from '../../assets/img/TermsPolicy.png'
import animals from '../../assets/img/animals.png'
import AboutUs from '../../assets/img/AboutUs.png';

const HeroSection = () => {
    return (
        <div className="section-Hero bg-(--grey) h-1vh w-[100%]">
            <img src={HeroBG} alt="Hero Background" className='w-[100%]' />
            <div className="h-[0.5rem] w-[100%] bg-(--blue-sky) -z-1 md:h-[2rem]"></div>
            <div className="cards_page flex gap-[1rem] md:gap-[3rem] justify-center items-center px-5 md:px-7 -m-[8rem] md:-m-[2rem] lg:m-1">
                <Link to="/terms-policy" className="card_terms-policy rounded-xl h-[9rem] w-[7rem] md:h-[16rem] md:w-[14rem] justify-items-center bg-(--white) border-0 border-(--white) transition hover:-translate-y-1 hover:border-(--blue-sky) hover:border-3 motion-reduce:transition-none motion-reduce:hover:transform-none ease-in-out" >
                    <img src={IcTermsPolicy} alt="Icon Terms&Policy" className=' w-[75%] h-[75%] md:w-[85%] md:h-[85%] p-[10px]' />
                    <p className="text-(--black) text-sm font-regular text-center md:text-xl">Terms & Policy</p>
                </Link>
                <Link to="/animals" className="card_terms-policy rounded-xl h-[9rem] w-[7rem] md:h-[16rem] md:w-[14rem] justify-items-center bg-(--white) border-0 border-(--white) transition hover:-translate-y-1 hover:border-(--blue-sky) hover:border-3 motion-reduce:transition-none motion-reduce:hover:transform-none ease-in-out" >
                    <img src={animals} alt="Icon Animals" className=' w-[75%] h-[75%] md:w-[85%] md:h-[85%] p-[10px]' />
                    <p className="text-(--black) text-sm font-regular text-center md:text-xl">Animals</p>
                </Link>
                <Link to="/about-us" className="card_terms-policy rounded-xl h-[9rem] w-[7rem] md:h-[16rem] md:w-[14rem] justify-items-center bg-(--white) border-0 border-(--white) transition hover:-translate-y-1 hover:border-(--blue-sky) hover:border-3 motion-reduce:transition-none motion-reduce:hover:transform-none ease-in-out" >
                    <img src={AboutUs} alt="Icon About Us" className=' w-[75%] h-[75%] md:w-[85%] md:h-[85%] p-[10px]' />
                    <p className="text-(--black) text-sm font-regular text-center md:text-xl">About Us</p>
                </Link>

            </div>
        </div>
    )
}


export default HeroSection;
