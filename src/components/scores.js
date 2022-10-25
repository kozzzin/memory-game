import React from "react";


export default function Scores(props) {
  return (
    <ul className="scores">
      <li>Score: { props.score }</li>
      <li>Best score: { props.bestScore }</li>
    </ul>
  );
}