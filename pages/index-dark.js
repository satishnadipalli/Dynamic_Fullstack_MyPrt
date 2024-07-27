import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
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
import { useRouter } from "next/router";
import Caffetti from "../src/components/Caffetti";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {

  const router = useRouter();

  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);




  return (
    <Layout dark>
      <Head>
        <title>Dizme | Home</title>
      </Head>
      
      <Home dark />
      {/* HERO */}
      {/* PROCESS */}
      <Process dark />
      {/* /PROCESS */}
      {/* ABOUT */}
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolio dark/>
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      <Skills dark />
      {/* /SKILLS */}
      {/* SERVICES */}
      <Service dark />
      {/* /SERVICES */}
      {/* TESTIMONIALS */}
      <Testimonial dark/>
      {/* /TESTIMONIALS */}
      {/* PARTNERS */}
      <Partners dark />
      {/* /PARTNERS */}
      {/* NEWS */}
      <News dark />
      <Newsletter dark/>
      <Contact dark/>
      
    </Layout>
  );
};
export default Index;
