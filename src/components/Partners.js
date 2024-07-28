import { useEffect, useState, useContext } from "react";
import UserContext from "../userContext/userContext";
import Image from "next/image";
const Partners = ({ dark }) => {
  const data = useContext(UserContext);
  const headingStyle = {
    textAlign: 'center', // Align text in the center
    marginBottom: '40px'
  };

  const social_handles = [
    {
      platform:"Twitter",
      imageUrl:"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718328750-d4jsq.webp",
      link:"",
      id:1
    },
    {
      platform:"Instagram",
      imageUrl:"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp",
      link:"https://www.instagram.com/_bitcode__/?hl=en",
      id:2
    },
    {
      platform:"Linkedin",
      imageUrl:"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp",
      link:"https://www.linkedin.com/in/satish-nadipalli/",
      id:3
    },
    {
      platform:"facebook",
      imageUrl:"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp",
      link:"",
      id:4
    }
  ];
  
  return (
    <div className="dizme_tm_section">
    <h2 style={headingStyle}> Connect with Me!</h2>
      <div className="dizme_tm_partners">
        <div className="container">
          <div  className="partners_inner">
            <ul >
              {
                social_handles.map((item,i) =>{
                  return (
                    <li
                    
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    key={i}
                    data-wow-delay={`0.${i + 1 * 2}s`}
                    style={{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:"35px"}}
                  >
                    <div  >
                      <Image
                        src={item.imageUrl}
                        alt="image not fuond"
                      />
                      <a className="dizme_tm_full_link" href={item.link} />
                    </div>
                  </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image src="img/brushes/partners/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Partners;
