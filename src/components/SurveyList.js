function SurveyList(props) {

  return (
    <div>
      {props.data.map((row, index) => {
          return (
            <div key={index}>
              <h2 key={row.id} >{row.name}</h2>
              <a href={"/survey/" + row.id}><button>Vastaa</button></a>
              <a href={"/surveyanswers/" + row.id}><button>Katso vastaukset</button></a>
              <a href={"/surveystatistics/" + row.id}><button>Katso statistiikkaa</button></a>
            </div>
          )
        })}
    </div>
  );
}

export default SurveyList;