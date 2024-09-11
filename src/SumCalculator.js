import React, { useState } from 'react';

function SumCalculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState('');

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const calculateSum = () => {
    const result = parseInt(number1) + parseInt(number2);
    setSum(result);
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>SumCalculator</h1>
      <div style={{textAlign:'center'}}>
        number 1: <input type="number" value={number1} onChange={handleNumber1Change} /> <br></br>
        number 2: <input type="number" value={number2} onChange={handleNumber2Change} /> <br></br>
        <button style={{color:"coral",backgroundColor:'cyan', align:"center"}} onClick={calculateSum}>Calculate</button>
      </div>
      <div></div>
      <div style={{textAlign:'center'}}>Sum: {sum}</div>
    </div>
  );
}

export default SumCalculator;