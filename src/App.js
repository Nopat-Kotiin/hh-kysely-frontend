import React, { useState, useEffect } from 'react';

import './App.css';
import DataService from './components/DataService';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=> {
    DataService.getData("/kyselyt")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
    })
    .catch(error => {
      console.log(error);
    });
  },[])

  return (
    <div className="App">
      {data.map((row) => {
        return(
        <div>
        <h2 key={row.id}>{row.nimi}</h2>
        {row.kysymykset.map((kysymys) => {
          return(<p key={kysymys.id}>{kysymys.kysymys}</p>)
        })}
        </div>
        )
      })}
    </div>
  );
}

export default App;
