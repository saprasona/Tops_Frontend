
import React from 'react';
import styles from "./body.module.css";

const Body = (props) => {
  return (
    <div className="body-container">
      <div className="content">{props.content1}</div>
      <div className="main-body">{props.bodyContent}</div>
      <div className="content">{props.content2}</div>
    </div>
  );
};

export default Body;
