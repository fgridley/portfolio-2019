import React from "react";

const SVG = ({
    style = {color: "#fff"},
    width = "25px",
}) => (
    <svg
        width={width} 
        height={width}
        style={style}
        viewBox="0 0 30 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 0.0214844V21.7261H29.75V0.0214844H0ZM3.78516 2.19194H25.9648L14.875 11.6321L3.78516 2.19194ZM2.125 3.60817L14.875 14.4564L27.625 3.60817V19.5556H2.125V3.60817Z" fill="black"/>
    </svg>
);

export default SVG;