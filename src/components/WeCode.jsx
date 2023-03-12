import React, { Component } from "react";
import './WeCode.css';
import Container from "react-bootstrap/Container";

export default class WeCode extends Component {
  render() {
    return (
      <Container className="main-container">
        <div className="wrapper">
          <div className="wecode-title">
                <h5 className="about">ABOUT</h5>
                <h1 className="wecode">WECODE</h1>
          </div>
          <p>
            WeCode is a high-class software development and coding training for
            working-age Rwandan women initiated by the German Government. WeCode
            is implemented with technical assistance from GIZ Rwanda in close
            collaboration with local training providers and in partnership with
            Rwandan institutions like MINECOFIN, the Ministry of ICT, and
            Innovation and the ICT Chamber.
          </p>
          <div>
            <p className="power-word">POWERED BY</p>
            <div className="power">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ZTujt2ILrVE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div>
                <h1 className="achive-year">What WeCode achieved in the past year</h1>
                <p>
                  During the first two cohorts of WeCode, about 100 women
                  already completed the WeCode training programme. These initial
                  cohorts were conducted by local implementation partners (
                  <a
                    href="https://moringaschool.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Moringa School
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://muraho.tech/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Muraho Tech
                  </a>
                  ). The philosophy of the WeCode Programme is to combine
                  competence- and soft skills- based learning in order to
                  prepare the students as best as possible for their career and
                  job opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
