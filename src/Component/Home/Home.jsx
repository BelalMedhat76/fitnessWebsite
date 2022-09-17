import React from "react";
import "./Home.css";
import fitlogo from "../../assets/fitlogo.png";
import scroll from "../../assets/scroll.png";
import card1logo from "../../assets/card1logo.png";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import "bootstrap/dist/css/bootstrap.css";
import data from "./cardData";
import Card from "./card";
import { Reveal, Roll, Slide } from "react-reveal";
import Nav from "../Nav/Navabr";
export const Home = () => {
  return (
    <>
      <Nav />
      <div className="heroSection" id="home">
        <div className="heroContent">
          <Zoom>
            <img src={fitlogo} alt="" />
          </Zoom>
          <Fade top>
            {" "}
            <h1>Health & Fitness CLub</h1>
          </Fade>
          <div className="address">
            <p>Current hours of operation: </p>
            <p>Monday - Thursday: 5:30am - 10pm </p>
            <p>Friday: 5:30am - 9pm </p>
            <p>Saturday & Sunday: 8am - 8pm </p>
          </div>
          <Bounce bottom cascade>
            {" "}
            <div className="heroBtns">
              <button>image gallery</button>

              <button>recorded classes</button>
            </div>
          </Bounce>
          <div className="scroll">
            <img src={scroll} id="scrollIcon" alt="" />
          </div>
        </div>
      </div>
      <Fade bottom>
        <section className="join">
          <div className="join_head">
            {" "}
            <h1>Join now for just $10/month</h1>
          </div>

          <div className=" cont">
            <Card details={data} />
          </div>
        </section>
      </Fade>

      <section className="workHard">
        <div className="workHard_content">
          <Fade bottom>
            <h1 id="workhead"> Work Hard Get Results</h1>
          </Fade>

          <p id="workpara">Keep Going</p>
          <Fade bottom>
            <button className="workBtn">Book A Tour Today</button>
          </Fade>
        </div>
      </section>
      <section className="inviting container">
        <Slide left>
          <div className="invit_img"></div>
        </Slide>
        <Zoom>
          <div className="invit_content">
            <h2>Inviting & inspiring</h2>
            <p>
              Ultricies leo integer malesuada nunc vel risus commodo viverra
              maecenas. Lobortis elementum nibh tellus molestie nunc non.
              Aliquet bibendum
            </p>
            <button className="invitingBtn">Learn More</button>
          </div>
        </Zoom>
      </section>
      <section className="container getResult">
        <Zoom>
          <div className="invit_content">
            <h2> Work Hard Get Results</h2>
            <p>
              Ultricies leo integer malesuada nunc vel risus commodo viverra
              maecenas. Lobortis elementum nibh tellus molestie nunc non.
              Aliquet bibendum
            </p>
            <button className="getResultBtn">Contact Us</button>
          </div>
        </Zoom>
        <Slide right>
          <div className="getResultIMg"></div>
        </Slide>
      </section>
    </>
  );
};

export default Home;
