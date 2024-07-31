import Head from "next/head";
import { Fragment } from "react";
import Cursor from "../src/layout/Cursor";
import PreLoader from "../src/layout/PreLoader";
import Image from "next/image";


const Intro = () => {
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
            <h3 style={{color:"gray"}} className="">Hey there!! Select Your Prefered Theme</h3>
          </div>
          <span className="intro_line" />
          <span className="intro_line_2" />
          <span className="intro_line_3" />
          <div className="demos">
            <div className="left">
              <div className="desc desc1">
              <h3 className="titlesss">Light Theme</h3>
                <img className="img1" src="img/intro/light.png" alt="image" />
                <h3 className="tt">Light Theme</h3>
              </div>
              <a className="intro_link" href="index-white" target="_blank" />
            </div>
            <div className="right">
              <div className="desc">
                <img className="img2" src="img/intro/dark.png" alt="image" />
                <h3 className="title">Dark Theme</h3>
              </div>
              <a className="intro_link" href="index-dark" target="_blank" />
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
