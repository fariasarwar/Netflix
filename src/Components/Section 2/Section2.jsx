import React from "react";
import "./section2.css";
import fdiv from '../../assets/images/1-div.png'
import sdiv from '../../assets/images/2-div.png'
import tdiv from '../../assets/images/3-div.png'
import fordiv from '../../assets/images/4-div.png'

const Section2 = () => {
  return (
    <>
      <div className="section-2">
        <div className="section-data">
          <div  className="s2-h1">
            <h1>More Reasons to Join</h1>
          </div>
          <div className="s-div">
            <div className="s2-1">
              <h2>Enjoy on your TV</h2>
              <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
              </p>
              <img src={fdiv} className="div-img"/>
            </div>
            <div className="s2-1 s2-2">
            <h2>Download your shows to watch offline</h2>
              <p>
              Save your favorites easily and always have something to watch.
              </p>
              <img src={sdiv} className="div-img"/>
            </div>
            <div className="s2-1 s2-3">
            <h2>Watch everywhere</h2>
              <p>
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
              <img src={tdiv} className="div-img"/>
            </div>
            <div className="s2-1 s2-4">
            <h2>Create profiles for kids</h2>
              <p>
              Send kids on adventures with their favorite characters in a space made just for them — free with your membership.
              </p>
              <img src={fordiv} className="div-img"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
