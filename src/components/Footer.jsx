import React, { Component } from "react";
import foot from "./imgs/moringa.png";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="card-container">
        <div className="logo-section">
          <h3>POWERED BY</h3>
          <img src={foot} alt="myfoot-pic" className="mylog"/>
        </div>
        <div>
          <h3>HOW IT WORKS?</h3>
          <p>Once you have made your application in the form above:</p>
          <ul>
            <li>
              You will receive an invitation for an assessment and in person
              interview via email, SMS, or phone call.
            </li>
            <li>
              Once accepted, you will receive further communication before class
              starts.
            </li>
          </ul>
        </div>
        </div>
        <div className="last-word">
           <div className="last-word2">
            <p>&#64;2019 Moringa School. All Rights Reserved</p>
            <p>Go To Top 	&#94;</p>
           </div>
        </div>
      </div>
    );
  }
}
export default Footer;
