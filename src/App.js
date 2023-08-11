import {useState,useRef} from 'react';
import './App.css';

function App() {
  const[result,setResult]=useState(0);
  const inputData=useRef(null);
  const outputData=useRef(null);

  function plus(e){
    e.preventDefault();
    setResult((result)=>result+Number(inputData.current.value));
  }
  function minus(e){
    e.preventDefault();
    setResult((result)=>result-Number(inputData.current.value));

  }
  function times(e){
    e.preventDefault();
    setResult((result)=>result*Number(inputData.current.value));

  }
  function divide(e){
    e.preventDefault();
    setResult((result)=>result/Number(inputData.current.value));

  }
  function resetInput(e){
    e.preventDefault();
    inputData.current.value=0;
     
  }

  function resetResult(e){
    e.preventDefault();
    setResult((prevVal)=>prevVal*0);

  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <form>
      <p onChange={outputData}>{result}</p>
      <input pattern="[0-9]" type='number' ref={inputData} placeholder='Type number here'></input>
      <button onClick={plus}>add</button>
     <button onClick={minus}>subtract</button>
     <button onClick={times}>multiply</button>
     <button onClick={divide}>divide</button>
     <button onClick={resetInput}>reset input</button>
     <button onClick={resetResult}>reset result</button>
      </form>
      

     
    </div>
  );
}

export default App;
