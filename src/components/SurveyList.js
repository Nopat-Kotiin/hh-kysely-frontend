const SurveyList = (props) => {

  return (
    <div>
      {props.data.map((row) => {
          return (
            <div>
              <a href={"/survey/" + row.id}><h2 key={row.id} >{row.nimi}</h2></a>
            </div>
          )
        })}
    </div>
  );
}

export default SurveyList;