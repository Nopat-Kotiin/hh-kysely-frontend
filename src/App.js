import React, { useState, useEffect } from 'react';

import './App.css';
import DataService from './components/DataService';

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    DataService.getData("/kysely")
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => {
      console.log(error);
      setData("Lataaminen epäonnistui");
      setLoading(false);
    });
  },[])

  return (
    <div className="App">
      {loading? <p>lataa</p> : <p>{data}</p>}
    </div>
  );
}

export default App;
