import { useEffect, useState } from "react";

function Question(props) {
  const [question, setQuestion] = useState(props.question);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setQuestion({...question, answers: [{answer: answer}]});
    props.update(question, props.index);
  }, [answer]);

  const inputChanged = (event) => {
    setAnswer(event.target.value);
    setQuestion({...question, answers: [{answer: event.target.value}]});
  }

  return (
    <div>
      <h3 key={question.id}>{question.question}</h3>
      <input type="text" onChange={inputChanged} value={answer} />
    </div>
  );
}

export default Question;