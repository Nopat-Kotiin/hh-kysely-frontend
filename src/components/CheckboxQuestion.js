import { useEffect, useState } from "react";

function CheckboxQuestion(props) {
  const [answers, setAnswers] = useState([]);
  const [choices, setChoices] = useState([]);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    setChoices(props.choices);
    setQuestion(props.question);
  }, []);

  const inputChanged = (event) => {
    if (event.target.checked) {
      setAnswers([...answers, parseInt(event.target.value)]);
    } else {
      setAnswers(answers.filter((item) =>  item != event.target.value));
    }
  }

  return (
    <div onChange={inputChanged}>
      {choices.map((choice, index) => {
        return (<p><input type="checkbox" value={index} name={question} />{choice}</p>)
      })}
    </div>
  );
}

export default CheckboxQuestion;