import { useEffect, useState } from "react";
import { useParams } from 'react-router';

import DataService from './DataService';
import Question from './Question';


function Survey() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const params = useParams();

  useEffect(() => {
    DataService.getData("/surveys/" + params.id)
      .then(response => response.json())
      .then(data => {
        setQuestions(data.questions);
        setName(data.name);
        setInfo(data.info);
      })
      .catch(err => console.log(err));
  }, []);

  const updateAnswers = (answer, index) => {
    console.log(answer, index);
    let newArr = [...answers];
    newArr[index] = answer;
    setAnswers(newArr);
  }

  const submitAnswers = () => {
    console.log(answers);
    // TODO
  }

  return (
    <div>
      <h2>
        {name}
      </h2>
      <div>
        {info}
      </div>
      {questions.map((question, index) => {
        return(<Question question={question} index={index} update={updateAnswers}/>)
      })}
      <button onClick={submitAnswers}>submit</button>
    </div>
  )
}

export default Survey;