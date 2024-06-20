import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const DeckView = ({ match }) => {
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/decks/${match.params.id}`)
      .then(response => setDeck(response.data))
      .catch(error => console.error('Error fetching deck:', error));
  }, [match.params.id]);

  if (!deck) return <div>Loading...</div>;

  return (
    <div>
      <h1>{deck.category}</h1>
      <Card cards={deck.cards} />
    </div>
  );
};

export default DeckView;
