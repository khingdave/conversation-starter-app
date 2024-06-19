import React from 'react';
import './App.css';
import Decks from './components/Decks';
import DeckView from './components/DeckView';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Decks} />
        <Route path="/decks/:id" component={DeckView} />
      </Switch>
    </div>
  );
}

export default App;
