import React from "react";
import "./ReadTime.css";

const ReadTime = ({ time }) => {
  // console.log(time);
  return (
    <div className="spent-read-time">
      <h3>Spent time on read : {time} min</h3>
    </div>
  );
};

export default ReadTime;
