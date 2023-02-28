import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default connect(null)(Root);
