import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const images = [
    {
        image: '/carousel/slide1.jpg',
        text: 'Full branding of PETROL STATIONS',
        path: 'about-us',
    },
    {
        image: '/carousel/slide2.jpg',
        text: 'Illuminated advertisements and LED displays',
        path: '',
    },
    {
        image: '/carousel/slide3.jpg',
        text: 'ROAD SIGNS',
        path: '',
    },
    {
        image: '/carousel/slide4.jpg',
        text: 'Manufacturing and assembly of Facade facings',
        path: '',
    },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const current = images[currentIndex];

    return (
        <div className="relative mx-auto w-[95%] h-[300px] md:h-[500px] rounded-md overflow-hidden shadow-lg">
            {/* Slide Image */}
            <img
                src={current.image}
                alt={`slide-${currentIndex}`}
                className="w-full h-full object-cover transition duration-700"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-white font-bold text-lg md:text-2xl lg:text-4xl mb-4 drop-shadow-md">
                    {current.text}
                </h2>
                <Link
                    to={current.path}
                    className="text-white border border-white px-4 py-2 rounded hover:bg-red-400 hover:text-black transition"
                >
                    Details
                </Link>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`w-3 h-3 rounded-full ${currentIndex === idx
                            ? 'bg-red-600'
                            : 'bg-white opacity-50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
