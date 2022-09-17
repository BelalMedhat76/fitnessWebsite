import React from "react";
import "./Train.css";
import train1 from "../../assets/train1.jpg";
import train2 from "../../assets/train2.jpg";
import train31 from "../../assets/train31.jpg";
import train4 from "../../assets/train4.jpg";
import { Fade, Roll } from "react-reveal";
import pic22 from "../../assets/pic22.png";
import ContactUs from "../ContactUS/Contact";
import Footer from "../Footer/Footer";
export const Train = () => {
  return (
    <div>
      <div className="Trainer container">
        <div className="trainLeft">
          <h1>Our Trainers</h1>
          <div className="trainContent">
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <button className="trainBtn">Learn More</button>
        </div>
        <div className="trainRight">
          <div className="RightRow1">
            <Roll bottom>
              <img src={train1} alt="" />
            </Roll>
            <Roll bottom>
              <img src={train2} alt="" />
            </Roll>
          </div>
          <div className="RightRow2">
            <Roll bottom>
              <img src={train31} alt="" />
            </Roll>
            <Roll bottom>
              <img src={train4} alt="" />
            </Roll>
          </div>
        </div>
      </div>

      <div className="follows">
        <div className="followContents">
          <Roll top>
            <img src={pic22} alt="" />
          </Roll>
          <Fade left>
            <h1> Elite Personal training</h1>
          </Fade>
          <Fade right>
            <h2> Individualized Programs. Dedicated Trainers.</h2>
          </Fade>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};
