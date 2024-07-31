import { Image, ImageIcon } from 'lucide-react';
import { FC, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const TechCard = ({ title, classaName, tech,dark,delay,right }) => {

  useEffect(()=>{
    AOS.init({
      duration: 500, // Increase duration for smoother animation
      easing: 'ease-in-out', // Use an easing function that provides smoother transitions
    });
},[]); 


  return (
    <div data-aos ={`${right? "fade" : "fade"}`} data-aos-delay={`${delay}0`} className="flex-1  flex flex-col gap-4 bg-gray-700 p-4 py-8 shadow-lg md:w-[80%] min-h-48 text-">
      <div className="text-primary font-medium text-lg  tracking-wider text-white">
        {title}
      </div>
      <div className="flex flex-wrap gap-2 gap-x-2 ">
        {tech.map((item, i) => (
          <div
            key={i}
            style={{fontWeight:"600"}}
            className={`module-border-wrap flex items-center justify-center border-2  font-thin text-xs overflow-hidden ${dark ? "text-black" : "bg-white text-black relative mx-auto max-w-md  p-0.4 "}} ${i%2 ==0 ? "module" : ""} ${i%3==0 ? "module-border-wrap" : ""}`}
          > 
          <div className={` module p-0.4 font-thin rounded-sm  text-xs ${dark ? "text-black" : "text-black"} bg-white p-1  px-2 `}>
          {item}
    </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
