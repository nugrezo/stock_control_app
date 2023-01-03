import React from "react";
import classes from "./StockForm.module.css";

const StockForm = (props) => {
  return (
    <div className={classes.stock_form}>
      <form>
        <h4 className={classes.head}>This form is used to register stocks</h4>
        <div className={classes.control}>
          <label htmlFor="stock-name">Name</label>
          <input type="text" />
        </div>
        <div className={classes.control}>
          <label htmlFor="stock-amount">Amount</label>
          <input type="number" />
        </div>
        <div className={classes.control}>
          <label htmlFor="stock-unit-price">Unit Price</label>
          <input type="text" />
        </div>
        <div className={classes.control}>
          <label htmlFor="stock-description">Description</label>
          <input type="text" />
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
