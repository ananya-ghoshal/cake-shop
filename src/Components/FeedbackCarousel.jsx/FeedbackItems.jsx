import React from "react";

function FeedbackItems({ props }) {
  return (
    <div className="feedbackItem">
      <img src={props.img} alt={props.alt}></img>
      <div className="feedbackDetails">
        <h3>{props.name}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default FeedbackItems;
