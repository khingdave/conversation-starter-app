// Card.js
import React, { useState } from 'react';

const Card = ({ cards }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const nextCard = () => {
    const nextIndex = currentCardIndex + 1;
    if (nextIndex < cards.length) {
      setCurrentCardIndex(nextIndex);
      setShowAnswer(false); // Reset answer display for the new card
    }
  };

  const previousCard = () => {
    const prevIndex = currentCardIndex - 1;
    if (prevIndex >= 0) {
      setCurrentCardIndex(prevIndex);
      setShowAnswer(false); // Reset answer display for the new card
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <div className="question">{cards[currentCardIndex].question}</div>
          {showAnswer && <div className="answer">{cards[currentCardIndex].answer}</div>}
        </div>
        <div className="card-actions">
          <button onClick={toggleAnswer}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
          <button onClick={previousCard} disabled={currentCardIndex === 0}>Previous</button>
          <button onClick={nextCard} disabled={currentCardIndex === cards.length - 1}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
