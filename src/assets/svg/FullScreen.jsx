import React from 'react';

const FullScreen = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15"
      fill="currentColor"
      width="16"
      height="15"
      stroke="currentColor"
      strokeWidth="0.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-share-2"
      {...props}
    >
      {/* <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line> */}
      <path
        d="M6.17647 0H0V4.41176L1.5 4.41V1.5H6.17647V0ZM15 0H8.82353V1.5H13.5V4.41176H15V3.52941V1.76471V0ZM6.17647 12.3529H0V10.5882V8.82353V7.94118H1.49996V10.85H6.17647V12.3529ZM8.82353 12.3529H15V7.94118H13.5V10.85H8.82353V12.3529Z"
        // stroke="#C4C4C4"
        // stroke-width="0.1"
      ></path>
    </svg>
  );
};

export default FullScreen;
