import './App.css';
import { useState } from "react";


function App() {
  const [display, setDisplay] = useState("");
  const [show, setShow] = useState([])

  const handleClick = id => {
    setShow([...show, id]);
    setDisplay(id);
  }

  const handleResult = () => {
    const result = show.join("").split(/(\D)/g)
    .map(value => value.match(/(\d)/) ? parseInt(value, 0) : value)
    .reduce((acc, value, index, array) => {
      switch (value) {
        case "+":
          return (acc += array[index + 1]);

        case "-":
          return (acc -= array[index + 1]);

        case "x":
          return (acc *= array[index + 1]);

        case "÷":
          return (acc /= array[index + 1]);

        default:
          return acc;
      }
    })

    setDisplay(result);
    setShow("")

  }

  return (
    <div className='flex justify-center items-center mt-36'>
    <div className="App w-64 h-60 grid">
      <h3 className="display text-center items-center bg-violet-300 w-64 mt-3.5 h-10 p-1.5 rounded-lg text-white">{display}</h3>

      <span className="display text-center items-center h-10  p-1.5">{show}</span>

      <section className="panel">
        <section className="numbers">
          <button className='border border-violet-300	rounded-lg w-16 p-1.5' onClick={() => handleClick(7)}>7</button>
          <button className='border border-violet-300	rounded-lg w-16 p-1.5' onClick={() => handleClick(8)}>8</button>
          <button className='border border-violet-300	rounded-lg w-16 p-1.5' onClick={() => handleClick(9)}>9</button>
          <button className='rounded-lg border-2 border-white bg-violet-400 w-16  p-1.5' onClick={() => handleClick("+")}>+</button>
            <br></br>

          <button className='border border-violet-300	rounded-lg w-16 p-1.5' onClick={() => handleClick(4)}>4</button>
          <button className='border border-violet-300	rounded-lg w-16 p-1.5' onClick={() => handleClick(5)}>5</button>
          <button className='border border-violet-300	rounded-lg w-16 p-1.5' onClick={() => handleClick(6)}>6</button>
          <button className='rounded-lg border-2 border-white bg-violet-400 w-16  p-1.5' onClick={() => handleClick("-")}>-</button>
          <br></br>

          <button className='border border-violet-300	rounded-lg w-16 p-1.5' onClick={() => handleClick(1)}>1</button>
          <button className='border border-violet-300	rounded-lg w-16 p-1.5' onClick={() => handleClick(2)}>2</button>
          <button className='border border-violet-300	rounded-lg w-16 p-1.5' onClick={() => handleClick(3)}>3</button>
          <button className='rounded-lg border-2 border-white bg-violet-400 w-16  p-1.5' onClick={() => handleClick("x")}><span>&#215;</span></button>
          <br></br>

          <button className='border border-violet-300	rounded-lg w-16 p-1.5' onClick={() => handleClick(0)}>0</button>
          <button className='rounded-lg bg-violet-600 w-32 p-1.5 text-white' onClick={() => handleResult()}>=</button>
          <button className='rounded-lg border-white border-2 bg-violet-400 w-16 p-1.5' onClick={() => handleClick("÷")}>÷</button>
        </section>

        <section className="operators">
        </section>
      </section>
    </div>
    </div>
  );
}

export default App;
