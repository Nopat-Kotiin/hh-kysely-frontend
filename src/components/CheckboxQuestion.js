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
    const value = parseInt(event.target.value);
    let newArr = [];
    if (event.target.checked) {
      newArr = [...answers, value];
      setAnswers(newArr);
    } else {
      newArr = answers.filter((item) =>  item !== value);
      setAnswers(newArr);
    }
    props.update(newArr);
  }

  return (
    <div onChange={inputChanged}>
      {choices.map((choice, index) => {
        return (<p key={choice} ><input type="checkbox" value={index} name={question} />{choice}</p>)
      })}
    </div>
  );
}

export default CheckboxQuestion;