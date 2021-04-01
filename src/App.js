import React, { useState, useEffect } from 'react';

import './App.css';
import DataService from './components/DataService';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=> {
    DataService.getData("/kyselyt")
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.log(error);
    });
  },[])

  return (
    <div className="App">
      {data.map((row) => {
        return(<p>{row.kyselyId} - {row.nimi}</p>)
      })}
    </div>
  );
}

export default App;
