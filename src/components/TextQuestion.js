import { useState } from "react";
import TextAreaAutosize from 'react-textarea-autosize';

function TextQuestion(props) {
  const [answer, setAnswer] = useState('');

  const inputChanged = (event) => {
    const value = event.target.value;
    setAnswer(value);
    props.update(value);
  }

  return (
    <div>
      <TextAreaAutosize
        onChange={inputChanged}
        value={answer}
        style={{width: "30%"}}
        minRows={3}

      />
    </div> 
  );
}

export default TextQuestion;