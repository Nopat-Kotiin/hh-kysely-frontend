import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import './App.css';
import DataService from './components/DataService';
import Survey from './components/Survey';
import SurveyList from './components/SurveyList';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    DataService.getData("/surveys")
      .then(response => response.json())
      .then(data => {
        console.log(data);
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
            render={() => <Survey />}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
