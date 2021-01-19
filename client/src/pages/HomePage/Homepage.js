import React from "react";
import { withRouter } from "react-router-dom";

import heroImg from "../../assets/hero-bcg.png";
import "./Homepage.css";

const Homepage = ({ history }) => {
  return (
    <section>
      <div className="container hero">
        {/* hero text */}
        <div className="hero-text">
          <h1 className="hero-heading">
            Course Management platform built with React
          </h1>
          <p className="hero-detail">
            View, add, edit courses as well as course modules on one platform
          </p>
          <button className="hero-cta" onClick={() => history.push("/courses")}>
            Get Started
          </button>
        </div>
        {/* end of hero text */}
        <div className="hero-img">
          <img src={heroImg} alt="background" />
        </div>
      </div>
    </section>
  );
};

export default withRouter(Homepage);
