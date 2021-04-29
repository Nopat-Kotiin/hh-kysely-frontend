import { useEffect, useState } from "react";
import TextAreaAutosize from 'react-textarea-autosize';

function Question(props) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setQuestion(props.name);
  }, []);

  const inputChanged = (event) => {
    setAnswer(event.target.value);
  }

  return (
    <div>
      <h3>{question}</h3>

      <TextAreaAutosize
        onChange={inputChanged}
        value={answer}
        style={{width: "30%"}}
        minRows={3}
        
      />
      
    </div>
    
  );
}

export default Question;