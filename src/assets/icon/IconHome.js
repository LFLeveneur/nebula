import * as React from "react";
const SvgIconHome = (props) => (
  <svg
      width={props.scale*16 || 16}
      height={props.scale*16 || 16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
        style={{ transform: `scale(${props.scale || 1})` }}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.2.5a2 2 0 0 0-1.374.547L1.911 5.693A3.333 3.333 0 0 0 .867 8.116v5.217a2 2 0 0 0 2 2h10.666a2 2 0 0 0 2-2V8.116a3.335 3.335 0 0 0-1.044-2.423L9.574 1.047A2 2 0 0 0 8.2.501Zm0 1.334a.667.667 0 0 0-.458.182l-.418.395-4.497 4.25A2 2 0 0 0 2.2 8.117v5.217a.667.667 0 0 0 .667.667h10.666a.667.667 0 0 0 .667-.667V8.116a2 2 0 0 0-.627-1.454L8.659 2.016a.667.667 0 0 0-.458-.182Z"
      fill={props.color || "var(--color-icon)"}
    />
  </svg>
);
export default SvgIconHome;

