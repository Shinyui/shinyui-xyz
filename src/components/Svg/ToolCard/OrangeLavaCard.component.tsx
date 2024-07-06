import Prop from "./type";

const OrangeLavaCard = ({ title, subTitle }: Prop) => {
  return (
    <svg
      viewBox="0 0 280 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <g clip-path="url(#clip0_7_2340)">
        <path
          d="M12 0H268C274.6 0 280 5.4 280 12V118C280 124.6 274.6 130 268 130H12C5.4 130 0 124.6 0 118V12C0 5.4 5.4 0 12 0Z"
          fill="url(#paint0_linear_7_2340)"
        />
        <text
          fill="white"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre", zIndex: 999 }}
          font-family="Roboto"
          font-size="28"
          letter-spacing="0em"
        >
          <tspan x="26.9998" y="57.0703">
            {title}
          </tspan>
        </text>
        <text
          fill="white"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          font-family="Roboto"
          font-size="18"
          letter-spacing="0em"
        >
          <tspan x="26.9998" y="86.9688">
            {subTitle}
          </tspan>
        </text>
        <path
          opacity="0.2"
          d="M113.5 22C129.24 22 142 9.24012 142 -6.5C142 -22.2401 129.24 -35 113.5 -35C97.7599 -35 85 -22.2401 85 -6.5C85 9.24012 97.7599 22 113.5 22Z"
          fill="white"
        />
        <path
          d="M59 169C77.7777 169 93 153.778 93 135C93 116.222 77.7777 101 59 101C40.2223 101 25 116.222 25 135C25 153.778 40.2223 169 59 169Z"
          fill="url(#paint1_linear_7_2340)"
        />
        <path
          d="M168.2 -6.40012C168.2 -6.40012 195.9 17.9999 175.1 67.0999C154.3 116.2 172.7 134.6 172.7 134.6H269.1C269.1 134.6 256.1 114.5 266.1 87.8999C276.1 61.2999 271.4 41.6999 253.1 29.2999C234.8 16.8999 220 6.19986 223.5 -15.7001C227 -37.6001 168.2 -6.40012 168.2 -6.40012Z"
          fill="url(#paint2_linear_7_2340)"
        />
        <path
          d="M217.6 131.9C217.6 131.9 214.4 114.4 244.6 88.7999C266.5 70.1999 253 38.5 244 22.7C246.9 24.9 250.1 27 253.3 29.2C271.6 41.6 276.4 61.1999 266.3 87.7999C260.7 102.1 261.3 118 267.8 131.8H217.6V131.9Z"
          fill="url(#paint3_linear_7_2340)"
        />
        <g opacity="0.3">
          <path
            opacity="0.3"
            d="M181.2 -6.80005C181.2 -6.80005 209 20.4999 168.9 68.7999C128.8 117.1 189.8 247.7 189.8 247.7"
            stroke="white"
          />
          <path
            opacity="0.3"
            d="M238.5 -9.5C238.5 -9.5 231.7 13.3 259.9 31C288.1 48.7 285.4 104.3 247.2 128.4"
            stroke="white"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_7_2340"
          x1="9.5305"
          y1="53.5005"
          x2="245.743"
          y2="149.941"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF6215" />
          <stop offset="1" stop-color="#FFA580" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_7_2340"
          x1="30.0798"
          y1="130.037"
          x2="85.6358"
          y2="139.563"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.102" />
          <stop offset="1" stop-color="white" stop-opacity="0.302" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_7_2340"
          x1="218.379"
          y1="3.91026"
          x2="218.379"
          y2="134.825"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FDAB80" />
          <stop offset="1" stop-color="#FF9659" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_7_2340"
          x1="244.551"
          y1="22.7883"
          x2="244.551"
          y2="131.922"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF9C5A" />
          <stop offset="1" stop-color="#F8721E" />
        </linearGradient>
        <clipPath id="clip0_7_2340">
          <rect width="280" height="130" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default OrangeLavaCard;
