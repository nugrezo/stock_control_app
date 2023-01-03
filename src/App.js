import { useState } from "react";
import "./App.css";
import StockList from "./components/StockList";
import StockForm from "./components/StockForm";

const stockList = [
  {
    id: "s1",
    name: "Slipper",
    amount: 20,
    unitPrice: "30",
    description: "For ladies",
  },
];

function App() {
  const [enteredValue, setEnteredValue] = useState(stockList);
  const userInputHandler = (inputData) => {
    setEnteredValue((prevState) => {
      return [inputData, ...prevState];
    });
  };
  return (
    <div className="App">
      <StockForm onUserInput={userInputHandler} />
      <StockList items={enteredValue} />
    </div>
  );
}

export default App;
