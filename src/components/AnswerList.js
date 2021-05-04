import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import DataService from './DataService';


function AnswerList() {
    const [questions, setQuestions] = useState([]);
    const [name, setName] = useState("");
    const params = useParams();
  
    useEffect(() => {
      DataService.getData("/surveys/" + params.id + "/answers")
        .then(response => response.json())
        .then(data => {
          setQuestions(data.questions);
          setName(data.name);
        })
        .catch(err => console.log(err));
    }, [])
    return (
        <div>
          <h2>
            {name}
          </h2>
          {questions.map(question => {
            return(
              <div key = {question.id}>
                <h3>Kysymys: {question.question}</h3>
                {question.answers.map((answer, index) => {
                  return(
                    <p key = {answer.id}>
                      Vastaus {index + 1}: &nbsp;
                      {answer.answer}
                    </p>
                  )
                  
             })}
              </div>
            )
          })}
        </div>
      )
    }
    
    export default AnswerList;