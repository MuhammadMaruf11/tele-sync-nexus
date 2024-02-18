import React from "react";
import { Link } from "react-router-dom";
import Logo from "/img/logo/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footerArea">
        <div className="container pb-40 footer-border-bottom">
          <div className="row">
            <div className="col-xl-3 col-lg-4 ">
              <div className="footer-logo">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="footer-description">
                <p>
                  An IT consultancy can help you assess your technology needs and develop a technology strategy that aligns with your business
                </p>
              </div>
              <div className="footerWrapper">
                <div className="socialLinks">
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-facebook-square"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-dribbble"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-github"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2">
              <div className="footerWidget">
                <h6 className="titleText">useful links</h6>
                <ul>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/">Github</Link>
                  </li>
                  <li>
                    <Link to="/">Free Products</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2">
              <div className="footerWidget">
                <h6 className="titleText">other resources</h6>
                <ul>
                  <li>
                    <Link to="/cookies-policy">Cookies Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-condition">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-30">
          <div className="row">
            <div className="col-12 text-center">
              <div className="copyRightText">
                <span>
                  Copyright &copy; {new Date().getFullYear()} and All rights
                  reserved by{" "}
                  <Link target="_blank" to="https://digitaldecoderltd.com/">
                    <strong> Digital Decoder Ltd</strong>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
