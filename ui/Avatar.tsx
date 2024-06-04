const Avatar = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="220" fill="url(#paint0_linear_12_14)" />
      <rect
        x="112"
        y="64"
        width="216"
        height="312"
        fill="url(#pattern0_12_14)"
      />
      <defs>
        <pattern
          id="pattern0_12_14"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_12_14"
            transform="scale(0.00462963 0.00320513)"
          />
        </pattern>
        <linearGradient
          id="paint0_linear_12_14"
          x1="0"
          y1="0"
          x2="0"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FCEBDE" />
          <stop offset="1" stopColor="#F7D3BA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Avatar;
