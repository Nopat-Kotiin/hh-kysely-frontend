import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function CheckboxStats(props) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    var arr = [];
    const selections = props.data.selections;
    for (var choice in selections) {
      if (Object.prototype.hasOwnProperty.call(selections, choice)) {
        arr.push({ name: choice, value: selections[choice] });
      }
    }

    setChartData(arr);
  }, []);

  return (
    <div style={{ width: '65%', height: '400px', margin: 'auto', marginTop: '50px' }}>
      <h1>{props.data.question}</h1>
      <ResponsiveContainer width="100%" height="80%">
      <BarChart
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: 'black' }} />
        <YAxis label={{ value: 'Valintoja', angle: -90, position: 'insideLeft', fill: "black" }} />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CheckboxStats;