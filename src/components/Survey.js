import { useEffect, useState } from "react";
import { Redirect, useParams } from 'react-router';

import DataService from './DataService';
import Question from './Question';


function Survey() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);
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
    let newArr = [...answers];
    newArr[index] = answer;
    setAnswers(newArr);
  }

  const submitAnswers = () => {
    const body = [];
    let invalidInputs = [];
    questions.forEach((q, index) => {
      const answer = answers[index];
      if (answer === undefined) {
        invalidInputs.push(q.question);
        return;
      }

      if (q.type !== 'text') {
        if (answer.length === 0) {
          invalidInputs.push(q.question);
          return;
        }
        body.push({ 'answer': '', 'selections': answer });
      } else {
        if (answer.trim() === "") {
          invalidInputs.push(q.question);
          return;
        }
        body.push({ 'answer': answer });
      }
    });
    if (invalidInputs.length > 0) {
      alert(
        "Olkaa hyvä ja vastatkaa kaikkiin kysymyksiin.\n"
        + "Seuraavat kysymykset ovat vastaamatta:\n\n"
        + invalidInputs.join("\n")
      );
      return;
    }
    DataService.postAnswers(body, '/surveys/' + params.id + '/answers');
    setSubmitted(true);
  }

  return (
    <div>
      {submitted ? <Redirect to={"/"} /> : null}
      <h2>
        {name}
      </h2>
      <div>
        {info}
      </div>
      {questions.map((question, index) => {
        return (<Question key={question.id} question={question} index={index} update={updateAnswers} />)
      })}
      <button onClick={submitAnswers}>Lähetä</button>
    </div>
  )
}

export default Survey;