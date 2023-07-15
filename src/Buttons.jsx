import React from "react";

export default function Buttons(props) {
return (
    <div>
  <p>{props.question}</p>
  <div className="container overflow-hidden text-center">
    <div className="row g-2">
      <div className="col-12">
        <div className="p-1"><button className="btn btn-success startbtn" disabled={props.disabled ? true : false} onClick={props.onClick} value={props.a}>{props.a}</button> </div>
      </div>
      <div className="col-12">
        <div className="p-1"><button className="btn btn-success startbtn" disabled={props.disabled ? true : false} onClick={props.onClick} value={props.b} >{props.b}</button> </div>
      </div>
      <div className="col-12">
        <div className="p-1"><button className="btn btn-success startbtn" disabled={props.disabled ? true : false} onClick={props.onClick} value={props.c} >{props.c}</button> </div>
      </div>
      <div className="col-12">
        <div className="p-1"><button className="btn btn-success startbtn" disabled={props.disabled ? true : false} onClick={props.onClick} value={props.d} >{props.d}</button> </div>
      </div>
      </div>
    </div>
  </div>
  );
}
