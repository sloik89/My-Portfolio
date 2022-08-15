import React from "react";
import './btnRound.css'
import {useGlobalContext} from '../../context'
const BtnRound = ({ title,dark }) => {
  const {darkMode} = useGlobalContext()
  return (
    <button className="hero-btn">
      {title}
      <svg
        className="arrow"
        width="60"
        height="12"
        viewBox="0 0 60 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M60 6L50 0.226497V11.7735L60 6ZM0 7H51V5H0V7Z" fill={`${darkMode ? 'white' : 'black'}`} />
      </svg>
    </button>
  );
};

export default BtnRound;