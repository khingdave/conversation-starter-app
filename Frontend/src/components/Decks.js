import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Decks = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/decks')
      .then(response => setDecks(response.data))
      .catch(error => console.error('Error fetching decks:', error));
  }, []);

  return (
    <div>
      <h1>Conversation Starter Decks</h1>
      <ul>
        {decks.map(deck => (
          <li key={deck._id}>
            <Link to={`/decks/${deck._id}`}>{deck.category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Decks;
