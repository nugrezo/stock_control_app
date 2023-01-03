import React from "react";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button className={classes.button} onClick={props.onConfirm}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
