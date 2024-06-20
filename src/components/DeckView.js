// DeckView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const DeckView = ({ match }) => {
  const [deck, setDeck] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/decks/${match.params.id}`)
      .then(response => {
        setDeck(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [match.params.id]);

  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!deck) return <div>No deck found.</div>;
  if (deck.cards.length === 0) return <div>No cards found in this deck.</div>;

  return (
    <div className="deck-view">
      <h1>{deck.category}</h1>
      <Card cards={deck.cards} />
    </div>
  );
};

export default DeckView;
