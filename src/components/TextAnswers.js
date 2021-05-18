import React, { useEffect, useState } from 'react';

function TextAnswers(props) {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        setAnswers(props.data.answers);
    }, []);

    return(
        <div >
            <h1>{props.data.question}</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <ul>
            {answers.map((answer, index) => {
                return(<li key={index + answer}>{answer}</li>);
            })}
            </ul>
            </div>
        </div>
    );
}

export default TextAnswers;