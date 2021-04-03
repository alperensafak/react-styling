import React from "react";
const containerStyle = {
  margin: "0 auto",
  maxWidth: "90rem",
  backgroundColor: "palevioletred",
  padding: "2rem",
};
const InlineStyle = () => {
  return (
    <div>
      <div style={{ ...containerStyle, color: "white" }}>
        <h1 style={{ fontFamily: "Hachi Maru Pop ", textAlign: "center" }}>
          React Component Styling - INLINE
        </h1>
        <p>
          <ul style={{ listStyle: "none" }}>
            <li>➕ Use camel case: text-align -> textAlign</li>
            <li>➕ Prior</li>
            <li>➖ No psuedo class (:hover, :visited, :focus...) </li>
            <li>➖ No @media query</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default InlineStyle;
