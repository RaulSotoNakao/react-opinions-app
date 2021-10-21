import './App.css';
import Opinions from './Opinions/Opinions.js';
import NewOpinion from './Opinions/NewOpinion.js'
import React, { useState } from 'react';

const initialPeopleOpinions = [
  {
    title: 'Wizard of pop-corns',
    comment: 'good, but more information is needed',
    date: new Date(2020, 6, 7),
    note: 5
  },
  {
    title: 'Wizard of pop-corns',
    comment: 'good, but more information is needed',
    date: new Date(2020, 7, 7),
    note: 5
  },
  {
    title: 'Wizard of pop-corns',
    comment: 'good, but more information is needed',
    date: new Date(2020, 6, 7),
    note: 5
  },
  {
    title: 'Wizard of pop-corns',
    comment: 'good, but more information is needed',
    date: new Date(2020, 7, 7),
    note: 5
  },
  {
    title: 'Wizard of pop-corns',
    comment: 'good, but more information is needed',
    date: new Date(2020, 7, 7),
    note: 5
  },
  {
    title: 'Wizard of chocolate',
    comment: 'boooring!',
    date: new Date(2019, 6, 7),
    note: 2
  },
  {
    title: 'Wizard of ice-cream',
    comment: 'good taste and amazing!',
    date: new Date(2018, 9, 8),
    note: 9
  }
];

function App() {

  const [peopleOpinions, setPeopleOpinions] = useState(initialPeopleOpinions)

  function parseDate(s) {
    var b = s.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
  }
  const addOpinionHandler = (newOpinionHandler) => {
    const date = newOpinionHandler.date ? parseDate(newOpinionHandler.date) : undefined;
    const opinionHandlerParsed = { ...newOpinionHandler, date }
    setPeopleOpinions(prevOpinions => [...prevOpinions, opinionHandlerParsed]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          OPINION BLOG
        </p>
        you can see below for our opinions
      </header>
      <NewOpinion onAddOpinionHandler={addOpinionHandler} />
      <Opinions opinions={peopleOpinions} />
    </div>
  );
}

export default App;
