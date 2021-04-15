import { useEffect, useState } from "react";
import { useParams } from 'react-router';

import DataService from './DataService';
import Question from './Question';


function Survey() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const params = useParams();

  useEffect(() => {
    DataService.getData("/survey/" + params.id)
      .then(response => response.json())
      .then(data => {
        setQuestions(data.questions);
        setName(data.name);
      })
      .catch(err => console.log(err));
  }, [])

  const updateQuestions = (question, index) => {
    let newArr = [...questions];
    newArr[index] = question;
    setQuestions(newArr);
  }

  const submitAnswers = () => {
    const body = {
      id: parseInt(params.id),
      questions: questions
    }
    DataService.postAnswers(body, "/submit")
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>
        {name}
      </h2>
      {questions.map((question, index) => {
        return(<Question question={question} index={index} update={updateQuestions}/>)
      })}
      <button onClick={submitAnswers}>submit</button>
    </div>
  )
}

export default Survey;