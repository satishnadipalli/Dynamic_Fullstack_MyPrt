import parse from "html-react-parser";
import { useEffect, useState, useContext } from "react";
import UserContext from "../userContext/userContext";
import PreLoader from "../components/preloader";
import { Message } from "../../HeroIcons";
import Link from "next/link";
import Image from "next/image";

const social_handles = [
  {
    platform:"GitHub",
    imageUrl:"https://th.bing.com/th?id=OSK.06262f10189ebe54f3424af6f30d7d41&w=80&h=80&o=6&cb=B&pid=1.2",
    link:"https://github.com/satishnadipalli",
    id:1
  },
  {
    platform:"Twitter",
    imageUrl:"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718328750-d4jsq.webp",
    link:"",
    id:2
  },
  {
    platform:"Instagram",
    imageUrl:"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp",
    link:"https://www.instagram.com/_bitcode__/?hl=en",
    id:3
  },
  {
    platform:"Linkedin",
    imageUrl:"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp",
    link:"https://www.linkedin.com/in/satish-nadipalli/",
    id:4
  },
  {
    platform:"facebook",
    imageUrl:"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp",
    link:"",
    id:5
  }
];

const Home = ({ dark }) => {
  const data = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useEffect(() => {
    document.querySelectorAll('a.anchor').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div
          className="background"
          style={{ backgroundImage: `url(img/slider/${dark ? 2 : 1}.jpg)` }}
        />
        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 style={{fontSize:"18px"}} className="font-mono text-emerald-400">{`Hello, I'm`}</h3>
              </div>
              <div className=" text-4xl ">
                <h3>Satish Nadipalli</h3>
              </div>
              <div className="job">

              </div>
              <div className="text text-black font-mono">
                <p>
                An individual who is passionate about technological innovation and software development. My journey in the tech world is driven by a keen interest in coding, algorithm design, and staying up-to-date in the latest technological trends.
                </p>
                <p>My passion for technology goes beyond personal achievement, it's about leveraging it to solve real-world problems.</p>
              </div>
              <div className="items-center md:flex grid place-items-center ">
                <div className="dizme_tm_button">
                  <a className="anchor" href="#about">
                    <span>Contact</span>
                  </a>
                </div>
                <div className="flex gap-2 ml-3 md:mt-0 mt-8">
                  {
                    social_handles.map((item)=>{
                      return(
                        <div key={item.id} className="w-8 h-8 flex items-center justify-center">
                          <Link href={item.link}>
                            <img
                              src={item.imageUrl}
                              className="w-7 h-7 border-solid border-4 hover:border-emerald-600 rounded-2xl"
                            />
                          </Link>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className="image-container">
              <div className="mask-image">
                {/* <Image
                layout="fill"
                objectFit="cover" 
                  className="masked-image"
                  // src={"/img/logo/satishNadipalli.jpg"}
                  alt="image"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="dizme_tm_down hidden md:flex">
          <a className="anchor " href="#process">
            <svg
              width="26px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
              }}
            >
              <path
                id="wheel"
                d="M123.359,79.775l0,72.843"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
