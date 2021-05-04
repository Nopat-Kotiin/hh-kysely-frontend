function SurveyList(props) {

  return (
    <div>
      {props.data.map((row) => {
          return (
            <div>
              <a href={"/survey/" + row.id}><h2 key={row.id} >{row.name}</h2></a>
              <a href={"/surveyanswers/" + row.id}><button>Katso vastaukset</button></a>
            </div>
          )
        })}
    </div>
  );
}

export default SurveyList;