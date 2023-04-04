import React from "react";
import { Link } from "react-router-dom";

export default function Homelayout() {
  return (
    <div className="Home">
      <div className="cube">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          className="cube"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
      </div>
      <h1>Quiz Game</h1>
      <p>An interacive Quiz Game that allows users to answer multiple-choice question</p>
      <Link to="Instructionlayout">Continue</Link>
    </div>
  );
}
