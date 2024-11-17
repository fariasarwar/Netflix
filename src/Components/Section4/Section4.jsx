import React from "react";
import "./section4.css";
import { useNavigate } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const Section4 = () => {
  const navigate = useNavigate();
  const getstartbtn = () => {
    navigate("/getstart");
  };
  return (
    <>
      <div className="section4-container">
        <div className="s4-div">
          <div className="s4-content">
            <div className="s4-mail-div">
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="s4-email-input">
                <input type="email" placeholder="Email address" />
                <button className="s4-getstart-btn" onClick={getstartbtn}>
                  Get started
                  <SlArrowRight className="s4-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
