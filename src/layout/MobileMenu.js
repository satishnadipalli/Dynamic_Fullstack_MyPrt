import { useState } from "react";
const MobileMenu = ({ logo }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="dizme_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
            <div className="logo">
            <span style={{fontWeight:"700",fontSize:"20px",color:"black"}}>Satish <span style={{fontWeight:"700",fontSize:"20px",color:"#f75023"}}>Nadipalli</span></span>
          </div>
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className=" current p-2 pl-1"  >
              <a href="#home" onClick={() => setToggle(false)}>
                Home
              </a>
            </li>
            <li className="p-2 pl-1" >
              <a onClick={() => setToggle(false)} href="#about">
                About
              </a>
            </li>
            <li className="p-2 pl-1" >
              <a onClick={() => setToggle(false)} href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="p-2 pl-1" >
              <a onClick={() => setToggle(false)} href="#service">
                Service
              </a>
            </li>
            <li className="p-2 pl-1" >
              <a onClick={() => setToggle(false)} href="#blog">
                Blog
              </a>
            </li>
            <li className="p-2 pl-1" >
              <a onClick={() => setToggle(false)} href="#contact">
                Contact
              </a>
            </li>
            <li  className="download_cv">
              <a href="img/cv/1.jpg" download="">
                <span>Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
