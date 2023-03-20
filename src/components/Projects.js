import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Projects = () => {
  return (
    <div>
      <h1>My Work</h1>

      <p class="technologies">
        Technologies: JavaScript, Node.js, React/Redux, Express, SQL, Git,
        HTML5, CSS
      </p>

      <a href="https://trippn.onrender.com/">
        <h3 class="neonProject">trippn</h3>
      </a>
      <p>
        trip planning application - Grace Hopper at Fullstack Academy - December
        2022
      </p>

      <a href="https://grace-monger.onrender.com/">
        <h3 class="neonProject">Grace Monger</h3>
      </a>
      <p>
        mock e-commerce site for wine and cheese - Grace Hopper at Fullstack
        Academy - November 2022
      </p>
    </div>
  );
};

export default connect(null)(Projects);
