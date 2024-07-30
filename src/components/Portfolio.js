import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import PreLoader from "../components/preloader";
import WOW from "wowjs";
const EcomerceUrl = "/img/logo/Ecomerce.png";
const YoutubeClone = "/img/logo/YoutubeClone.png";
const chattingApp = "/img/logo/chattingApp.jpg";
import Aos from "aos";
import "aos/dist/aos.css"
import Image from "next/image";

const data1 = {
  projects: [
    {
      liveurl: "#",
      githuburl: "https://github.com/satishnadipalli",
      title: "KRISA-ECOMERCE SITES",
      sequence: 14,
      image: {
        public_id: "1706285511679-xe7r9taf",
        url: "https://i.imgur.com/WRGa632.png"
      },
      description: "As part of my experience as a full-stack developer, I designed and developed a comprehensive e-commerce website using the MERN stack (MongoDB, Express, React, Node.js). This project showcased my ability to create a full-fledged online store with various advanced features and a seamless user experience.Key Features: User Authentication and Authorization, Product Management, Shopping Cart and Checkout, Order Management, Responsive Design, Search and Filtering, Reviews and Ratings",
      techStack: ["Reactjs", "Nodejs", "Expressjs", "Tailwind"],
      _id: "65b3d9c8d017f6b49c778ca7a",
      enabled: true
    },
    {
      liveurl: "#",
      githuburl: "https://github.com/satishnadipalli",
      title: "Youtube clone application",
      sequence: 14,
      image: {
        public_id: "1706285511679-xe7r9td",
        url: YoutubeClone
      },
      description: "As part of my development journey, I created a comprehensive YouTube clone that replicates many of the core features of the popular video-sharing platform. This project demonstrates my ability to build complex web applications with real-world functionality.The features like User Authentication and Management, Video Upload and Management, Video Streaming, Search and Filtering, Comments and Interactions, User Channels and Playlists, Subscriptions and Notifications, Responsive Design",
      techStack: ["JavaScript", "Expressjs"],
      _id: "65b3d9c8d017f6b49c778ca7fs",
      enabled: true
    },
    
    {
      liveurl: "#",
      githuburl: "https://github.com/satishnadipalli",
      title: "Chatting application",
      sequence: 14,
      image: {
        public_id: "1706285511679-xe7r9sft",
        url: chattingApp
      },
      description: "As part of my development portfolio, I created a feature-rich chatting application designed to provide seamless and efficient communication for users. This app demonstrates my ability to build real-time, interactive applications with a focus on user experience and functionality.",
      techStack: ["Nextjs", "Nodejs", "Reactjs", "MySQL"],
      _id: "65b3d9c8d017f6b49c778cas7",
      enabled: true
    },
    {
      liveurl: "#",
      githuburl: "https://github.com/satishnadipalli",
      title: "CRM Project for MHTECHIN Company",
      sequence: 14,
      image: {
        public_id: "1706285511679-xe7r9sdfsft",
        url: "https://i.imgur.com/JlwDpFC.png"
      },
      description: "As part of my development portfolio, I created a feature-rich chatting application designed to provide seamless and efficient communication for users. This app demonstrates my ability to build real-time, interactive applications with a focus on user experience and functionality.",
      techStack: ["Nextjs", "Nodejs", "Reactjs", "MySQL"],
      _id: "65b3d9c8d017f6b49c778cas7",
      enabled: true
    },
    {
      liveurl: "#",
      githuburl: "https://github.com/satishnadipalli",
      title: "A E-Learning Platform Rablo Online Edu-Streaming",
      sequence: 14,
      image: {
        public_id: "170628551s1679-xe7r9sdfsft",
        url: "/img/logo/RabloCompany.jpg"
      },
      description: "As part of my development portfolio, I created a feature-rich chatting application designed to provide seamless and efficient communication for users. This app demonstrates my ability to build real-time, interactive applications with a focus on user experience and functionality.",
      techStack: ["Nextjs", "Nodejs","Expressjs", "Reactjs", "OracleSQL"],
      _id: "65b3d9c8fd017f6b49c778cas7",
      enabled: true
    },
    {
      liveurl: "#",
      githuburl: "https://github.com/satishnadipalli",
      title: "MKTXS Company website ReDesigned- FreelanceProject",
      sequence: 14,
      image: {
        public_id: "170628551s1679-xe7r9sdfsft",
        url: "/img/logo/Frelancing.png"
      },
      description: "As part of my development portfolio, I created a feature-rich chatting application designed to provide seamless and efficient communication for users. This app demonstrates my ability to build real-time, interactive applications with a focus on user experience and functionality.",
      techStack: ["Nextjs", "Nodejs","Expressjs", "Reactjs", "OracleSQL"],
      _id: "65b3d9c8fd017f6b49c778cas7",
      enabled: true
    }
  ]
};

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const isotope = useRef();
  const [techStackFilter, setTechStackFilter] = useState("*");
  const [popup, setPopup] = useState(false);
  const [popupData, setPopupData] = useState();


  useEffect(()=>{
    Aos.init({duration:1000});
  },[])

  useEffect(() => {
    setData(
      data1?.projects
        ?.filter((item) => item.enabled)
        ?.sort((a, b) => a.sequence - b.sequence)
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    dataImage();
    portfolioHover();
    const allTechStacks = data?.flatMap((project) => project.techStack);
    const uniqueTechStacks = Array.from(
      new Set(allTechStacks.map((tech) => tech.replace(/\s/g, "")))
    );
    setTechStack(uniqueTechStacks);
  }, [data, techStackFilter]);

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      console.log("Filtering by:", techStackFilter);
      techStackFilter === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${techStackFilter}` });
    }
  }, [techStackFilter]);

  const handleTechStackFilterChange = (stack) => () => {
    console.log("Tech stack filter change:", stack);
    setTechStackFilter(stack);
  };

  const activeBtn = (value) => (value === techStackFilter ? "current" : "");

  // if (loading) {
  //   return <PreLoader />;
  // }

  return (
    <div className="dizme_tm_section" >
      <DetailsPopup
        open={popup}
        data={popupData}
        close={() => setPopup(false)}
      />
      <div className="dizme_tm_portfolio  -mt-28" id="portfolio">
        <div className="container">
          <div
            className="dizme_tm_main_title"
            data-align="center"
             
          >
            <span>Portfolio</span>
            <h3>Featured Projects</h3>
          </div>
          <div className="portfolio_filter -mt-10">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleTechStackFilterChange("*")}
                >
                  All
                </a>
              </li>
              {techStack?.map((stack, i) => (
                <li key={i}>
                  <a
                    className={`c-pointer ${activeBtn(stack)}`}
                    onClick={handleTechStackFilterChange(stack)}
                  >
                    {stack}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div
            className="portfolio_list wow fadeInUp"
            data-wow-duration="1s"
            data-aos="fade-up"
          >
            <ul className="gallery_zoom grid">
              {data &&
                data.map((item, i) => {
                  const classes = item?.techStack
                    .map((tech) => tech.replace(/\s/g, ""))
                    .join(" ");
                  
                  return (
                    <li
                      key={i}
                      className={`${classes} grid-item`}
                      onClick={() => {
                        setPopup(true);
                        setPopupData(item);
                      }}
                    >
                      <div className="inner" >
                        <div
                        className="entry dizme_tm_portfolio_animation_wrap min-h-[220px] max-h-[220px]"
                          data-title={item?.title}
                          data-category={item?.techStack}
                          style={{minHeight:"210px"}}
                        >
                          <img
                            className="min-h-[220px] max-h-[220px]"
                            src={item?.image?.url}
                            alt={item?.title}
                            style={{}}
                          />
                          <div
                            className="main"
                            data-img-url={item?.image?.url}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>{item?.title}</h3>
                          <span>{item?.techStack.join(", ")}</span>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div
          className="brush_1 wow zoomIn"
          data-wow-duration="1s"
        >
          <img
            src="./img/brushes/portfolio/1.png"
            alt="image"
          />
        </div>
        <div
          className="brush_2 wow fadeInRight"
          data-wow-duration="1s"
        >
          <img
            src="./img/brushes/portfolio/2.png"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
