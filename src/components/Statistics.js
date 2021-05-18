import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import CheckboxStats from './CheckboxStats';

import DataService from './DataService';
import RadioStats from './RadioStats';
import TextAnswers from './TextAnswers';

function Statistics() {
  const [data, setData] = useState([]);
  const [shouldRedirect, setRedirect] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    DataService.getData("/surveystatistics/" + params.id)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }

  return (
    <div>
      {shouldRedirect ? <Redirect to={"/"} /> : null}
      <button onClick={() => {
        setRedirect(true);
      }}>Takaisin</button>
      {data.map((question) => {
        if (question.type === 'text') return <TextAnswers key={question.question} data={question}/>
        if (question.type === 'radio') return <RadioStats key={question.question} data={question}/>
        if (question.type === 'checkbox') return <CheckboxStats key={question.question} data={question}/>
      })}
    </div>
  );
}

export default Statistics;