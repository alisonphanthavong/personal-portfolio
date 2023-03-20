import React from "react";
import { connect } from "react-redux";

const Home = () => {
  return (
    <div class="ovid-quote">
      <h3>"Partimque figuras rettulit antiquas, partim nova monstra creavit."</h3>
      <h4>
        "Partly we recovered the old, familiar things, partly we created
        something wondrous and new."
      </h4>
      <br></br>
      <h4>Ovid, Metamorphoses Book I</h4>
    </div>
  );
};

export default connect(null)(Home);
