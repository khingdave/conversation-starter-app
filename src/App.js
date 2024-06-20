// App.js
import React from 'react';
import './App.css';
import Decks from './components/Decks';
import DeckView from './components/DeckView';
import QuestionDisplay from './components/QuestionDisplay';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/questions">Conversation Starter</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Decks} />
        <Route path="/decks/:id" component={DeckView} />
        <Route path="/questions" component={QuestionDisplay} />
      </Switch>
    </div>
  );
}

export default App;
