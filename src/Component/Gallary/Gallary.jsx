import React, { Component } from "react";
import "./Gallary.css";
import pic1 from "../../assets/pic1.jpg";
import { Bounce, Fade, Roll, Slide } from "react-reveal";
import { Train } from "../Trainer/Train";
class Gallary extends Component {
  render() {
    return (
      <>
        <div className="gallary">
          <div className="gallaryContent">
            <Fade top>
              <h1 style={{ fontSize: "3.5rem" }}>Membership Options</h1>
            </Fade>
            <div className="gallaryPara">
              <p>
                All Memberships include full access to our amenities, pools,
              </p>
              <p>fitness classes & much more id est laborum.</p>
            </div>
            <Slide bottom>
              <div className="gallaryCards container">
                <div className="cart1">
                  <h1>Health</h1>
                  <p>Unlimited Classes </p>
                  <p>Daily Locker </p>
                  <p>Fitness Evaluation </p>
                  <p>Guest Passes </p>
                  <p>1 PT Sessionure </p>
                  <button>Inquire For Rates</button>
                </div>
                <div className="cart1">
                  <h1>Health Plus</h1>
                  <p>Health's Features + </p>
                  <p>Laundry Service </p>
                  <p>Overnight Locker </p>
                  <p>Guest Passes </p>
                  <p>3 PT Sessions </p>
                  <button>Inquire For Rates</button>
                </div>
                <div className="cart1">
                  <h1>Other</h1>
                  <p>Corporate </p>
                  <p>Neighborhood </p>
                  <p>Student </p>
                  <p>Guest Passes</p>
                  <p>Spousal </p>
                  <button>Inquire For Rates</button>
                </div>
              </div>
            </Slide>
            <div className="amenities">
              <h1>Amenities</h1>
              <div className="amenitiesHead">
                <p>
                  {" "}
                  Modern design and comfortable, all-inclusive luxury. With our
                  extensive range of{" "}
                </p>
                <p>
                  amenities, that includes sprawling outdoor terraces, we offer
                  a space unlike any other in
                </p>
                <p>New York City. You'll love your time here.</p>
              </div>
            </div>
            <div className="amen_Gallary container">
              <Roll bottom>
                <div className="gall1">
                  <button>Pool And JACuzzi</button>{" "}
                </div>
              </Roll>
              <Roll bottom>
                <div className="gall2">
                  <button>Studios</button>{" "}
                </div>
              </Roll>
              <Roll bottom>
                <div className="gall3">
                  {" "}
                  <button>lounge and cafe</button>{" "}
                </div>
              </Roll>
            </div>
            <div className="amen_Gallary container">
              <Roll bottom>
                <div className="gall4">
                  <button>Sauna</button>{" "}
                </div>
              </Roll>
              <Roll bottom>
                <div className="gall5">
                  <button>outdoor spaces</button>{" "}
                </div>
              </Roll>
              <Roll bottom>
                <div className="gall6">
                  {" "}
                  <button>basketball court</button>{" "}
                </div>
              </Roll>
            </div>
          </div>
          <Train />
        </div>
      </>
    );
  }
}

export default Gallary;
