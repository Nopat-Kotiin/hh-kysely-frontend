import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import DataService from './components/DataService';
import Survey from './components/Survey';
import SurveyList from './components/SurveyList';
import AnswerList from './components/AnswerList';
import Statistics from './components/Statistics';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    DataService.getData("/surveys")
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <div className="App">
      <Router>

        <div>
          <Route exact path="/" render={() => <SurveyList data={data} />} />
          <Route 
            path="/survey/:id"
            component={Survey}
          />
          <Route
            path="/surveyanswers/:id"
            component={AnswerList}
          />
          <Route
            path="/surveystatistics/:id"
            component={Statistics}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
