import React from "react";
import { connect } from "react-redux";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>

      <a href="https://trippn.onrender.com/"><h3 class="neonProject">trippn</h3></a>
      <h4>trip planning application - Grace Hopper at Fullstack Academy - December 2022</h4>
      
      <a href="https://grace-monger.onrender.com/"><h3 class="neonProject">Grace Monger</h3></a>
      <h4>mock e-commerce site for wine and cheese - Grace Hopper at Fullstack Academy - November 2022</h4>
    </div>
  );
};

export default connect(null)(Projects);