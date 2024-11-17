import React from "react";
import "./section3.css";
import { GoPlus } from "react-icons/go";

const Section3 = () => {
  return (
    <>
      <div className="section3-container">
        <div className="section3-content">
          <div className="s3-content">
            <div className="s3-h1">
            <h1>Frequently Asked Questions</h1>
            </div>
            <div className="questions-div">
              <div className="question">
                <h2>What is Netflix?</h2>
              </div>
              <div className="icons">
                <GoPlus />
              </div>
            </div>

            <div className="questions-div">
              <div className="question">
                <h2>How much does Netflix cost?</h2>
              </div>
              <div className="icons">
                <GoPlus />
              </div>
            </div>

            <div className="questions-div">
              <div className="question">
                <h2>Where can I watch?</h2>
              </div>
              <div className="icons">
                <GoPlus />
              </div>
            </div>

            <div className="questions-div">
              <div className="question">
                <h2>How do I cancel?</h2>
              </div>
              <div className="icons">
                <GoPlus />
              </div>
            </div>

            <div className="questions-div">
              <div className="question">
                <h2>What can I watch on Netflix?</h2>
              </div>
              <div className="icons">
                <GoPlus />
              </div>
            </div>

            <div className="questions-div">
              <div className="question">
                <h2>Is Netflix good for kids?</h2>
              </div>
              <div className="icons">
                <GoPlus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
