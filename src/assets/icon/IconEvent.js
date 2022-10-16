import * as React from "react";
const SvgNavLink = (props) => (
  <svg
    width={props.scale*16 || 16}
    height={props.scale*16 || 16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g
      style={{ transform: `scale(${props.scale || 1})` }}
      clipPath="url(#NavLink_svg__a)"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={props.color || "var(--color-icon)"}
    >
      <path d="M4 3.333a2 2 0 0 0-2 2V12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5.333a2 2 0 0 0-2-2H4Zm-3.333 2A3.333 3.333 0 0 1 4 2h8a3.333 3.333 0 0 1 3.333 3.333V12A3.333 3.333 0 0 1 12 15.333H4A3.333 3.333 0 0 1 .667 12V5.333Z" />
      <path d="M5.333.667c.369 0 .667.298.667.666V4a.667.667 0 0 1-1.333 0V1.333c0-.368.298-.666.666-.666Zm5.334 0c.368 0 .666.298.666.666V4A.667.667 0 0 1 10 4V1.333c0-.368.299-.666.667-.666Zm-10 6c0-.369.298-.667.666-.667h13.334a.667.667 0 1 1 0 1.333H1.333a.667.667 0 0 1-.666-.666Z" />
    </g>
  </svg>
);
export default SvgNavLink;

