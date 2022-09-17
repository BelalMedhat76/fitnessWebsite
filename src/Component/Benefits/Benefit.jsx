import React from "react";
import { Fade } from "react-reveal";
import "./Benefit.css";
import BenefitCard from "./benefitCard";
import data from "./benefitData";
export const Benefit = () => {
  return (
    <div className="benefitContent" id="classes">
      <div className=" container">
        <div className="content">
          <Fade top>
            <p>Benefits of sport training</p>
          </Fade>
        </div>
        <div className="benefitCard">
          <Fade bottom>
            <BenefitCard details={data} />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
