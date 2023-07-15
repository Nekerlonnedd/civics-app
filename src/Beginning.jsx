import React from "react"


export default function Beginning(props) {


  return (
    <div className="container overflow-hidden text-center">
      <div className="row g-2">
        <div className="col-12">
          <div className="p-1"><button className="btn btn-success startbtn" value="easy" onClick={props.easy} >Easy</button></div>
        </div>
        <div className="col-12">
          <div className="p-1"><button className="btn btn-success startbtn" value="medium" onClick={props.medium} >Medium</button></div>
        </div>
        <div className="col-12">
          <div className="p-1"><button className="btn btn-success startbtn" value="hard" onClick={props.hard} >Hard</button></div>
        </div>
        </div>
      </div>

  );
}
