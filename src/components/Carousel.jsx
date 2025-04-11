import { useState, useEffect } from 'react';

const images = [
  '/carousel/slide1.jpg',
  '/carousel/slide2.jpg',
  '/carousel/slide3.jpg',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Optional: auto slide every 5 sec
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
      {/* Slide Image */}
      <img
        src={images[currentIndex]}
        alt={`slide ${currentIndex}`}
        className="w-full h-full object-cover transition duration-700"
      />

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
