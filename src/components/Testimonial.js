import { useEffect, useState, useContext } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fatchData } from "../utilits";
import UserContext from "../userContext/userContext";
import Image from "next/image";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

const data = {
  "testimonials": [
            {
                "image": {
                    "public_id": "portfolio3/1710357726628-c4dr18.png",
                    "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357726628-c4dr18.png"
                },
                "name": "Samantha Wu",
                "review": "I had the pleasure of working closely with John on a challenging project. He is a highly skilled developer who consistently delivered excellent results. His ability to understand complex requirements and implement efficient solutions was truly impressive. I would highly recommend him to any organization looking for a talented developer.",
                "position": "Software Engineer",
                "enabled": true,
                "_id": "65f1fcdf0556c3f887e9d74c"
            },
            {
                "image": {
                    "public_id": "portfolio3/1710357705657-aimydg.png",
                    "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357705657-aimydg.png"
                },
                "name": "David Rodriguez",
                "review": "Throughout our project, John demonstrated exceptional technical skills and a strong work ethic. He consistently met deadlines and produced high-quality code that exceeded our expectations. His proactive approach to problem-solving and effective communication made him a valuable member of our team\n",
                "position": "Project Manager",
                "enabled": true,
                "_id": "65f1fcca0556c3f887e9d6e8"
            },
            {
                "image": {
                    "public_id": "portfolio3/1710357683739-tqeav.png",
                    "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357683739-tqeav.png"
                },
                "name": " Emily Chen",
                "review": "I had the pleasure of collaborating with John on a complex web application project. His ability to translate design concepts into functional, user-friendly features was impressive. John consistently delivered high-quality work and was always open to feedback. I look forward to working with him again in the future.\n\n",
                "position": " Emily Chen",
                "enabled": true,
                "_id": "65f1fcb30556c3f887e9d662"
            },
            {
                "image": {
                    "public_id": "portfolio3/1710357647030-pi5cis.png",
                    "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357647030-pi5cis.png"
                },
                "name": " Michael Lee",
                "review": "John is a skilled developer with a keen eye for detail. He played a crucial role in our team, consistently producing clean, efficient code. His collaborative nature and willingness to take on new challenges make him an invaluable asset to any project.\"",
                "position": " Lead Developer",
                "enabled": true,
                "_id": "65f1fc8f0556c3f887e9d4e5"
            },
            {
                "image": {
                    "public_id": "portfolio3/1710357534893-2s9b5d.png",
                    "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357534893-2s9b5d.png"
                },
                "name": "Sarah Johnson",
                "review": "Working with John was an absolute delight. Their professionalism and technical prowess were evident from day one. He consistently delivered top-notch code and went above and beyond to ensure the success of our project. I highly recommend him for any development endeavor",
                "position": " Product Manager",
                "enabled": true,
                "_id": "65f1fc1f0556c3f887e9d31d"
            }
        ]
}

const Testimonial = () => {
  // const data = useContext(UserContext);
//   useEffect(() => {
//     setData(data?.testimonials.filter(item=>item.enabled)); //filtering based on enabled property from the API.
// }, [data1]);
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
  };

  const convertToWord = (number) => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return ones[number];
  };
  
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_testimonials">
        <div className="dizme_tm_main_title" data-align="center">
          <span>Testimonials</span>
          <h3>What My Clients Say</h3>
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </p>
        </div>
        <div className="list_wrapper">
          <div className="total">
            <div className="in">
              <Swiper {...props} className="">
                {data &&
                  data?.testimonials.filter(item=>item.enabled).map((data, i) => (
                    <SwiperSlide key={i}>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          width="200px"
                          height="200px"
                          viewBox="796 698 200 200"
                          enableBackground="new 796 698 200 200"
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z" />
                            <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z" />
                          </g>
                        </svg>
                      </div>
                      <div className="text">
                        <p>{data.review}</p>
                      </div>
                      <div className="short">
                        <div className="image">
                          <Image layout="fill"
      objectFit="cover"  style={{borderRadius: "100%"}} alt="image" src={data.image.url} />
                          <div className="main" data-img-url={data.image.url} />
                        </div>
                        <div className="detail">
                          <h3>{data.name}</h3>
                          <span>{data.position}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="owl-dots"></div>
            </div>
            <div className="left_details">
            {
              data &&
                  data?.testimonials?.filter(item=>item.enabled).map((data, i) => (
                    <div key={i}
                      className={`det_image ${convertToWord(i)} wow fadeIn`}
                      data-wow-duration="1s"
                      data-img-url={data?.image?.url}
                      
                    />
                    
                  ))
                  
            }
              <span className="circle green animPulse" />
              <span className="circle yellow animPulse" />
              <span className="circle border animPulse" />
            </div>
            <div className="right_details">
              {
                data &&
                    data?.testimonials?.filter(item=>item.enabled).map((data, i) => (
                      <div key={i}
                        className={`det_image ${convertToWord(i)} wow fadeIn`}
                        data-wow-duration="1s"
                        data-img-url={data?.image?.url}
                        
                      />
                      
                    ))
                    
              }
              <span className="circle yellow animPulse" />
              <span className="circle purple animPulse" />
              <span className="circle border animPulse" />
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
          <Image layout="fill"
      objectFit="cover"  src="img/brushes/testimonials/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
