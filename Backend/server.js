const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const deckRoutes = require('./routes/deckRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/conversation_starter', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/decks', deckRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
