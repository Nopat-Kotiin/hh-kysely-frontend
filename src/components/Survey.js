import { useEffect, useState } from "react";

import DataService from './DataService';


const Survey = (props) => {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    DataService.getData("/kyselyt/" + props.id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQuestions(data.kysymykset);
        setName(data.name);
      })
  }, [])

  return (
    <div>
      <h2>
        {name}
      </h2>
      {questions.map(question => {
        return(<p key={question.id}>{question.kysymys}</p>)
      })}
    </div>
  )
}

export default Survey;