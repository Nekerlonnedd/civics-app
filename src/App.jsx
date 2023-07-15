import React, {useState} from "react"
import Beginning from "./Beginning"
import Easy from "./modes/Easy"
import Medium from "./modes/Medium"
import Hard from "./modes/Hard"
import Abuilder from "./aBuilder"
import Feedback from "./Feedback"

export default function App(props) {

const [start, setState] = useState(<Beginning easy={easy} medium={medium} hard={hard} />);
const [mode, setMode] = useState(false);

function easy() {
  setState(<Easy e={mode}  />)
  setMode(true)
}

function medium() {
setState(<Medium m={mode} />)
setMode(true)
}

function hard() {
  setState(<Hard h={mode} />)
  setMode(true)
}


  return (
    <div >
    {start}
    </div>

  );
}
