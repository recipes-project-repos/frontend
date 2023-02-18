import React, { useState } from 'react';

export const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;

        return (
          <button
            type="button"
            key={index}
            className={
              index <= (hover || rating)
                ? 'star-button star-rating--on'
                : 'star-button star-rating--off'
            }
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star-rating__star" />
          </button>
        );
      })}
    </div>
  );
};
