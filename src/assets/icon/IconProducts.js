import * as React from "react";
const SvgIconProducts = (props) => (
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
      d="M3.418 4.244A.667.667 0 0 1 3.934 4h9.193a2 2 0 0 1 1.99 2.199l-.4 4A2 2 0 0 1 12.727 12H6.36a2.001 2.001 0 0 1-1.962-1.608L3.28 4.797a.667.667 0 0 1 .138-.553Zm1.329 1.09.959 4.797a.667.667 0 0 0 .654.536h6.367a.667.667 0 0 0 .663-.6l.4-4a.668.668 0 0 0-.663-.734h-8.38Z"
      fill={props.color || "var(--color-icon)"}
    />
    <path
        style={{ transform: `scale(${props.scale || 1})` }}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.267 2c0-.368.298-.667.667-.667h.813a1.333 1.333 0 0 1 1.293 1.01l.54 2.162a.667.667 0 0 1-1.293.323l-.54-2.161h-.813A.667.667 0 0 1 1.267 2Zm4 12c0-.368.298-.667.667-.667h1.333a.667.667 0 0 1 0 1.334H5.934A.667.667 0 0 1 5.267 14Zm5.333 0c0-.368.299-.667.667-.667H12.6a.667.667 0 0 1 0 1.334h-1.333A.667.667 0 0 1 10.6 14Z"
      fill={props.color || "var(--color-icon)"}
    />
  </svg>
);
export default SvgIconProducts;

