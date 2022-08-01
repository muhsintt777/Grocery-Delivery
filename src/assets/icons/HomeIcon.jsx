import React from "react";

function HomeIcon({ size = "50px" }) {
  return (
    <div
      style={{
        width: size,
        position: "fixed",
        right: "50px",
        backgroundColor: "grey",
      }}
    >
      <svg viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
      </svg>
      <p style={{ textAlign: "center" }}>Back</p>
    </div>
  );
}

export default HomeIcon;
