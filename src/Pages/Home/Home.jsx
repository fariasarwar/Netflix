import React from "react";
import "./home.css";
import Header from "../../Components/Header/Header";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import Section from "../../Components/Section/Section";
import Section2 from '../../Components/Section 2/Section2';
import Section3 from "../../Components/Section3/Section3";
import Section4 from "../../Components/Section4/Section4";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  const getstartbtn = () => {
    navigate("/getstart");
  };
  return (
    <>
      <div className="home-containes">
        <div className="home-div-img">
          <Header />
          <div className="img-bg">
          </div>
          <div className="content-div">
              <div className="content-div-data">
                <h1>Unlimited movies, TV shows, and more</h1>
                <p>Starts at Rs 250. Cancel anytime.</p>

                <div className="mail-div">
                  <h3>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h3>
                  <div className="email-input">
                    <input type="email" placeholder="Email address" />
                    <button className="getstart-btn" onClick={getstartbtn}>
                      Get started
                      <SlArrowRight className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <Section />
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
