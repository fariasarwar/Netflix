import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="Footer-container">
        <div className="footer-div">
          <div className="footer-content">
            <div className="f-link">
              <Link className="links" to="/contact">Questions? Contact us.</Link>
            </div>
            <div className="links-divs">
                <div className="f-links-div">
                    <ul>
                        <li>
                          <Link to='/FAQ' className="links">FAQ</Link>
                        </li>
                        <li>
                          <Link to='/Investor Relations' className="links">Investor Relations</Link>
                        </li>
                        <li>
                          <Link to='/Privacy' className="links">Privacy</Link>
                        </li>
                        <li>
                          <Link to='/Speed Test' className="links">Speed Test</Link>
                        </li>
                    </ul>
                </div>

                <div className="f-links-div">
                    <ul>
                        <li>
                          <Link to='/Help Center' className="links">Help Center</Link>
                        </li>
                        <li>
                          <Link to='/Jobs' className="links">Jobs</Link>
                        </li>
                        <li>
                          <Link to='/Cookie Preferences' className="links">
                          Cookie Preferences</Link>
                        </li>
                        <li>
                          <Link to='/Legal Notices' className="links">
                          Legal Notices</Link>
                        </li>
                    </ul>
                </div>

                <div className="f-links-div">
                    <ul>
                        <li>
                          <Link to='/Account' className="links">Account</Link>
                        </li>
                        <li>
                          <Link to='/Ways to Watch' className="links">Ways to Watch</Link>
                        </li>
                        <li>
                          <Link to='/Corporate Information' className="links">
                          Corporate Information</Link>
                        </li>
                        <li>
                          <Link to='/Only on Netflix' className="links">
                          Only on Netflix</Link>
                        </li>
                    </ul>
                </div>

                <div className="f-links-div">
                    <ul>
                        <li>
                          <Link to='/Media Center' className="links">Media Center</Link>
                        </li>
                        <li>
                          <Link to='/Terms of Use' className="links">Terms of Use</Link>
                        </li>
                        <li>
                          <Link to='/Contact Us' className="links">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="language-div">
                <select className="select-box">
                    <option>English</option>
                </select>
            </div>
            <div>
                <p className="para-p">Netflix Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
