import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const Calculator = () => {
  const [input, setInput] = useState("");


  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };


  const handleClear = () => {
    setInput("");
  };

  
  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
    ["C"],
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-yellow-800 rounded-lg shadow-lg w-72">
      <Display input={input} />
      <div className="grid grid-cols-4 gap-4 w-full">
        {buttons.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((buttonValue, colIndex) => (
              <Button
                key={colIndex}
                value={buttonValue}
                onClick={
                  buttonValue === "="
                    ? handleCalculate
                    : buttonValue === "C"
                    ? handleClear 
                    : handleButtonClick
                }
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
