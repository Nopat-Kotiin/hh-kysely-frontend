import { useEffect, useState } from "react";

import TextQuestion from './TextQuestion';
import RadioQuestion from './RadioQuestion';
import CheckboxQuestion from './CheckboxQuestion';

function Question(props) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    setQuestion(props.question.question);
    setType(props.question.type);
  }, []);

  const updateAnswer = (value) => {
    setAnswer(value);
  }

  return (
    <div>
      <h3>{question}</h3>
      {type === 'text' ? <TextQuestion answer={answer} update={updateAnswer} /> : null}
      {type === 'radio' ? <RadioQuestion answer={answer} choices={props.question.choices} question={question} update={updateAnswer} /> : null}
      {type === 'checkbox' ? <CheckboxQuestion answer={answer} choices={props.question.choices} question={question} update={updateAnswer} /> : null}
      
    </div>
    
  );
}

export default Question;