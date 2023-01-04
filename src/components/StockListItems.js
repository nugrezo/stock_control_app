import React from "react";
import classes from "./StockListItems.module.css";

const StockListItems = (props) => {
  const deleteHandler = () => {
    console.log("props.id is", props.id);
    console.log("delete button is working");
    props.onDelete(props.id);
  };
  return (
    <div className={classes.stockList_items} onClick={deleteHandler}>
      <li>{props.name}</li>
      <li>{props.amount}</li>
      <li>{props.unitPrice}</li>
      <li>{props.description}</li>
    </div>
  );
};

export default StockListItems;
