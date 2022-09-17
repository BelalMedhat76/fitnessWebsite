import React from "react";
import { Component } from "react";
import "./Contact.css";
class ContactUs extends Component {
  state = {};
  render() {
    return (
      <div className="contacts" id="contact">
        <div className="container ">
          <div className="row">
            <h1 id="h1">contact us</h1>
          </div>
          <div className="row">
            <h4 id="h4">We'd love to hear from you!</h4>
          </div>
          <div className="row input-container">
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input type="text" required />
                <label>Name</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input type="text" required />
                <label>Email</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input type="text" required />
                <label>Phone Number</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <textarea required></textarea>
                <label>Message</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="btn-lrg submit-btn">ContactUs</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
