import React, { useState } from 'react';

const Card = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <div>{cards[currentIndex].prompt}</div>
      <button onClick={prevCard} disabled={currentIndex === 0}>
        Previous
      </button>
      <button onClick={nextCard} disabled={currentIndex === cards.length - 1}>
        Next
      </button>
    </div>
  );
};

export default Card;
