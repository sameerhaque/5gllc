import * as React from "react";

const SvgComponent: React.FC<any> = ({ color }) => (
  <div style={{ padding: 8, borderRadius: 8, backgroundColor: `${color}10` }}>
    <svg width={15} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.313 2.286h1.207c.48 0 .94.203 1.28.565.339.362.53.852.53 1.364v12.857c0 .512-.191 1.002-.53 1.364-.34.362-.8.565-1.28.565H3.077c-.238 0-.473-.05-.693-.147a1.808 1.808 0 0 1-.587-.418 1.942 1.942 0 0 1-.392-.626 2.04 2.04 0 0 1-.138-.738V4.215c0-.253.047-.504.138-.738.09-.234.224-.447.392-.626.168-.18.368-.321.587-.418.22-.097.455-.147.693-.147h1.206"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M9.107 1H5.489c-.667 0-1.207.576-1.207 1.285 0 .71.54 1.286 1.207 1.286h3.618c.666 0 1.206-.576 1.206-1.286 0-.71-.54-1.285-1.206-1.285Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default SvgComponent;
