import React from "react";
import classes from "./StockListItems.module.css";

const StockListItems = (props) => {
  return (
    <div className={classes.stockList_items}>
      <li>{props.name}</li>
      <li>{props.amount}</li>
      <li>{props.unitPrice}</li>
      <li>{props.description}</li>
    </div>
  );
};

export default StockListItems;
