const express = require('express');
const Deck = require('../models/deckModel');
const router = express.Router();

router.get('/', async (req, res) => {
  const decks = await Deck.find();
  res.json(decks);
});

router.get('/:id', async (req, res) => {
  const deck = await Deck.findById(req.params.id);
  res.json(deck);
});

module.exports = router;
