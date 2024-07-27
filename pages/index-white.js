import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout";
import UserContext from "../src/userContext/userContext";
import {useContext, useEffect} from 'react';
import CopyRight from "../src/components/CopyRight";


const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  const data = useContext(UserContext);

  return (
    <Layout>
      <Head>
        <title>Dizme | Home</title>
      </Head>
      <Home />
      {/* HERO */}
      {/* PROCESS */}
      <Process />
      {/* /PROCESS */}
      {/* ABOUT */}
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      {
        data?.projects[0] &&
      <Portfolio />
      }
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      <Skills />
      {/* /SKILLS */}
      {/* SERVICES */}
      <Service />
      {/* /SERVICES */}
      {/* TESTIMONIALS */}
      <Testimonial />
      {/* /TESTIMONIALS */}
      {/* PARTNERS */}
      <Partners />
      {/* /PARTNERS */}
      {/* NEWS */}
      <News />
      <Newsletter />
      <Contact />
    </Layout>
  );
};
export default Index;




// const CopyRight = () => {
//   return (
//     <div className="w-full h-20 flex justify-around items-center bg-blend-luminosity  bottom-0">
//       <div className="" data-wow-duration="1s">
//         <p>
//           Developed with love by{" "}
//             satishNadipalli
//           {" "}
//           © 2023
//         </p>
//       </div>
//       <div className="right wow fadeInRight" data-wow-duration="1s">
//         <ul>
//           Terms and Conditons {"   "} PrivacyPolicy
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default CopyRight;
