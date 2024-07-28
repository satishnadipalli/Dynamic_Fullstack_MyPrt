import Counter from "./Counter";

import { useState, useEffect, useContext } from "react";
import UserContext from "../userContext/userContext";
import Image from "next/image";

const About = ({ dark }) => {
  const data = useState({
    about:{exp_year:25},
  });

  
  return (
    <div className="dizme_tm_section ">
      <div className="dizme_tm_about mb-28"  id="about">
        <div>
          <h3>About <span>Me</span></h3>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image layout="fill" src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <Image       objectFit="cover"  src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
