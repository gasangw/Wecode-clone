import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
import './program.css';

export default class Program extends Component {
  render() {
    return (
      <div className="main-container2">
        <div className="wrapper2">
          <div className="wecode-title">
            <h5 className="about">ABOUT</h5>
            <h1 className="wecode">THE PROGRAM</h1>
          </div>
          <p>
            The programme is divided in four different phases; Pre-Introduction,
            Introduction, Advanced Programming and Job Placement, as influenced
            by Moringa School Pre-prep, Prep and Core programme.
          </p>
          <div>
            <h1 className="program-header">Pre-introduction to programming</h1>
            <p>
              This <strong>4-week</strong> full time digital skills training is
              preparing students to thrive in the following more advanced phases
              of the WeCode programme.
            </p>
            <h1 className="program-header">Introduction to Programming</h1>
            <p>
              This <strong>5-week</strong>, full time introduction to
              programming course is designed for both beginners to learn the
              fundamentals of programming as well as more established developers
              to sharpen their base of front-end skills.
            </p>
            <h1 className="program-header">Advanced Programming</h1>
            <p>
              This is a 15-week, full time course with 12 weeks of curriculum
              and 3 weeks of group projects and professional development.
              Professional development is integrated throughout the curriculum.
              Core consists of different pathways. Students choose either
              full-stack web or mobile development. With full-stack web,
              students explore Python, Java Script and Django. Then, with mobile
              development, they explore Java, Javascript and Android.
              <br />
              <br />
              At WeCode we do not only teach students to become the best
              developers but we also train them with the soft skills like
              communication, teamwork and presentation skills. These are the
              skills that students can use in order to become the best
              employees, freelancers and even entrepreneurs based on the needs
              of the job market. The biggest goal of the WeCode Programme is to
              prepare talented students to get into jobs.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
