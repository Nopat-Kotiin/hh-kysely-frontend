import React, { useEffect, useState } from 'react';
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#ff0000', '#cccc00', '#009933', '#0000ff', '#00cc99', '#ff9900', '#333300', '#ff00ff'];

function RadioStats(props) {
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

  const renderBlackLegendText = (value) => {
    return <span style={{ color: '#000000' }}>{value}</span>;
  };

  return (
    <div style={{ width: '65%', height: '350px', margin: 'auto', marginTop: '50px' }}>
      <h1>{props.data.question}</h1>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={350}>
          <Tooltip />
          <Legend 
            align="right"
            verticalAlign="middle"
            layout="vertical"
            iconSize={20}
            formatter={renderBlackLegendText}
          />
          <Pie
            data={chartData}
            innerRadius={100}
            outerRadius={130}
            fill="000000"
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke='#000000' />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadioStats;