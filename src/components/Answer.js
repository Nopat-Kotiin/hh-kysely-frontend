import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import DataService from './DataService';


function AnswerList() {
    const [questions, setQuestions] = useState([]);
    const [name, setName] = useState("");
    const params = useParams();
  
    useEffect(() => {
      DataService.getData("/getsurveys/answers/" + params.id)
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
          {questions.map((question, index) => {
            return(<Question question={question} index={index} update={updateQuestions}/>)
          })}
        </div>
      )
    }
    
    export default AnswerList;