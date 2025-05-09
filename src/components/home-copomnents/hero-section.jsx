import HeroBG from '../../assets/img/HeroBG.png'
import IcTermsPolicy from '../../assets/img/TermsPolicy.png'

const HeroSection = () => {
    return (
        <div className="section-Hero bg-(--grey) h-screen">
            <img src={HeroBG} alt="Hero Background" className='' />
            <div className="cards_page flex flex-row space-x-1 justify-center items-center my-[-2rem] z-1">
                <div className="card_terms-policy rounded-xl h-[15rem] w-[13rem] items-center bg-(--white) transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" >
                    <img src={IcTermsPolicy} alt="Icon Terms&Policy" className='p-[20px]' />
                    <p className="text-(--black) text-xl font-regular text-center p-[2px]">Terms & Policy</p>
                </div>
            </div>
        </div>
    )
}


export default HeroSection;