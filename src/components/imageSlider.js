import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './imageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
 
  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    const dragDistance = (e.touches ? e.touches[0].clientX : e.clientX) - dragStartX;

    if (dragDistance > 100) {
      previousImage();
      setIsDragging(false);
    } else if (dragDistance < -100) {
      nextImage();
      setIsDragging(false);
    }
  };

  return (
    <div
      className="slider-container"
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDragMove}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onTouchMove={handleDragMove}
    >
      <div className="slider-images" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Slider"
            className={`slider-image`}
          />
        ))}
      </div>

      <div className="slider-arrows">
        <button className="slider-arrow" onClick={previousImage}>
          <FaChevronLeft />
        </button>
        <button className="slider-arrow" onClick={nextImage}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
