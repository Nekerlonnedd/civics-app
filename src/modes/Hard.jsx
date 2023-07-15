import Abuilder from "../aBuilder"
import React, {useState} from "react"
import Stats from "../Stats"

export default function Hard() {

const [increase, setIncrease] = useState(0)
const [incorrect, setIncorrect] = useState(0)
const [hard, setHard] = useState(false)
// Set Life
const [hardLife, setHardLife] = useState(6)
// Set Life
const [finish, setFinish] = useState(false);
const [life, setLife] = useState(0);
const [count, setCount] = useState(0);
const [q, setQ] = useState(0);
const [a, setA] = useState([]);


function fLife(value) {
  setLife(value)
}

function fCount(value) {
  setCount(value)
}

function fQ(value) {
  setQ(value)
}

function fA(value) {
  setA(value)
}




function set(props) {
  setHard(props.h)
}

function getRight(count) {
setIncrease(count)
}

function getHardLife(count) {
  setHardLife(count)
}

function getWrong(count) {
  setIncorrect(count);
}

function finishFunction(value) {
  setFinish(value)
}


  return (
    <div>
    <div className="container px-4 text-center">
      <div className="row gx-5">
        <div className="col-lg-4 col-md-5 col-sm-5">
         <div className="p-3"><h3>Correct: {increase}</h3>   </div>
        </div>
        <div className="col-lg-4 col-md-2 col-sm-2">
          <div className="p-3 a"></div>
        </div>

        <div className="col-lg-4 col-md-5 col-sm-5">
          <div className="p-3 a"><h3>Life: {hardLife}</h3></div>
        </div>
      </div>
    </div>
  {finish ? <Stats a={a} life={life} q={q} count={count} />  : <Abuilder a={fA} life={fLife} q={fQ} count={fCount} finish={finishFunction} mLife={hardLife} newLife={getHardLife} hard={set} newMarks={getRight} newWrong={getWrong} />}
  </div>
);
}
