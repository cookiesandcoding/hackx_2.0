import React , {useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const images = [
    'Modelresults/r1.jpg',
    'Modelresults/r2.jpg',
    'Modelresults/r3.jpg',
    'Modelresults/r4.jpg',
    'Modelresults/r5.jpg',
    ,
  ];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to previous slide
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Go to next slide
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-120 max-w-2xl mx-auto">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full hover:bg-gray-700 transition"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full hover:bg-gray-700 transition"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;

