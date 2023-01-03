import "./App.css";
import StockForm from "./components/StokForm";

function App() {
  const userInputHandler = (props) => {
    return console.log("user input is coming");
  };
  return (
    <div className="App">
      <StockForm onUserInput={userInputHandler} />
    </div>
  );
}

export default App;
