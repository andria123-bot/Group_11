import { useState, useEffect } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const handleCalculate = () => {
    try {
      const parsedInput = eval(input);
      setResult(parsedInput);
    } catch (error) {
      console.error(error);
      setResult("Invalid input");
    }
  };

  useEffect(() => {
    if (result !== null) {
      setInput(result.toString());
      setResult(null);
    }
  }, [result]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <div className="mb-4">{/* Output Bar */}
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className="w-full p-4 border border-gray-600 rounded mb-4 text-right text-2xl bg-gray-900 text-white focus:outline-none"
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-2">{/* Buttons */}
          {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '/', '='].map((value) => (
            <button 
              key={value} 
              onClick={value === '=' ? handleCalculate : () => handleInput(value)} 
              className="bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600"
            >
              {value}
            </button>
          ))}
          <button onClick={handleClear} className="col-span-2 bg-red-500 text-white p-3 rounded-lg hover:bg-red-600">C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
