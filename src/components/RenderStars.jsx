import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Stars = ({ stars, className }) => {
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={`flex ${className}`}>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className="text-yellow-500" />
      ))}
    </div>
  );
};

export default Stars;