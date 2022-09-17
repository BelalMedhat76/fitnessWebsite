import React from "react";
import card3logo from "../../assets/card3logo.png";
import data from "./cardData";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Bounce, Roll } from "react-reveal";
export const Card = (details) => {
  return (
    <>
      {data.map((details) => (
        <div className="" key={details.id} id="services">
          <Roll bottom>
            <img src={card3logo} className="cardlogo" alt="" />
          </Roll>
          <h3>{details.title}</h3>
          <p>{details.desc}</p>
          <p>
            <AiOutlineArrowRight size={"40px"} />
          </p>
        </div>
      ))}
    </>
  );
};

export default Card;
