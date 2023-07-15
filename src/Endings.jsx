import React from "react"

export default function Endings(props) {


  return (
    <div className="list">
    <p>{props.wrongQuestion}</p>
    <ul>
    <li>{props.rightAnswer}</li>
    </ul>

    </div>
  );
}
