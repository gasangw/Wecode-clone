import React, { Component } from "react";
import "./apply.css";
import Container from "react-bootstrap/Container";

export default class Apply extends Component {
  render() {
    return (
      <Container className="main">
        <div className="wrap">
          <div className="apply">
            <h1 className="requirements">REQUIREMENTS AND APPLICATION</h1>
          </div>
          <p className="last-p">
            We are looking for driven women who are excited about technology and
            solving real-world problems by developing digital solutions.<br/><br/> A high
            school diploma is required with preference for a high school or
            tertiary focus on computer science, programming or another technical
            field.<br/><br/> Strong English proficiency is necessary and basic digital
            skills are beneficial.<br/><br/> In case you encounter any issue, please
            contact +250786922822 or +250786922888 or write an email to
            wecode@moringaschool.com
          </p>
          <div className="mybtn">
            <button className="btn btn-danger">START YOUR APPLICATION</button>
          </div>
        </div>
      </Container>
    );
  }
}
