import React from 'react';

const ArrowSVG = (props) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15 9L8 2L1 9" stroke="#0C2340" strokeWidth="2" />
    </svg>
  );
};

export default ArrowSVG;
