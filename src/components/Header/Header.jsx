import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/img/logo/logo.gif";

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = isHeaderFixed
    ? "header-bottom header-fixed"
    : "header-bottom";

  const [menuBtn, setMenuBtn] = useState(false);

  let mobileMenu;
  if (menuBtn) {
    mobileMenu = (
      <div className="mobileNavbar">
        <div className="header-menu">
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/digital-marketing">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/a2p-sms">A2P SMS</Link>
            </li>
            <li>
              <Link to="/case-study">Case Study</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              {" "}
              {isHeaderFixed ? (
                <Link to="/user">Profile</Link>
              ) : (
                <Link to="/user/login/">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <header className="header-area">
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4">
              <div className="header-time">
                <span>Mon-Fri: 8:00 AM - 6:30 PM</span>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="header-top-right">
                <div className="header-top-nav">
                  <ul>
                    <li>
                      <Link to=''>All Services</Link>
                    </li>
                    <li>
                      <Link to=''>Careers</Link>
                    </li>
                    <li>
                      <Link to=''>News</Link>
                    </li>
                  </ul>
                </div>
                <div className="header-top-mail">
                  <i className="fa-sharp fa-solid fa-envelope fa-fw"></i> info@telesyncnexus.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={headerClassName}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-3">
              <div className="header-logo">
                <Link to="/">
                  <img className="img-text" src={Logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-lg-block d-none text-end">
              <div className="header-menu">
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="/a2p-sms">A2P SMS</Link>
                  </li>
                  <li>
                    <Link to="/case-study">Case Study</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    {" "}
                    {isHeaderFixed ? (
                      <Link to="/user">Profile</Link>
                    ) : (
                      <Link to="/user/login/">Login</Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 d-lg-none d-block text-end">
              <button
                onClick={() => setMenuBtn(!menuBtn)}
                className="mobileMenuBtn"
              >
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </button>
            </div>
            <div className="col-12">{mobileMenu}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
