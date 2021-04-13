import { useEffect, useState } from "react";
import { useParams } from 'react-router';

import DataService from './DataService';


const Survey = () => {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const params = useParams();

  useEffect(() => {
    DataService.getData("/survey/" + params.id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQuestions(data.questions);
        setName(data.name);
      })
  }, [])

  return (
    <div>
      <h2>
        {name}
      </h2>
      {questions.map(question => {
        return(<p key={question.id}>{question.question}</p>)
      })}
    </div>
  )
}

export default Survey;