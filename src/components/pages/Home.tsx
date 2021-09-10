import * as React from "react";
import { Text, VStack, Code, useColorModeValue, Flex } from "@chakra-ui/react";
import { ReactComponent as DiceOutlineDarkAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
import { ReactComponent as DiceOutlineLightAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";
import "../../styles/Home.css";
import CustomBox from "../shared/CustomBox";
import { FaLinkedin, FaInstagram, FaYoutubeSquare } from "react-icons/fa";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle";
import "swiper/swiper-bundle.esm.browser";
import { Link } from "react-router-dom";
import atkins from "../../images/Peter_Atkins.jpg";
import shaastra_juniors from "../../images/shaastra_juniors.png";
import prevArrow from "../../images/prevArrow.svg";
import robos from "../../images/homepage_illustrations/robo.png";
import robo1 from "../../images/homepage_illustrations/big_robo_without_black_circle.png";
import robo2 from "../../images/homepage_illustrations/small_robo_without_black.png";
import barish from "../../images/barish.jpg";
import John_hennessy from "../../images/John_hennessy.jpg";
import das_nobel from "../../images/das_nobel.jpeg";
import Raghuram_Rajan from "../../images/Raghuram_Rajan.jpg";
import Footer from "../shared/Footer";

interface Props {}

SwiperCore.use([Navigation, Pagination]);

const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );
  // const color = useColorModeValue("secondary", "link")
  const plain = useColorModeValue("black", "white");

  const [sideNavBar_marker, setSideNavBar_marker] = React.useState<number>(
    window.innerWidth > 600 ? 200 / 6 : (window.innerWidth - 150) / 6 - 5
  );

  const update_sidenav_marker = (e) => {
    var screenWidthSpacing = (window.innerWidth - 150) / 6;

    if (
      e.target.scrollTop < window.innerHeight - 20 &&
      e.target.scrollTop >= 0
    ) {
      console.log(window.innerWidth);
      if (window.innerWidth > 600) {
        console.log("600+");
        setSideNavBar_marker(200 / 6 + 0 * (200 / 6 + 30));
      } else {
        console.log("600-");
        setSideNavBar_marker(screenWidthSpacing - 5);
      }
    } else if (
      e.target.scrollTop < 2 * window.innerHeight - 20 &&
      e.target.scrollTop >= window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(200 / 6 + 1 * (200 / 6 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 1 * (screenWidthSpacing + 30)
        );
    else if (
      e.target.scrollTop < 3 * window.innerHeight - 20 &&
      e.target.scrollTop >= 2 * window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(200 / 6 + 2 * (200 / 6 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 2 * (screenWidthSpacing + 30)
        );
    else if (
      e.target.scrollTop < 4 * window.innerHeight - 20 &&
      e.target.scrollTop >= 3 * window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(200 / 6 + 3 * (200 / 6 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 3 * (screenWidthSpacing + 30)
        );
    else if (
      e.target.scrollTop < 5 * window.innerHeight - 20 &&
      e.target.scrollTop >= 4 * window.innerHeight - 20
    )
      if (window.innerWidth > 600)
        setSideNavBar_marker(200 / 6 + 4 * (200 / 6 + 30));
      else
        setSideNavBar_marker(
          screenWidthSpacing - 5 + 4 * (screenWidthSpacing + 30)
        );
  };

  const speaker_navigationPrevRef = React.useRef(null);
  const speaker_navigationNextRef = React.useRef(null);
  const speaker_paginationRef = React.useRef(null);
  const events_navigationPrevRef = React.useRef(null);
  const events_navigationNextRef = React.useRef(null);
  const events_paginationRef = React.useRef(null);

  return (
    <CustomBox>
      <div onScroll={update_sidenav_marker} className={`Home ${plain}`}>
        <div className={`Home_sideNavBar ${plain}`}>
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
          <a href="#testimonials">
            <span>05</span>
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
            {window.innerWidth < 800 ? (
              <></>
            ) : (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
                esse? Ratione nobis dignissimos veniam neque doloremque
                perspiciatis sunt, nostrum aliquam, dolor odit amet tempora
                repellendus, corporis nemo vitae deleniti iure.
              </p>
            )}
          </div>
          <div className="imgBox">
            <img src={robos} alt="" />
            {/* <div className="robo2">
              <img src={robo2} alt="" />
            </div>
            <div className="robo1">
              <img src={robo1} alt="" />
            </div> */}
          </div>
          <span className="Home_scroll_btn">
            <span></span>
          </span>

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
            <span></span>
          </div>
        </section>
        <section id="who_are_we" className="Home_whoAreWe">
          <img id="who_are_we_robo1" src={robo1} alt="" />
          <img id="who_are_we_robo2" src={robo2} alt="" />
          <h1 id="heading">WHO ARE WE?</h1>
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
          <h1>WORKSHOP & EVENTS</h1>
          <div className="speaker_swiper_container">
            <Swiper
              spaceBetween={50}
              navigation={{
                prevEl: events_navigationPrevRef.current,
                nextEl: events_navigationNextRef.current,
              }}
              loop={true}
              pagination={{ el: events_paginationRef.current, clickable: true }}
              slidesPerView={window.innerWidth > 600 ? "auto" : 1}
            >
              <SwiperSlide>
                <img src={shaastra_juniors} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloribus voluptatum ipsam, velit aperiam similique,
                    recusandae impedit quo nemo iste harum dolorum molestias ea
                    veniam sed reprehenderit quisquam autem at sit.
                  </p>
                  <Link to="/">SEE MORE</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={shaastra_juniors} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloribus voluptatum ipsam, velit aperiam similique,
                    recusandae impedit quo nemo iste harum dolorum molestias ea
                    veniam sed reprehenderit quisquam autem at sit.
                  </p>
                  <Link to="/">SEE MORE</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={shaastra_juniors} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloribus voluptatum ipsam, velit aperiam similique,
                    recusandae impedit quo nemo iste harum dolorum molestias ea
                    veniam sed reprehenderit quisquam autem at sit.
                  </p>
                  <Link to="/">SEE MORE</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={shaastra_juniors} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloribus voluptatum ipsam, velit aperiam similique,
                    recusandae impedit quo nemo iste harum dolorum molestias ea
                    veniam sed reprehenderit quisquam autem at sit.
                  </p>
                  <Link to="/">SEE MORE</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={shaastra_juniors} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloribus voluptatum ipsam, velit aperiam similique,
                    recusandae impedit quo nemo iste harum dolorum molestias ea
                    veniam sed reprehenderit quisquam autem at sit.
                  </p>
                  <Link to="/events">SEE MORE</Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="swiperControllers">
            <div className="swiper-prev-con" ref={events_navigationPrevRef}>
              <img src={prevArrow} alt="" />
            </div>
            <div className="swiper-pagination" ref={events_paginationRef}></div>
            <div className="swiper-next-con" ref={events_navigationNextRef}>
              <img src={prevArrow} alt="" />
            </div>
          </div>
          <Link to="/events">SEE MORE</Link>
        </section>
        <section id="speakers" className={`Home_Speakers ${plain}`}>
          <h1 className={`${plain}`}>SPEAKERS</h1>
          <div className={`speaker_swiper_container`}>
            <Swiper
              spaceBetween={50}
              navigation={{
                prevEl: speaker_navigationPrevRef.current,
                nextEl: speaker_navigationNextRef.current,
              }}
              loop={true}
              pagination={{
                el: speaker_paginationRef.current,
                clickable: true,
              }}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },
                850: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <img src={atkins} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>Professor of Chemistry at the University of Oxford</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={atkins} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>Professor of Chemistry at the University of Oxford</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={atkins} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>Professor of Chemistry at the University of Oxford</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={atkins} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>Professor of Chemistry at the University of Oxford</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={atkins} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>Professor of Chemistry at the University of Oxford</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="swiperControllers">
            <div className="swiper-prev-con" ref={speaker_navigationPrevRef}>
              <img src={prevArrow} alt="" />
            </div>
            <div
              className="swiper-pagination"
              ref={speaker_paginationRef}
            ></div>
            <div className="swiper-next-con" ref={speaker_navigationNextRef}>
              <img src={prevArrow} alt="" />
            </div>
          </div>
          <Link to="/speakers">SEE MORE</Link>
        </section>
        <section id="testimonials" className={`Home_Testimonials ${plain}`}>
          <h1>TESTIMONIALS</h1>
          <div className={`testimonial_card_container ${plain}`}>
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
                      <p>
                        Chairman, Alphabet <br />
                        Inc., Turing Awardee
                      </p>
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
                      <p>
                        Former Governor of <br />
                        the Reserve Bank of India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer
          designed={[
            { name: "Rohit", mail: "cs19b038@smail.iitm.ac.in" },
            { name: "Krithikaa", mail: "be20b020@smail.iitm.ac.in" },
            { name: "Yogesh", mail: "bs19b034@smail.iitm.ac.in" },
          ]}
        />
      </div>
    </CustomBox>
  );
};

export default Home;
