import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (operation) {
      case "add":
        res = a + b;
        break;
      case "sub":
        res = a - b;
        break;
      case "mul":
        res = a * b;
        break;
      case "div":
        if (b === 0) {
          res = "Cannot divide by zero";
        } else {
          res = a / b;
        }
        break;
      default:
        res = "Invalid operation";
    }

    setResult(res);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <br /><br />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <br /><br />
      <button onClick={() => handleCalculation("add")}>+</button>
      <button onClick={() => handleCalculation("sub")}>-</button>
      <button onClick={() => handleCalculation("mul")}>×</button>
      <button onClick={() => handleCalculation("div")}>÷</button>
      <br /><br />
      <div>
        <strong>Result:</strong> {result !== null ? result : "No calculation yet"}
      </div>
    </div>
  );
};

export default Calculator;
