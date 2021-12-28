import * as React from "react";
import { Text, VStack, Code, useColorModeValue, Flex } from "@chakra-ui/react";
import { ReactComponent as DiceOutlineDarkAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
import { ReactComponent as DiceOutlineLightAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";
import "../../styles/Home.css";
import CustomBox from "../shared/CustomBox";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutubeSquare,
  FaYoutube,
} from "react-icons/fa";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle";
import "swiper/swiper-bundle.esm.browser";
import { Link } from "react-router-dom";
import atkins from "../../images/Peter_Atkins.jpg";
import prevArrow from "../../images/prevArrow.svg";
import robos1 from "../../images/homepage_illustrations/ROBOS.png";
import robo1 from "../../images/homepage_illustrations/big.png";
import robo2 from "../../images/homepage_illustrations/small ribi.png";
import barish from "../../images/barish.jpg";
import John_hennessy from "../../images/John_hennessy.jpg";
import das_nobel from "../../images/das_nobel.jpeg";
import Raghuram_Rajan from "../../images/Raghuram_Rajan.jpg";
import Footer from "../shared/Footer";
import Hennessy from "../../images/Speaker/hennessy.jpg";
import Radhakrishnan from "../../images/Speaker/radhakrishnan.jpg";
import Robo from "../../images/Speaker/robothespian1.jpg";
import Soumya from "../../images/Speaker/soumya_swaminathan.jpg";
import Capture from "../../images/Speaker/Capture.jpg";
import Robert from "../../images/Speaker/robert.jpg";
import Event1 from "../../images/events_1.jpg";
import Event2 from "../../images/events_2.jpg";
import Event3 from "../../images/events_3.jpg";
import Event4 from "../../images/events_4.jpg";
import Workshop1 from "../../images/workshop_1.jpg";
import Workshop2 from "../../images/workshop_2.jpg";
import Workshop3 from "../../images/workshop_3.jpg";
// import codetochaos1 from "../../images/logo/static/codetochaos.svg";
import codetochaos1 from "../../images/logo/static/codetochaos2.svg";
import codetochaos2 from "../../images/logo/static/codetochaos2.svg";

import Dan from "../../images/night/Dan_img.jpg";
import Gloves from "../../images/night/Gloves02.jpg";
import Harmony from "../../images/night/Harmony-SonicSnares-2.jpg";
import Heimdall from "../../images/night/Heimdall1.jpg";
import Mirage from "../../images/night/Mirage.jpg";
import Nothwind from "../../images/night/Nothwind1.jpg";
import Vivek from "../../images/night/vivek patil.jpg";
import Reverb from "../../images/night/Reverb.jpg";
import Soda from "../../images/night/Comedy Night.jpeg";


interface Props {}

SwiperCore.use([Navigation, Pagination]);

const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );

  const plain = useColorModeValue("black", "white");
  const codetochoas = useColorModeValue(codetochaos1, codetochaos2);

  const [sideNavBar_marker, setSideNavBar_marker] = React.useState<number>(
    170 / 7
  );

  const update_sidenav_marker = (e) => {
    var screenWidthSpacing = (window.innerWidth - 150) / 6;

    if (
      e.target.scrollTop < window.innerHeight - 20 &&
      e.target.scrollTop >= 0
    ) {
      if (window.innerWidth > 600) {
        setSideNavBar_marker(170 / 7 + 0 * (170 / 7 + 30));
      } else {
        setSideNavBar_marker(screenWidthSpacing - 5);
      }
    } else if (
      e.target.scrollTop < 2 * window.innerHeight - 20 &&
      e.target.scrollTop >= window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(170 / 7 + 1 * (170 / 7 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 1 * (screenWidthSpacing + 30)
        );
    else if (
      e.target.scrollTop < 3 * window.innerHeight - 20 &&
      e.target.scrollTop >= 2 * window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(170 / 7 + 2 * (170 / 7 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 2 * (screenWidthSpacing + 30)
        );
    else if (
      e.target.scrollTop < 4 * window.innerHeight - 20 &&
      e.target.scrollTop >= 3 * window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(170 / 7 + 3 * (170 / 7 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 3 * (screenWidthSpacing + 30)
        );
    else if (
      e.target.scrollTop < 5 * window.innerHeight - 20 &&
      e.target.scrollTop >= 4 * window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(170 / 7 + 4 * (170 / 7 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 4 * (screenWidthSpacing + 30)
        );
    else if (
      e.target.scrollTop < 6 * window.innerHeight - 20 &&
      e.target.scrollTop >= 5 * window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(170 / 7 + 5 * (170 / 7 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 5 * (screenWidthSpacing + 30)
        );
  };

  const speaker_navigationPrevRef = React.useRef(null);
  const speaker_navigationNextRef = React.useRef(null);
  const speaker_paginationRef = React.useRef(null);
  const events_navigationPrevRef = React.useRef(null);
  const events_navigationNextRef = React.useRef(null);
  const events_paginationRef = React.useRef(null);

  const [scrollLeft, setScrollLeft] = React.useState({
    left: 0,
    right: 100,
  });

  return (
    <CustomBox>
      <div onScroll={update_sidenav_marker} className={`Home ${plain}`}>
        <div
          style={
            window.innerWidth > 600 ? { display: "flex" } : { display: "none" }
          }
          className={`Home_sideNavBar ${plain}`}
        >
          <span
            className="Home_sideNavBar_marker"
            style={
              window.innerWidth > 600
                ? {
                    top: sideNavBar_marker,
                  }
                : {
                    left: sideNavBar_marker,
                  }
            }
          ></span>
          <a href="#landing_page">
            <span>01</span>
          </a>
          <a href="#who_are_we">
            <span>02</span>
          </a>
          <a href="#workshop_events">
            <span>03</span>
          </a>
          <a href="#speakers">
            <span>04</span>
          </a>
          <a href="#pastshows">
            <span>05</span>
          </a>
          <a href="#testimonials">
            <span>06</span>
          </a>
        </div>
        <section
          id="landing_page"
          style={{
            backgroundPosition: `calc(100% + ${
              window.innerWidth < 800 ? 800 - window.innerWidth : 0
            }) 50%`,
          }}
          className={`Home_landingPage ${plain}`}
        >
          <div className="ContentBox">
            <h1>SHAASTRA 2022</h1>
            <div className="Theme">
              <h3 id="theme_name">CODE TO CHAOS</h3>
              <p id="themeDate">
                13th <span id="dash"></span> 16th January
              </p>
            </div>
            <h3 id="salesLink">
              Early Bird Special Offer
              <br />
              <a
                href="https://www.shaastra.org/events/workshops"
                style={{ color: "#FFFF00", fontWeight: "bold" }}
              >
                WORKSHOPS
              </a>
              &nbsp;&&nbsp;
              <a
                href="https://sales.shaastra.org/"
                target="_blank"
                style={{ color: "#FFB6C1", fontWeight: "bold" }}
              >
                SALES
              </a>
              <br />
              Till 30th December
            </h3>
            {/* <h3 id="salesLink" style={{ marginTop: "5px" }}>
              for&nbsp;
            </h3> */}
            {localStorage.getItem("role") !== "Admin" &&
              localStorage.getItem("role") !== "User" && (
                <Link to="/signup">Register</Link>
              )}
          </div>
          <div className="imgBox">
            <img src={robos1} alt="" />
          </div>
          {window.innerWidth > 600 ? (
            <span className="Home_scroll_btn">
              <span></span>
            </span>
          ) : (
            <></>
          )}

          <div className="Follow">
            <p>FOLLOW US</p>
            <span></span>
            <a
              target="_blank"
              href="https://www.instagram.com/shaastra_iitm/?hl=en"
            >
              <FaInstagram />
            </a>
            <span></span>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/shaastra-iit-madras/?originalSubdomain=in"
            >
              <FaLinkedin />
            </a>
            <span></span>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCgY2ugmW-BV2nMRFu-0qPZA"
            >
              <FaYoutubeSquare />
            </a>
            {window.innerWidth > 600 ? <span></span> : <></>}
          </div>
        </section>
        <section id="who_are_we" className="Home_whoAreWe">
          <img id="who_are_we_robo1" src={robo1} alt="" />
          <img id="who_are_we_robo2" src={robo2} alt="" />
          <h1 id="heading">Who Are We?</h1>
          <p id="text">
            Shaastra is the annual technical festival of the Indian Institute of
            Technology Madras (IITM), Chennai, India.
            <br />
            <br />
            The Sanskrit word ‘Shaastra’ means science and the festival
            accordingly consists of various engineering, science, and technology
            competitions, summits, lectures, video conferences, exhibitions,
            demonstrations, and workshops. The festival is traditionally held
            over four days and four nights during the first week of January. It
            has so far seen twenty-one editions, having started in its current
            avatar in the year 2000.
            <br />
            <br />
            Shaastra is entirely student-managed and is the first such event in
            the world to be ISO 9001:2015 certified.
          </p>
        </section>
        <section
          id="workshop_events"
          className={`Home_WorkshopsEvents ${plain}`}
        >
          <h1>Past Workshops & Events</h1>
          <div className="speaker_swiper_container">
            <div className="swiper-prev-con" ref={events_navigationPrevRef}>
              <img src={prevArrow} alt="" />
            </div>
            <Swiper
              spaceBetween={window.innerWidth > 600 ? 50 : 0}
              navigation={{
                prevEl: events_navigationPrevRef.current,
                nextEl: events_navigationNextRef.current,
              }}
              loop={true}
              pagination={
                window.innerWidth < 600
                  ? {
                      el: events_paginationRef.current,
                      clickable: true,
                    }
                  : false
              }
              slidesPerView={window.innerWidth > 600 ? "auto" : 1}
            >
              <SwiperSlide>
                <img src={Workshop1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Workshop2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Workshop3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event4} alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="swiper-next-con" ref={events_navigationNextRef}>
              <img src={prevArrow} alt="" />
            </div>
            <div className="swiper-pagination" ref={events_paginationRef}></div>
          </div>
          {window.innerHeight > 300 ? (
            <div className="swiperControllers">
              {/* <div className="swiper-prev-con" ref={events_navigationPrevRef}>
                <img src={prevArrow} alt="" />
              </div> */}
              {/* <div
                className="swiper-pagination"
                ref={events_paginationRef}
              ></div> */}
              {/* <div className="swiper-next-con" ref={events_navigationNextRef}>
                <img src={prevArrow} alt="" />
              </div> */}
            </div>
          ) : (
            "Swipe right ->"
          )}
        </section>
        <section id="speakers" className={`Home_Speakers ${plain}`}>
          <h1 className={`${plain}`}>Previous Speakers</h1>
          <div className={`speaker_swiper_container`}>
            <div className="swiper-prev-con" ref={speaker_navigationPrevRef}>
              <img src={prevArrow} alt="" />
            </div>
            <Swiper
              spaceBetween={50}
              navigation={{
                prevEl: speaker_navigationPrevRef.current,
                nextEl: speaker_navigationNextRef.current,
              }}
              loop={true}
              pagination={
                window.innerWidth < 600
                  ? {
                      el: speaker_paginationRef.current,
                      clickable: true,
                    }
                  : false
              }
              slidesPerView={"auto"}
            >
              <SwiperSlide>
                <img src={atkins} alt="" />
                <div className="contentBox">
                  <div className="left">
                    <h3>Peter Atkins</h3>
                    <p>FRSC, Prolific Author of popular chemistry textbooks</p>
                  </div>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=0G_-1SGhYTA&list=PLT4Wldw_lvk2vSGkMDcXazP3iJ3Wlvo4X&index=3"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Hennessy} alt="" />
                <div className="contentBox">
                  <div className="left">
                    <h3>Dr John Hennessy</h3>
                    <p>
                      Chairman of Alphabet Inc., Eminent Computer Scientist,
                      Turing Award, 2017
                    </p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=_ebUDIsbqkc&list=PLT4Wldw_lvk2vSGkMDcXazP3iJ3Wlvo4X&index=2"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Radhakrishnan} alt="" />
                <div className="contentBox">
                  <div className="left">
                    <h3>Dr K. Radhakrishnan</h3>
                    <p>Former Chairman, ISRO</p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=Wv_sea0tMrc&list=PLT4Wldw_lvk2vSGkMDcXazP3iJ3Wlvo4X"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Robo} alt="" />
                <div className="contentBox">
                  <div className="left">
                    <h3>RoboThespian and Cleo</h3>
                    <p>World’s First Acting Humanoid Robots</p>
                  </div>
                  <a href="https://youtu.be/kLhGfEybZi4" target="_blank">
                    <FaYoutube />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Soumya} alt="" />
                <div className="contentBox">
                  <div className="left">
                    <h3>Dr Soumya Swaminathan,</h3>
                    <p>Chief Scientist, World Health Organisation (WHO)</p>
                  </div>
                  <a href="https://youtu.be/2-_MZbCOP88" target="_blank">
                    <FaYoutube />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Capture} alt="" />
                <div className="contentBox">
                  <div className="left">
                    <h3>Dr Joachim Frank</h3>
                    <p>Nobel Prize in Chemistry, 2017</p>
                  </div>
                  <a href="https://youtu.be/cYs-FEUSNFw" target="_blank">
                    <FaYoutube />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Robert} alt="" />
                <div className="contentBox">
                  <div className="left">
                    <h3>Mr Robert C. Martin</h3>
                    <p>American Software Engineer, Popular Author</p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=FlbDg_iBCkw&list=PLT4Wldw_lvk2vSGkMDcXazP3iJ3Wlvo4X&index=7"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-next-con" ref={speaker_navigationNextRef}>
              <img src={prevArrow} alt="" />
            </div>
            <div
              className="swiper-pagination"
              ref={speaker_paginationRef}
            ></div>
          </div>
        </section>
        <section id="pastshows" className={`Home_Speakers ${plain}`}>
          <h1 className={`${plain}`}>Previous Shows</h1>
          <div className={`speaker_swiper_container`}>
            <div className="swiper-prev-con" ref={speaker_navigationPrevRef}>
              <img src={prevArrow} alt="" />
            </div>
            <Swiper
              spaceBetween={50}
              navigation={{
                prevEl: speaker_navigationPrevRef.current,
                nextEl: speaker_navigationNextRef.current,
              }}
              loop={true}
              pagination={
                window.innerWidth < 600
                  ? {
                      el: speaker_paginationRef.current,
                      clickable: true,
                    }
                  : false
              }
              slidesPerView={"auto"}
            >
              <SwiperSlide>
                <img src={Vivek} alt="" style={{ objectFit: "cover" }} />
                <div className="contentBox">
                  <div className="left">
                    <h3>Vivek Patil</h3>
                    <p>Sand Art Show</p>
                    <p>Shaastra 2019</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Mirage} alt="" style={{ objectFit: "cover" }} />
                <div className="contentBox">
                  <div className="left">
                    <h3>Vilas Nayak</h3>
                    <p>
                      MIRAGE Laser Show
                    </p>
                    <p>Shaastra 2019</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Heimdall} alt="" style={{ objectFit: "cover" }} />
                <div className="contentBox">
                  <div className="left">
                    <h3>Heimdall</h3>
                    <p>LASER HARP Live Performance </p>
                    <p>Shaastra 2020</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Dan} alt="" style={{ objectFit: "cover" }} />
                <div className="contentBox">
                  <div className="left">
                    <h3>Dan Rhodes</h3>
                    <p>Virtual Magic Show</p>
                    <p>Shaastra Juniors 2020</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Harmony}
                  alt=""
                  style={{ objectFit: "contain", background: "#000" }}
                />
                <div className="contentBox">
                  <div className="left">
                    <h3>Sonic Snares</h3>
                    <p>HARMONY</p>
                    <p>Shaastra 2021</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Soda} alt="" style={{ objectFit: "cover" }} />
                <div className="contentBox">
                  <div className="left">
                    <h3>SODA</h3>
                    <p>CHAOS</p>
                    <p>Shaastra 2021</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-next-con" ref={speaker_navigationNextRef}>
              <img src={prevArrow} alt="" />
            </div>
            <div
              className="swiper-pagination"
              ref={speaker_paginationRef}
            ></div>
          </div>
          <Link to="/shows">SEE MORE</Link>
        </section>
        <section id="testimonials" className={`Home_Testimonials ${plain}`}>
          <h1>Testimonials</h1>
          <div
            className={`testimonial_card_container ${plain}`}
            onScroll={(e: any) => {
              window.innerWidth < 600 &&
                setScrollLeft({
                  left: e.target.scrollLeft,
                  right: 990 - e.target.scrollLeft,
                });
            }}
          >
            <div className={`testimonialWrapper ${plain}`}>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    It was a great privilege and honor to participate in
                    Shaastra 2021. Science has no borders and sharing the
                    knowledge of scientific advances is a joy, especially to a
                    talented and appreciative audience, like for Shaastra.
                  </p>
                  <div className="profile">
                    <div className="imgBox">
                      <img src={barish} alt="" />
                    </div>
                    <div className="contentBox">
                      <h3>Dr. Barry Barish</h3>
                      <p>Noble Prize in Physics, 2017</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    Thanks to the team at Shaastra 2021 for organizing a
                    terrific event. I enjoyed the interview and a special thanks
                    to the interviewer who did such an excellent job preparing.
                    Thanks to the IIT madras students who asked excellent
                    questions.
                  </p>
                  <div className="profile">
                    <div className="imgBox">
                      <img src={John_hennessy} alt="" />
                    </div>
                    <div className="contentBox">
                      <h3>Dr. John Hennessy</h3>
                      <p>Chairman, Alphabet Inc., Turing Awardee</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    It was an honor to connect with students from the IIT
                    campuses especially from Indian Institute of Technology,
                    Madras. Thank you for hosting me. Our Maverick Quantum AI
                    team is committed to hiring 500 IITians in the next 3 years.
                  </p>
                  <div className="profile">
                    <div className="imgBox">
                      <img src={das_nobel} alt="" />
                    </div>
                    <div className="contentBox">
                      <h3>Das Nobel</h3>
                      <p>Founder & CEO at MTX Group</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    I spoke to the students at IIT Madras on a range of issues.
                    I was impessed with how prepared they were. This is so
                    refreshingly different from my student days. We are making
                    progress !
                  </p>
                  <div className="profile">
                    <div className="imgBox">
                      <img src={Raghuram_Rajan} alt="" />
                    </div>
                    <div className="contentBox">
                      <h3>Raghuram Rajan</h3>
                      <p>Former Governor of the Reserve Bank of India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {window.innerWidth < 600 ? (
            <>
              <span
                id="scrollLeft"
                style={scrollLeft.left < 50 ? { opacity: 1 } : { opacity: 0 }}
              >
                {scrollLeft.left < 50 ? "Swipe right ->" : ""}
              </span>
              <span
                id="scrollLeft"
                style={scrollLeft.right < 50 ? { opacity: 1 } : { opacity: 0 }}
              >
                {scrollLeft.right < 50 ? "<- Swipe left" : ""}
              </span>
            </>
          ) : (
            <></>
          )}
        </section>
        <Footer
          designed={[
            { name: "Rohit", mail: "cs19b038@smail.iitm.ac.in" },
            { name: "Krithikaa", mail: "be20b020@smail.iitm.ac.in" },
            { name: "Yogesh", mail: "bs19b034@smail.iitm.ac.in" },
          ]}
          curr_page="Home"
        />
      </div>
    </CustomBox>
  );
};

export default Home;
