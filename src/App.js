import './App.css';
import Numbers from './components/numbers';
import Operators from './components/operators';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input,setInput] = useState("");
  const calculate = (button) => {
    if(button === "="){
      const result = evaluate(input);
      setInput(result);
    }
    else if(button === "c"){
      setInput("");
    }
    else{
      setInput(input+button);
    }
  }

  const handleClick = (x) => {
    const display = x.target.textContent;
    calculate(display);
  }

  return (
    <div data-testid="display" className="App">
      <h1>My calculator</h1>
      <div className="display">
      <h2>{input}</h2>
      </div>
      <div className="operators">
      <Operators  handleClick = {handleClick} />
      </div>
      <div className="numbers">
      <Numbers  handleClick = {handleClick} />
      </div>
    </div>
  );
}

export default App;
