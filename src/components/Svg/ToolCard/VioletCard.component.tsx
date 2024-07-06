import Prop from "./type";

const VioletCard = ({ title, subTitle }: Prop) => {
  return (
    <svg
      width="280"
      height="130"
      viewBox="0 0 280 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <g clip-path="url(#clip0_6_2242)">
        <path
          d="M12 -0.100098H268C274.6 -0.100098 280 5.2999 280 11.8999V117.9C280 124.5 274.6 129.9 268 129.9H12C5.4 129.9 0 124.5 0 117.9V11.8999C0 5.2999 5.4 -0.100098 12 -0.100098Z"
          fill="url(#paint0_linear_6_2242)"
        />
        <path
          opacity="0.15"
          d="M95 92.8999C102.732 92.8999 109 86.6319 109 78.8999C109 71.1679 102.732 64.8999 95 64.8999C87.268 64.8999 81 71.1679 81 78.8999C81 86.6319 87.268 92.8999 95 92.8999Z"
          fill="#C7C7FF"
        />
        <path
          opacity="0.25"
          d="M13.5 167.9C41.9427 167.9 65 144.843 65 116.4C65 87.9572 41.9427 64.8999 13.5 64.8999C-14.9427 64.8999 -38 87.9572 -38 116.4C-38 144.843 -14.9427 167.9 13.5 167.9Z"
          fill="url(#paint1_linear_6_2242)"
        />
        <path
          opacity="0.35"
          d="M252.587 -14.8C252.587 -14.8 231.187 15.7999 222.787 43.8999C217.687 61.2999 216.387 79.4999 218.887 97.4999L248.487 115C248.487 115 252.387 85.4999 262.587 59.9999C272.787 34.4999 289.387 12.9999 289.387 12.9999L252.587 -14.8Z"
          fill="#9696FF"
        />
        <path
          d="M139.987 26.8C142.987 17.3 147.387 8.30001 153.087 0.100006C162.387 -13.3 177.087 -27 177.087 -27C177.087 -27 198.187 6.70001 205.287 44.2C212.387 81.7 205.287 122.8 205.287 122.8L177.087 104.2C177.087 104.2 177.487 79.8 168.187 60.4C158.887 41 139.987 26.8 139.987 26.8Z"
          fill="url(#paint2_linear_6_2242)"
        />
        <path
          opacity="0.41"
          d="M219.387 -5.8999C219.387 -5.8999 195.387 22.8001 184.587 50.0001C177.987 66.9001 175.087 85.0001 175.987 103L203.987 123C203.987 123 210.387 93.9001 222.787 69.4001C235.187 44.9001 253.587 24.9001 253.587 24.9001L219.387 -5.8999Z"
          fill="#ABABFF"
        />
        <text
          fill="white"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          font-family="Roboto"
          font-size="28"
          letter-spacing="0em"
        >
          <tspan x="26.9998" y="56.9849">
            {title}
          </tspan>
        </text>
        <text
          fill="white"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          font-family="Roboto"
          font-size="16"
          letter-spacing="0em"
        >
          <tspan x="26.9998" y="86.8833">
            {subTitle}
          </tspan>
        </text>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_6_2242"
          x1="32.0985"
          y1="52.7779"
          x2="234.149"
          y2="158.174"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4B53EC" />
          <stop offset="1" stop-color="#7676F8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6_2242"
          x1="40.8843"
          y1="74.5514"
          x2="9.7783"
          y2="122.127"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C7C7FF" />
          <stop offset="1" stop-color="#C7C7FF" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_6_2242"
          x1="169.315"
          y1="-25.6096"
          x2="198.664"
          y2="70.0013"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#ADAAFF" />
          <stop offset="1" stop-color="#746FFB" />
        </linearGradient>
        <clipPath id="clip0_6_2242">
          <rect width="280" height="130" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default VioletCard;
