import React from 'react';
import axios from 'axios';
import './App.css';
import FeebackInput from '../FeedbackInput/FeedbackInput.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  
  const q1 = 'How are you feeling today?';
  const q2 = 'How well are you understanding the content?';
  const q3 = 'How well are you being supported?';
  const q4 = 'Any comments you want to leave?';

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path='/'>
          <FeebackInput question={q1} />
        </Route>
        <Route path='/2'>
          <FeebackInput question={q2} />
        </Route>
        <Route path='/3'>
          <FeebackInput question={q3} />
        </Route>
        <Route path='/4'>
          <FeebackInput question={q4} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
