import { useEffect, useState } from "react";

function RadioQuestion(props) {
  const [answer, setAnswer] = useState(0);
  const [choices, setChoices] = useState([]);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    setChoices(props.choices);
    setQuestion(props.question);
  }, []);

  const inputChanged = (event) => {
    const value = event.target.value;
    setAnswer(parseInt(value));
    props.update(value);
  }

  return (
    <div onChange={inputChanged}>
      {choices.map((choice, index) => {
        return(<p><input type="radio" value={index} name={question} />{choice}</p>)
      })}
    </div> 
  );
}

export default RadioQuestion;