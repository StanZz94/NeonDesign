import heroLogo from '../../public/heroLogo.png';
import Carousel from './Carousel';

export default function HomePage() {

    return <div>
        <div className="bg-red-600 pt-10 relative z-10">
            <div className="mx-auto w-2/5 pb-8">
                <img className="mx-auto w-full" src={heroLogo} alt="30 years" />
            </div>
            <div className="overflow-hidden leading-none rotate-180">
                    <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="w-full h-20">
                        <path
                            d="M0,0 C150,100 350,0 500,100 L500,00 L0,0 Z"
                            style={{ stroke: 'none', fill: '#1c1917' }}
                        ></path>
                    </svg>
                </div>
        </div>
        <div className="bg-[#1c1917] pt-10 relative z-10">
            <h1 className="text-center text-red-600 pb-1 font-bold font-serif text-2xl md:text-4xl lg:text-5xl">
                Light Ads Neon
            </h1>
            <h2 className="text-center text-red-600 pb-6 font-semibold font-serif text-xl md:text-3xl lg:text-4xl">
                We Create Your Vision !
            </h2>
            <Carousel />
        </div>
    </div>
}