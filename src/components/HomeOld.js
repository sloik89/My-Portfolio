import React, { useRef, useEffect } from "react";
import "../css/Home.css";
import BtnRound from "./BtnRound";
import heroSmall from "../assets/hero-small.jpg";
import arrow from "../assets/arrow.svg";
import Icons from "./Icons";
import { useGlobalContext } from "../context";
const Home = () => {
  const refButtons = useRef(null);
  const { openSidebar, darkMode, setDarkMode } = useGlobalContext();
  useEffect(() => {
    const text = refButtons.current;
    text.innerHTML = text.innerText
      .split("")
      .map((letter, i) => {
        return `<span style="transform:rotate(${i * 8}deg)"> ${letter} </span>`;
      })
      .join("");
    console.log(text);
  }, []);
  return (
    <section className={` ${darkMode ? "home darkTheme" : "home"}`}>
      <div className="section-center">
        <div className="hero">
          <div className="image-hero">
            <img src={heroSmall} alt="" className="image" />
          </div>
        </div>
        <div className="info-hero">
          <div className="container-info-hero">
            <h1 className="hero-head">
              Hello I'm Sebastian
              <br /> Frontend Developer
            </h1>
            <p className="hero-info">
              I am drawn to everything related with webdev. My aim is to create
              better code. I like hard and interesting tasks.
            </p>
           
            
            <BtnRound title='see projects'/>
            <div className="cirlce-expirience">
              <div className="circle-logo"></div>
              <div className="circle-text" ref={refButtons}>
                <p>2-years-of-expirience</p>
              </div>
            </div>
          </div>
        </div>
        <Icons />
      </div>
    </section>
  );
};

export default Home;
