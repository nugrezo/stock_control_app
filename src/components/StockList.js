import React from "react";
import classes from "./StockList.module.css";
import StockListItems from "./StockListItems";

const StockList = (props) => {
  return (
    <div className={classes.stockListDiv}>
      <div className={classes.li}>
        <li>Name</li>
        <li>Amount</li>
        <li>Unit Price</li>
        <li>Desription</li>
      </div>
      <ul className={classes.stockList}>
        {props.items.map((item) => (
          <StockListItems
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            unitPrice={item.unitPrice}
            description={item.description}
            onDelete={props.onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default StockList;
