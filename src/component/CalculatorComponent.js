import React, { useState } from "react";
import "./CalculatorComponent.css";

const CalculatorComponent = ({
  calculate,
  label1 = "What is",
  label2 = "% of",
  label3 = "?",
  buttonText = "CALCULAR",
  resultPlaceholder = "Result",
  unit = "%",
}) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const handleCalculation = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    const calcResult = calculate(num1, num2);
    setResult(calcResult);
  };

  return (
    <div className="reusable-calculator">
      <div className="input-section">
        <label>
          {label1}
          <input
            type="number"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="input-box"
          />
        </label>
        <label>
          {label2}
          <input
            type="number"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="input-box"
          />
        </label>
        <span>{label3}</span>
      </div>
      <div className="action-section">
        <button className="calculate-button" onClick={handleCalculation}>
          {buttonText}
        </button>
        <input
          type="text"
          value={result + " " + unit}
          readOnly
          placeholder={resultPlaceholder}
          className="result-box"
        />
      </div>
    </div>
  );
};

export default CalculatorComponent;
