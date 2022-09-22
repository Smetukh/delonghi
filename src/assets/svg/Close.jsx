import React from 'react';

const Close = (props) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1L9.5 9.5M9.5 9.5L18 18M9.5 9.5L18 1M9.5 9.5L1 18"
        stroke="black"
        strokeOpacity="0.45"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Close;
