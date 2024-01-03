// Body.jsx
import React from 'react';

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
