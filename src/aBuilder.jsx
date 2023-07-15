import Buttons from "./Buttons";
import questions from "./Questions";
import Feedback from "./Feedback";
import React, { useState } from "react";

export default function Abuilder(props) {
  // State variables
  const [btns, setBtns] = useState([0, 1, 2, 3]);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);
  const [dis, setDis] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [endNotes, setEndNotes] = useState([]);
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(1);
  const [wrong, setWrong] = useState(1);

  // Variable
  let life = props.mLife;

  // Function to shuffle the answer buttons
  function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

  // Function to handle the next question sequence
  function nextSequence() {
    setFeedback(null);
    setDis(false);
    shuffleArray(btns);
    setFirst(first + 1);
    setSecond(second + 1);
  }

  // Function to check the answer
  function checkAnswer(event) {
    const value = event.target.value;
    setDis(true);
    setCount(count + 1);

    if (value === questions[first].answers[0]) {
      setFeedback(true);
      setCorrect(correct + 1);
      props.newMarks(correct);
    } else {
      setFeedback(false);
      setEndNotes((prevValue) => [...prevValue, questions[first]]);
      setWrong(wrong + 1);
      props.newWrong(wrong);
      life = life - 1;
      props.newLife(life);
    }
  }

  // Function to render the question and answer buttons
  function Qa(input) {
    return (
      <Buttons
        onClick={checkAnswer}
        disabled={dis}
        key={input.id}
        answer={input.answers[4]}
        question={input.question}
        a={input.answers[btns[0]]}
        b={input.answers[btns[1]]}
        c={input.answers[btns[2]]}
        d={input.answers[btns[3]]}
      />
    );
  }

  // Function to handle the statistics
  function stats() {
    props.finish(true);
    props.life(life);
    props.q(questions.length);
    props.count(count);
    props.a(endNotes);
  }

  // Function to render the "Continue" button
  function continueBtn() {
    if (props.easy) {
      return second === questions.length && dis ? (
        <button className="btn1 btn btn-success" onClick={stats}>
          Finish
        </button>
      ) : props.easy ? (
        <button
          className="btn1 btn btn-success"
          disabled={!dis || second === questions.length ? true : false}
          onClick={nextSequence}
        >
          Continue
        </button>
      ) : null;
    } else if (props.medium) {
      return second === questions.length && dis || life === 0 ? (
        <button className="btn1 btn btn-success" onClick={stats}>
          Finish
        </button>
      ) : props.medium ? (
        <button
          className="btn1 btn btn-success"
          disabled={!dis || second === questions.length || life === 0 ? true : false}
          onClick={nextSequence}
        >
          Continue
        </button>
      ) : null;
    } else {
      return second === questions.length && dis || life === 0 ? (
        <button className="btn1 btn btn-success" onClick={stats}>
          Finish
        </button>
      ) : props.hard ? (
        <button
          className="btn1 btn btn-success"
          disabled={!dis || second === questions.length || life === 0 ? true : false}
          onClick={nextSequence}
        >
          Continue
        </button>
      ) : null;
    }
  }

  return (
    <div>
      {questions.slice(first, second).map(Qa)}
      <h2>Feedback</h2>
      <Feedback
        life={life}
        a={endNotes}
        q={questions.length}
        count={count}
        feedback={feedback}
        answer={questions[first].answers[0]}
      />
      <button className="btn2 btn btn-success" onClick={() => window.location.reload()}>
        Restart
      </button>
      {continueBtn()}
    </div>
  );
}
