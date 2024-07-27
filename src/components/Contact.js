import React, { useEffect, useState, useContext, useRef } from "react";
import UserContext from "../userContext/userContext";
import Preloader from "../components/preloader";
import Confetti from 'react-confetti';

const Contact = () => {
  const [feedBack, setFeedBack] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    subject: "",
    message: ""
  });

  const [iisLoading, setiIsLoading] = useState(false);

  const handleFeedBack = (e) => {
    const { name, value } = e.target;
    setFeedBack((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setiIsLoading(true);
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedBack),
      });

      if (response.ok) {
        setTimeout(() => {
          setiIsLoading(false);
        }, 2000);
      } else {
        setiIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setiIsLoading(false);
    }
  };

  // if (isLoading) {
  //   return <Preloader />;
  // }

  console.log(iisLoading);
  return (
    <div className="dizme_tm_section bg-red-700">
      <div className="dizme_tm_contact" id="contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h3>I Want To Hear From You</h3>
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              { (
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon orangeBackground">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="short">
                        <h3>Address</h3>
                        <span>Visakhapatnam, AndhraPradesh, India</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="#">satishnadipalli1@gmail.com</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>+91 7993724192</span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          name="userName"
                          onChange={handleFeedBack}
                          value={feedBack.userName}
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                          name="userEmail"
                          onChange={handleFeedBack}
                          value={feedBack.userEmail}
                        />
                      </li>
                      <li>
                        <input
                          id="phone"
                          type="number"
                          placeholder="Your Phone"
                          name="userPhone"
                          onChange={handleFeedBack}
                          value={feedBack.userPhone}
                        />
                      </li>
                      <li>
                        <input
                          id="subject"
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          onChange={handleFeedBack}
                          value={feedBack.subject}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Write your message here"
                      name="message"
                      onChange={handleFeedBack}
                      value={feedBack.message}
                    />
                  </div>
                  <button type="submit" className="dizme_tm_button">
                    <span>Submit Now</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
              <img src="img/brushes/contact/2.png" alt="image" />
            </div>
          </div>
          <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  height={375}
                  style={{ width: "100%" }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                />
                <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                <br />
              </div>
            </div>
            {/* Get your API here https://www.embedgooglemap.net */}
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/contact/1.png" alt="image" />
        </div>
      </div>
      {iisLoading && <Confetti />}
    </div>
  );
};

export default Contact;
