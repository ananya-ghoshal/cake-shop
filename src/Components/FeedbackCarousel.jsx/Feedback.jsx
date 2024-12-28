import "./Feedback.css";
import React, { useEffect, useState } from "react";
import ForwardIcon from "./Icons/arrow_forward.svg";
import BackIcon from "./Icons/arrow_back.svg";
import Person1 from "../../../assets/person/person1.png";
import Person2 from "../../../assets/person/person2.png";
import Person3 from "../../../assets/person/person3.png";
import FeedbackItems from "./FeedbackItems";

function Feedback() {
  const [index, setIndex] = useState(0);
  const elements = [
    <FeedbackItems
      props={{
        img: `${Person1}`,
        alt: "Person1",
        name: "Olivia R.",
        text: "The website is super user-friendly, and I loved the customization options for my wedding cake. It turned out stunning and tasted heavenly!",
      }}
    />,
    <FeedbackItems
      props={{
        img: `${Person2}`,
        alt: "Person2",
        name: "Mike T.",
        text: "Great variety of options and super easy to order online. The red velvet cupcakes were a treat – soft, fluffy, and perfectly sweet.",
      }}
    />,
    <FeedbackItems
      props={{
        img: `${Person3}`,
        alt: "Person3",
        name: "John D.",
        text: "The chocolate fudge cake was divine! Perfectly moist and rich, it was a hit at my son’s birthday party. Will definitely order again.",
      }}
    />,
  ];

  const length = elements.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <>
      <div className="feedback_heading">Our customers </div>
      <div className="carousel">
        <button onClick={handlePrevious}>
          <img src={BackIcon} alt="BackIcon" />
        </button>
        {elements[index]}
        <button onClick={handleNext}>
          <img src={ForwardIcon} alt="ForwardIcon" />
        </button>
      </div>
    </>
  );
}
export default Feedback;
