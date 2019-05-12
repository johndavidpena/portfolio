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
        d="M18,18H6V6H18V18Z"
      />
    </svg>
  );

export default SVG;