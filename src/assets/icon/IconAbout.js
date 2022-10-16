import * as React from "react";
const SvgIconAbout = (props) => (
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
      d="M4.99 2c-.49 0-.857.382-.857.815 0 .432.366.814.858.814h6.952v-.814c0-.433-.366-.815-.857-.815H4.991Zm8.286 1.687v-.872c0-1.204-.998-2.148-2.19-2.148H4.991c-1.193 0-2.19.944-2.19 2.148v10.37c-.001 1.204.997 2.148 2.19 2.148h7.618c1.193 0 2.191-.944 2.191-2.148V5.63a2 2 0 0 0-1.524-1.942ZM4.991 4.963c-.303 0-.593-.061-.858-.172v8.394c0 .433.366.815.858.815h7.618c.492 0 .858-.382.858-.815V5.63a.667.667 0 0 0-.667-.666H4.99Z"
      fill={props.color || "var(--color-icon)"}
    />
  </svg>
);
export default SvgIconAbout;

