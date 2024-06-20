const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
  category: String,
  cards: [{ prompt: String }]
});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;
