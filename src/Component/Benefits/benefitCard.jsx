import React from "react";
import { Slide } from "react-reveal";
import data from "./benefitData";
export const BenefitCard = (details) => {
  return (
    <div className="benefitCard">
      {data.map((details) => (
        <div className="card1" key={details.id}>
          <Slide top>
            {" "}
            <h1>{details.head}</h1>
          </Slide>

          <p>{details.content}</p>
          <div className="morebtn">
            {" "}
            <h5>{details.btn}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BenefitCard;
