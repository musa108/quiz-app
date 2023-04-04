import { Link } from "react-router-dom";

export default function Instructionlayout() {
  return (
    <section className="instructions">
      <h1>Instructions</h1>
      <ul>
        <li>The Game Has a Duration Of 90 seconds</li>
        <li>Each Game Consist Of 10 Questions</li>
        <li>Every Question Contain 4 option and One is Correct</li>
        <li>Every Question Carries 1 mark</li>
      </ul>
      <div className="buttons">
        <Link className="left" to='/'>Go back</Link>
        <Link className="right" to="/Gamelayout">Play Game</Link>
      </div>
    </section>
  );
}
