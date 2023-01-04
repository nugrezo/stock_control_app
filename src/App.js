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

  const deleteItemHandler = (stockId) => {
    console.log("delete button is working");
    setEnteredValue((prevStock) => {
      const updatedStock = prevStock.filter((stock) => stock.id !== stockId);
      return updatedStock;
    });
  };

  return (
    <div className="App">
      <StockForm onUserInput={userInputHandler} />
      <StockList items={enteredValue} onDeleteItem={deleteItemHandler} />
    </div>
  );
}

export default App;
