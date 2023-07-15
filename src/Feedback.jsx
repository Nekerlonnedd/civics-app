import React from "react"
import Endings from "./Endings"
import Stats from "./Stats"

export default function Feedback(props) {

const qandA = props.a


  function Last(input)
  {return <Endings
    key={input.id}
     wrongQuestion={input.question}
     rightAnswer={input.answers[0]}

     />}


  return (
    <div>
    {props.feedback ? <p>That's Correct!</p> : null}
    {props.feedback === false ?
      <div className="list">
      <ul>
      <li>{props.answer}</li>
      </ul>
      </div>
       : null}
       <div>

       </div>

    </div>
  );
}
