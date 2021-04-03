import React, { Component } from "react";
import "./stylesheet.css";

const CssStylesheet = () => {
  return (
    <div className="container">
      <h1 className="header">React Component Styling - CSS Stylesheet</h1>
      <p>
        <ul>
          <li>➕ Psuedo classes</li>
          <li>➕ @media query</li>
          <li>➖ All css selectors are in same global scope</li>
          <li>➖ className bug</li>
        </ul>
      </p>
    </div>
  );
};

export default CssStylesheet;
