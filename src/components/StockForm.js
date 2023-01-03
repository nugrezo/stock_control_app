import { useState, useRef } from "react";
import classes from "./StockForm.module.css";
import ErrorModal from "./UI/ErrorModal";

const StockForm = (props) => {
  const name = useRef();

  const amount = useRef();

  const unitPrice = useRef();

  const description = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    const enteredName = name.current.value;
    const enteredAmount = amount.current.value;
    const enteredUnitPrice = unitPrice.current.value;
    const enteredDescription = description.current.value;

    event.preventDefault();
    const stockData = {
      name: enteredName,
      amount: enteredAmount,
      unitPrice: enteredUnitPrice,
      description: enteredDescription,
      id: Math.random().toString(),
    };
    if (
      enteredName.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredUnitPrice.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
      setError({
        title: "Invalid or missing input",
        message: "Please fill out to form",
      });
      return;
    }
    if (enteredAmount < 1 || enteredUnitPrice < 1) {
      setError({
        title: "Invalid amount or unit price ",
        message: "eneter greater than 0",
      });
      return;
    }
    props.onUserInput(stockData);
    name.current.value = "";
    amount.current.value = "";
    unitPrice.current.value = "";
    description.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className={classes.stock_form}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <h4 className={classes.head}>This form is used to register stocks</h4>
        <div className={classes.control}>
          <label htmlFor="stock-name">Name</label>
          <input type="text" ref={name} />
        </div>
        <div className={classes.control}>
          <label htmlFor="stock-amount">Amount</label>
          <input type="number" ref={amount} />
        </div>
        <div className={classes.control}>
          <label htmlFor="stock-unit-price">Unit Price</label>
          <input type="text" ref={unitPrice} />
        </div>
        <div className={classes.control}>
          <label htmlFor="stock-description">Description</label>
          <input list="dropdown" type="text" ref={description} />
          <datalist id="dropdown">
            <option value="For Women"></option>
            <option value="For Men"></option>
            <option value="Unisex"></option>
          </datalist>
        </div>
        <div className={classes.actions}>
          <button className={classes.button} type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default StockForm;
