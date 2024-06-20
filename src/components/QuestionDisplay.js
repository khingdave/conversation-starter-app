// frontend/src/components/QuestionDisplay.js

import React, { useState } from 'react';
import lifeQuestions from '../data/life_questions.json';
import relationshipQuestions from '../data/relationship_questions.json';
import familyQuestions from '../data/family_questions.json';
import adventureQuestions from '../data/adventure_questions.json';
import romanceQuestions from '../data/romance_questions.json';
import hobbiesInterestsQuestions from '../data/hobbies_interests_questions.json';
import careerAmbitionsQuestions from '../data/career_ambitions_questions.json';
import currentEventsQuestions from '../data/current_events_questions.json';
import './QuestionDisplay.css'; // Optional for styling

const QuestionDisplay = () => {
  const [currentCategory, setCurrentCategory] = useState('life');
  const [currentQuestion, setCurrentQuestion] = useState('');

  const getRandomQuestion = (category) => {
    let questions = [];

    switch (category) {
      case 'life':
        questions = lifeQuestions;
        break;
      case 'relationship':
        questions = relationshipQuestions;
        break;
      case 'family':
        questions = familyQuestions;
        break;
      case 'adventure':
        questions = adventureQuestions;
        break;
      case 'romance':
        questions = romanceQuestions;
        break;
      case 'hobbies_interests':
        questions = hobbiesInterestsQuestions;
        break;
      case 'career_ambitions':
        questions = careerAmbitionsQuestions;
        break;
      case 'current_events':
        questions = currentEventsQuestions;
        break;
      default:
        questions = lifeQuestions;
        break;
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex].question;
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentQuestion(getRandomQuestion(category));
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(getRandomQuestion(currentCategory));
  };

  return (
    <div className="question-display">
      <h2>Conversation Starter</h2>
      <div className="button-group">
        <button onClick={() => handleCategoryChange('life')}>Life</button>
        <button onClick={() => handleCategoryChange('relationship')}>Relationship</button>
        <button onClick={() => handleCategoryChange('family')}>Family</button>
        <button onClick={() => handleCategoryChange('adventure')}>Adventure</button>
        <button onClick={() => handleCategoryChange('romance')}>Romance</button>
        <button onClick={() => handleCategoryChange('hobbies_interests')}>Hobbies & Interests</button>
        <button onClick={() => handleCategoryChange('career_ambitions')}>Career & Ambitions</button>
        <button onClick={() => handleCategoryChange('current_events')}>Current Events</button>
      </div>
      {currentQuestion && (
        <div className="question-section">
          <h3>Question:</h3>
          <p>{currentQuestion}</p>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default QuestionDisplay;
