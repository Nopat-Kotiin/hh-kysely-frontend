function Answers(props) {
    const [question, setQuestion] = useState(props.question);
  
    useEffect(() => {
      setQuestion({...question, answers: [{answer: answer}]});
      props.update(question, props.index);
    }, [answer]);

    return (
        <div>
          <h3 key={question.id}>{question.question}{question.answer}</h3>
        </div>
      );
    }
    
    export default Answers;