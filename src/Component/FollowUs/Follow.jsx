import React from "react";
import "./Follow.css";
import { Component } from "react";
import insta from "../../assets/index.png";
import { Fade, Roll } from "react-reveal";
class FollowUS extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="follow" id="about">
          <div className="followContent">
            <Roll top>
              <img src={insta} alt="" />
            </Roll>
            <Fade left>
              <h1> See more, follow us on</h1>
            </Fade>
            <Fade right>
              <h2> Instagram @FitnessSporting</h2>
            </Fade>
          </div>
        </div>
      </>
    );
  }
}

export default FollowUS;
