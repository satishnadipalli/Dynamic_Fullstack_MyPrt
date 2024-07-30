import { useEffect, useState, useContext } from "react";
import { aTagClick} from "../utilits";
import BlogPopUp from "./popup/BlogPopUp";
import UserContext from "../userContext/userContext";
import Preloader from "../components/preloader";
import Image from "next/image";
const  mhtechin = "./img/logo/mhtechin.jpeg"
const rablo = "./img/logo/Rablo.jpeg"
const mkhxts = "./img/logo/mktxs.jpeg"
import AOS from "aos";
import "aos/dist/aos.css";


const sortedExperience = [
  { 
    id:1,
    company_name: "MKHXTS IT Consultancy Services",
    totalExp:6,
    summary: "A Marketing Agency founded in 2003 which worked as a Fullstack developer, Develop",
    stack:["React.Js","Next.Js","Node.Js","Express.Js","MySQL","React-Native"],
    summary: "Worked in a team of full-stack developers to create an edustreaming application, focusing on advanced features and seamless user experience.",
    summary2:"Worked in a team of full-stack developers to create an edustreaming application, focusing on advanced features and seamless user experience.",
    sequence: 2,
    image:mkhxts,
    startDate: "July, 2024",
    Type:"F",
    endDate: "Dev, 2024",
    enabled: true,
    jobLocation: "Remote",
    jobTitle: "App Developer",
    icon: {
      public_id: "1706289470834-siro84",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706289470834-siro84"
    }
  },
  {
    id:2,
    company_name: "Rablo Company",
    image:rablo,
    totalExp:4,
    summary: "Worked in a team of full-stack developers to create an edustreaming application, focusing on advanced features and seamless user experience.",
    summary2:"Worked in a team of full-stack developers to create an edustreaming application, focusing on advanced features and seamless user experience.",
    sequence: 1,
    Type:"I",
    startDate: "May,2024",
    endDate: "Aug,2024",
    stack:["React.Js","Next.Js","Node.Js","Express.Js","MySQL","React-Native"],
    enabled: true,
    jobLocation: "Remote",
    jobTitle: "Full-stack Developer",
    icon: {
      public_id: "1706289470834-siro83",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706289470834-siro83"
    }
  },
  {
    id:4,
    company_name: "MHTECHIN Pvt-Ltd",
    summary: "Worked in a team of full-stack developers to create an edustreaming application, focusing on advanced features and seamless user experience.",
    summary2:"Worked in a team of full-stack developers to create an edustreaming application, focusing on advanced features and seamless user experience.",
    sequence: 2,
    totalExp:8,
    Type:"I",
    image:mhtechin,
    startDate: "Oct,2023",
    endDate: "May,2024",
    stack:["React.Js","Next.Js","Node.Js","Express.Js","MySQL","React-Native"],
    enabled: true,
    jobLocation: "Remote",
    jobTitle: "Full-stack Developer and App Developer",
    icon: {
      public_id: "1706289470834-siro84",
      url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706289470834-siro84"
    }
  },
];



const News = ({dark}) => {

  const [popupData, setPopupData] = useState(null);
  const [popup, setPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('Work');
  // const [timelineData, setTimelineData] = useState({ education: education, work: work});
  const [loading, setLoading] = useState(false);
 
  useEffect(()=>{
    AOS.init({duration:500,easing: 'linear',});
  },[])

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dizme_tm_section" id="blog">
      <div className="dizme_tm_news">
        <div className="container">
          <div className="news_list md:flex ">
            <div>
              <span className="text-3xl font-medium gradient-text">Professional <span className="md:block gradient-text-two">Experiences</span></span>
              <p className={`md:mb-0 mb-24 mt-6 ${dark ? "text-gray-400" : "text-gray-700"}`}>Always open to teaming up and growing together, because let's face it, I can't reach the top shelf on my own.</p>
            </div>
            
            <div className="grid gap-2">
              {
                sortedExperience.map((exp)=>{
                  return(
                    <div key={exp.id} className="flex h-full " data-aos="fade">
                      <div className="grid h-full">
                        <div className="h-full w-16  flex justify-center flex-col items-center ">
                          <div className="w-10 h-10  rounded-3xl  border-2 border-solid border-gray-600">
                            <img
                              src={exp?.image}
                              className="rounded-[50%] w-9 h-9 p-0.5"
                              alt="No image found"
                              
                            />
                          </div>
                          <div style={{width:"1px"}} className={`h-full mt-2 ${dark ? "bg-yellow-500" :"bg-slate-400" }`}></div>
                        </div>
                      </div>
                      <div className="pl-3 mb-8 ">
                        <p className={` hover:text-emerald-400 ${dark ? "text-gray-400" :"text-green-950"}`}>@ {exp.company_name}</p>
                        <p className={`p-2  ${dark ? "text-white" : "text-black font-semibold"}`}>{exp.jobTitle} - <span className="text-sm text-gray-500">{exp.Type == "F" ? "Freelance Contract" : "Internship"}</span></p>
                        <p className={`p-2 ${dark ? " text-gray-300" : "text-gray-600"}`}>{exp.startDate} • {exp.endDate} • ({exp.totalExp} months)</p>
                        <p className={`p-2 ${dark ? " text-gray-300" : "text-gray-600"}`}>• {exp.summary}</p>
                        <p className={`p-2 ${dark ? " text-gray-300" : "text-gray-600"}`}>• {exp.summary2}.</p>
                        <h3 className="mt-5">Skills</h3>
                        <div className="md:w-1/2  flex flex-wrap gap-3 mt-2 pb-9">
                          {
                            exp?.stack?.map((tech,i)=>{
                              return(
                                <div key={tech} data-aos="zoom-in" data-aos-duration="200" data-aos-delay={`${i+3}00`}  className={`  text-sm py-1 px-3 rounded-lg whitespace-nowrap ${dark ? "text-emerald-400 bg-emerald-900/80" : "text-green-800 bg-lime-100"}`}>{tech}</div>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="brush_1 wow zoomIn mt-32" data-wow-duration="1s">
          <img src="./img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="./img/brushes/news/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default News;

     