import HeroBG from '../../assets/img/HeroBG.png'

const HeroSection = ({user}) => {
    return (
        <div className="section-Hero bg-(--grey) h-screen mx-10 py-5 ">
            <img 
            src={HeroBG} 
            alt="Hero Background" 
            className='object-cover filter opacity-80 rounded-md' />

            <div className="relative z-10 text-center text-black">
                <h1 className="text-4xl font-bold">{user.username}</h1>
            </div>
        </div>
        
    )
}


export default HeroSection;