import './App.css';
import OpinionContent from '../components/OpinionContent/OpinionContent.js';

function App() {

  const peopleOpinions = [
    {
      title: 'Wizard of pop-corns',
      comment: 'good, but more information is needed',
      date: new Date(2020, 7 , 7),
      note: 5
    },
    {
      title: 'Wizard of chocolate',
      comment: 'boooring!',
      date: new Date(1997, 6 , 7),
      note: 2
    },
    {
      title: 'Wizard of ice-cream',
      comment: 'good taste and amazing!',
      date: new Date(2005, 9 , 8),
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
      <OpinionContent
        title={peopleOpinions[0].title}
        comment={peopleOpinions[0].comment}
        note={peopleOpinions[0].note}
        date={peopleOpinions[0].date}
      ></OpinionContent>
      <OpinionContent
        title={peopleOpinions[1].title}
        comment={peopleOpinions[1].comment}
        note={peopleOpinions[1].note}
        date={peopleOpinions[1].date}
      ></OpinionContent>
      <OpinionContent
        title={peopleOpinions[2].title}
        comment={peopleOpinions[2].comment}
        note={peopleOpinions[2].note}
        date={peopleOpinions[2].date}
      ></OpinionContent>

    </div>
  );
}

export default App;
