import { useEffect, useState } from "react";
import TextAreaAutosize from 'react-textarea-autosize';

function TextQuestion(props) {
  const [answer, setAnswer] = useState('');

  const inputChanged = (event) => {
    setAnswer(event.target.value);
    props.update(answer);
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