import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import FeedbackInput from '../FeedbackInput/FeedbackInput.jsx';
import ReviewPage from '../ReviewPage/ReviewPage.jsx';
import ThanksPage from '../ThanksPage/ThanksPage.jsx';


function App() {
  
  const question1 = 'How are you feeling today?';
  const question2 = 'How well are you understanding the content?';
  const question3 = 'How well are you being supported?';
  const question4 = 'Any comments you want to leave?';

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path='/'>
          <FeedbackInput question={question1} inputType={'number'} next={'2'} ph={'1-5'} require={true}/>
        </Route>
        <Route path='/2'>
          <FeedbackInput question={question2} inputType={'number'} next={'3'} ph={'1-5'} require={true}/>
        </Route>
        <Route path='/3'>
          <FeedbackInput question={question3} inputType={'number'} next={'4'} ph={'1-5'} require={true}/>
        </Route>
        <Route path='/4'>
          <FeedbackInput question={question4} inputType={'text'} next={'5'} ph={'Comments?'} require={false}/>
        </Route>
        <Route path='/5'>
          <ReviewPage />
        </Route>
        <Route path='/6'>
          <ThanksPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
