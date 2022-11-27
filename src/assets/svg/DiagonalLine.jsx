import React from 'react';

const DiagonalLine = (props) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.646447"
        y1="46.6464"
        x2="46.6464"
        y2="0.646446"
        stroke="black"
      />
    </svg>
  );
};

export default DiagonalLine;
