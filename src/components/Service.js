import parse from "html-react-parser";
import { useEffect, useState, useContext } from "react";
import { fatchData } from "../utilits";
import ServicePopup from "./popup/ServicePopup";
import UserContext from "../userContext/userContext";
import Image from "next/image"


const data  = {
  "services": [
            {
                "name": "App Development",
                "charge": "$300",
                "desc": "Design direction for business. Get your business on the next level. We help to create great experiences.",
                "enabled": true,
                "_id": "65f1fd690556c3f887e9d94a",
                "image": {
                    "public_id": "portfolio3/1710364293287-4q1ngo.webp",
                    "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp"
                }
            },
            {
                "name": "Web & App ",
                "charge": "$600",
                "desc": "I build brands through cultural insights & strategic vision. Custom crafted business solutions.",
                "image": {
                    "public_id": "portfolio3/1710357775748-9vwq4q.jpeg",
                    "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357775748-9vwq4q.jpeg"
                },
                "enabled": true,
                "_id": "65f1fd100556c3f887e9d87b"
            },
            {
                "name": "UI/UX Solutions",
                "charge": "$399",
                "desc": "Design direction for business. Get your business on the next level. We help to create great experiences.",
                "image": {
                    "public_id": "1706290914024-725ytf",
                    "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706290914024-725ytf",
                    "_id": "65b3eee8eb20546ae6d467fe"
                },
                "_id": "65b3e33db48589dfcae1851d",
                "enabled": true
            },
            {
                "name": "Global Marketing",
                "charge": "$699",
                "desc": "Custom marketing solutions. Get your business on the next level. We provide worldwide marketing.",
                "image": {
                    "public_id": "portfolio3/1710357668346-ke8kgt.jpeg",
                    "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357668346-ke8kgt.jpeg"
                },
                "_id": "65b3e322b48589dfcae184d0",
                "enabled": true
            },
            {
                "name": "Brand Consultant",
                "charge": "$499",
                "desc": "I build brands through cultural insights & strategic vision. Custom crafted business solutions.",
                "image": {
                    "public_id": "portfolio3/1710357680224-phijt.png",
                    "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357680224-phijt.png"
                },
                "_id": "65b3e2f6b48589dfcae1843b",
                "enabled": true
            },
            {
                "name": "Wordpress Development",
                "charge": "$499",
                "desc": "Get yourself a website.",
                "image": {
                    "public_id": "portfolio3/1710357752227-6f5trs.jpeg",
                    "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357752227-6f5trs.jpeg"
                },
                "_id": "65b3e2a6b48589dfcae183f2",
                "enabled": true
            }
        ]
}




const Service = ({ dark }) => {
  // const [data, setData] = useState([]);
  // const data1 = useContext(UserContext); 
  const [popupdata, setPopupdata] = useState({});
  const [popup, setPopup] = useState(false);
  
  useEffect(() => {
    // setData(data1?.services.filter(item=>item.enabled));
    setTimeout(() => {
      let VanillaTilt = require("vanilla-tilt");
      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
      });
    }, 1000);
  }, []);

  const onClick = (index) => {
    setPopup(true);
    setPopupdata(data && data[index]);
  };

  return (
    <div className="dizme_tm_section" id="service">
      <ServicePopup
        data={popupdata}
        open={popup}
        close={() => setPopup(false)}
      />
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Services</span>
            <h3>What I Do for Clients</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="service_list">
            <ul>
              {data &&
                data.services.map(
                  (data, i) =>
                    data && (
                      <li
                        className={`wow ${
                          (i * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                        }`}
                        data-wow-duration="1s"
                        key={i}
                        onClick={() => onClick(i)}
                      >
                        <div className="list_inner tilt-effect">
                          <span className="icon">
                            {dark ? (
                              <Image
                              layout="fill"
      objectFit="cover" 
                                className="back"
                                src={data.image.url}
                                alt="image"
                              />
                            ) : (
                              <Image
                              layout="fill"
      objectFit="cover" 
                                className="back"
                                src={data.image.url}
                                alt="image"
                              />
                            )}
                          </span>
                          <div className="title">
                            <h3>{data.name}</h3>
                            <span className="price">
                              Starts from <span>{data.charge}</span>
                            </span>
                          </div>
                          <div className="text">
                            <p>{data.desc}</p>
                          </div>
                          <a className="dizme_tm_full_link" href="#" />
                          <Image
                          layout="fill"
                          objectFit="cover" 
                            className="popup_service_image"
                            src={data.image.url}
                            alt="image"
                          />
                        </div>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image layout="fill"
      objectFit="cover"  src="img/brushes/service/5.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <Image layout="fill"
      objectFit="cover"   src="img/brushes/service/6.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Service;
