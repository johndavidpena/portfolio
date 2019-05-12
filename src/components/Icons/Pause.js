import React from "react";

const SVG = ({
  style = {},
  clickHandler = null,
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 24 24"
}) => (
    <svg
      onClick={clickHandler}
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill={fill}
        d="M14,19H18V5H14M6,19H10V5H6V19Z"
      />
    </svg>
  );

export default SVG;