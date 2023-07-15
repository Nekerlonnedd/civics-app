import React from "react"
import Feedback from "./Feedback"
import Endings from "./Endings"

export default function Stats(props) {

const qandA = props.a;

function Last(input)
{return }



  return (
    <div>
    <h1>Results</h1>

{props.count === props.q || props.life === 0 ? qandA.map(input => {return <Endings
  key={input.id}
   wrongQuestion={input.question}
   rightAnswer={input.answers[0]}
   />}) : null}
   <button className="btn btn-success startbtn" onClick = {() => {window.location.reload()}  } > Start Over </button>

    </div>
  );
}
