import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Cursor from "../src/layout/Cursor";
import PreLoader from "../src/layout/PreLoader";
import Image from "next/image";


const Intro = () => {
  const [width,setWindowWidth] = useState();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    // Cleanup function to remove the event listener
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Satish Nadipalli | Intro</title>
      </Head>
      <PreLoader />
      <div className="dizme_tm_all_wrap overflow-hidden" data-magic-cursor="show">
        <div className="dizme_tm_intro">
          <div className="dizme_tm_intro_fixed_price ">
            <span className="anim" />
            <span className="anim" />
            <span className="anim" />
          </div>
          <div className="short_info">
            <h3 style={{color:"gray",marginTop:"-40px"}} className="">Hey there!! Select Your Prefered Theme</h3>
          </div>
          <span className="intro_line" />
          <span className="intro_line_2" />
          <span className="intro_line_3" />
          <div style={{width:`${width}`,overflow:"hidden"}} className="demos">
            <div className="left">
              <div className="desc desc1">
              <h3 className="titlesss">Light Theme</h3>
                <a  href="index-white" target="_blank" >
                  <img className="img1" src="img/intro/light.png" alt="image" />
                </a>
                <h3 className="tt">Light Theme</h3>
              </div>
              
            </div>
            <div className="right">
              <div className="desc">
                <a href="index-dark" target="_blank" >
                  <img className="img2" src="img/intro/dark.png" alt="image" />
                </a>
                <h3 className="title">Dark Theme</h3>
              </div>
              
            </div>
          </div>
        </div>
        {/* CURSOR */}
        <Cursor />
        {/* /CURSOR */}
      </div>
    </Fragment>
  );
};
export default Intro;
