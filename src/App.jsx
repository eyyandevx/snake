import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Snake & Ladders</h1>

      <div className="board">

        {/* Row 10 */}
        <div className="row">
          {[100,99,98,97,96,95,94,93,92,91].map(num => (
            <div className="cell" key={num}>{num}</div>
          ))}
        </div>

        {/* Row 9 */}
        <div className="row">
          {[81,82,83,84,85,86,87,88,89,90].map(num => (
            <div className="cell" key={num}>{num}</div>
          ))}
        </div>

        {/* Row 8 */}
        <div className="row">
          {[80,79,78,77,76,75,74,73,72,71].map(num => (
            <div className="cell" key={num}>{num}</div>
          ))}
        </div>

        {/* Row 7 */}
        <div className="row">
          {[61,62,63,64,65,66,67,68,69,70].map(num => (
            <div className="cell" key={num}>{num}</div>
          ))}
        </div>

        {/* Row 6 */}
        <div className="row">
          {[60,59,58,57,56,55,54,53,52,51].map(num => (
            <div className="cell" key={num}>{num}</div>
          ))}
        </div>

        {/* Row 5 */}
        <div className="row">
          {[41,42,43,44,45,46,47,48,49,50].map(num => (
            <div className="cell" key={num}>{num}</div>
          ))}
        </div>

        {/* Row 4 */}
        <div className="row">
          {[40,39,38,37,36,35,34,33,32,31].map(num => (
            <div className="cell" key={num}>{num}</div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="row">
          {[21,22,23,24,25,26,27,28,29,30].map(num => (
            <div className="cell" key={num}>{num}</div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="row">
          {[20,19,18,17,16,15,14,13,12,11].map(num => (
            <div className="cell" key={num}>{num}</div>
          ))}
        </div>

        {/* Row 1 */}
        <div className="row">
          {[1,2,3,4,5,6,7,8,9,10].map(num => (
            <div className="cell" key={num}>{num}</div>
          ))}
        </div>

        {/* Snakes */}
        <div className="snake" style={{top: "40px", left: "360px", transform: "rotate(45deg)"}}></div>
        <div className="snake" style={{top: "120px", left: "80px", transform: "rotate(-30deg)"}}></div>

        {/* Ladders */}
        <div className="ladder" style={{top: "200px", left: "50px", height: "100px"}}></div>
        <div className="ladder" style={{top: "300px", left: "300px", height: "120px"}}></div>

      </div>
    </div>
  );
}

export default App;