import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import Scores from './components/scores';
import Main from './components/main';

function App() {

  const [ score, setScore ] = React.useState(0);
  const [ bestScore, setBestScore ] = React.useState(0);
  const ref = React.useRef();
  const previousChoices = ref.current || [];
  
  React.useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  React.useEffect(() => {
    ref.current = previousChoices;
  }, [previousChoices]);

  function cardClickHandler(event) {
    event.target.classList.add('hide');
    if (previousChoices.includes(event.target.id)) {
      console.log('GAME OVER');
      previousChoices.splice(0,previousChoices.length);
      setScore(0);
    } else {
      previousChoices.push(event.target.id);
      setScore(score + 1);
    }
  }

  return (
    <div className="App">
      <Header 
        name = "Memory Game">
        <Scores
          score = { score }
          bestScore = { bestScore }
         />
      </Header>

      <Main handler = { cardClickHandler } />

    </div>
  );
}

export default App;