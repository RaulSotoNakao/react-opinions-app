import './App.css';
import Opinions from './Opinions';

function App() {

  const peopleOpinions = [
    {
      title: 'Wizard of pop-corns',
      comment: 'good, but more information is needed',
      date: new Date(2020, 7, 7),
      note: 5
    },
    {
      title: 'Wizard of chocolate',
      comment: 'boooring!',
      date: new Date(1997, 6, 7),
      note: 2
    },
    {
      title: 'Wizard of ice-cream',
      comment: 'good taste and amazing!',
      date: new Date(2005, 9, 8),
      note: 9
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>
          OPINION BLOG
        </p>
        you can see below for our opinions
      </header>
      <Opinions opinions={peopleOpinions} />
    </div>
  );
}

export default App;
