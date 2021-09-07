import * as React from "react";
import { Text, VStack, Code, useColorModeValue, Flex } from "@chakra-ui/react";
import { ReactComponent as DiceOutlineDarkAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
import { ReactComponent as DiceOutlineLightAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";
import "./Home.css";
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
import robo1 from "../../images/homepage_illustrations/Big_Robo_1.png";
import robo2 from "../../images/homepage_illustrations/Small_robo.png";

interface Props {}

SwiperCore.use([Navigation, Pagination]);

const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );
  // const color = useColorModeValue("secondary", "link")
  const plain = useColorModeValue("black", "white");

  const [sideNavBar_marker, setSideNavBar_marker] = React.useState(
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
<<<<<<< HEAD
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
        <section id="landing_page" className={`Home_landingPage ${plain}`}>
          <div className="ContentBox">
            <h1>SHAASTRA 2022</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              esse? Ratione nobis dignissimos veniam neque doloremque
              perspiciatis sunt, nostrum aliquam, dolor odit amet tempora
              repellendus, corporis nemo vitae deleniti iure.
            </p>
          </div>
          <div className="imgBox">
            <img src={robo2} alt="" />
            <img src={robo1} alt="" />
          </div>
          <span className="Home_scroll_btn">
            <span></span>
          </span>

          <div className="Follow">
            <p>FOLLOW US</p>
            <span></span>
            <a href="#">
              <FaInstagram />
            </a>
            <span></span>
            <a href="#">
              <FaLinkedin />
            </a>
            <span></span>
            <a href="#">
              <FaYoutubeSquare />
            </a>
            <span></span>
          </div>
        </section>
        <section id="who_are_we" className="Home_whoAreWe">
          <img id="who_are_we_robo1" src={robo1} alt="" />
          <img id="who_are_we_robo2" src={robo2} alt="" />
          <h1 id="heading">WHO ARE WE?</h1>
          <div id="text">
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
          </div>
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
                  <Link to="/">SEE MORE</Link>
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
          <Link to="/">SEE MORE</Link>
        </section>
        <section id="speakers" className={`Home_Speakers`}>
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
          <Link to="/">SEE MORE</Link>
        </section>
        <section id="testimonials" className={`Home_Testimonials ${plain}`}>
          <h1>TESTIMONIALS</h1>
          <div className={`testimonial_card_container ${plain}`}>
            <div className={`testimonialWrapper ${plain}`}>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, doloremque odio? Perferendis quibusdam ut unde quo
                    dolore sit ullam veritatis, incidunt harum dolor nam dolorum
                    nobis consectetur error sapiente quod.
                  </p>
                  <div className="profile">
                    <div className="imgBox"></div>
                    <div className="contentBox">
                      <h3>Famous Person</h3>
                      <p>CEO of Company</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, doloremque odio? Perferendis quibusdam ut unde quo
                    dolore sit ullam veritatis, incidunt harum dolor nam dolorum
                    nobis consectetur error sapiente quod.
                  </p>
                  <div className="profile">
                    <div className="imgBox"></div>
                    <div className="contentBox">
                      <h3>Famous Person</h3>
                      <p>CEO of Company</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, doloremque odio? Perferendis quibusdam ut unde quo
                    dolore sit ullam veritatis, incidunt harum dolor nam dolorum
                    nobis consectetur error sapiente quod.
                  </p>
                  <div className="profile">
                    <div className="imgBox"></div>
                    <div className="contentBox">
                      <h3>Famous Person</h3>
                      <p>CEO of Company</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, doloremque odio? Perferendis quibusdam ut unde quo
                    dolore sit ullam veritatis, incidunt harum dolor nam dolorum
                    nobis consectetur error sapiente quod.
                  </p>
                  <div className="profile">
                    <div className="imgBox"></div>
                    <div className="contentBox">
                      <h3>Famous Person</h3>
                      <p>CEO of Company</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, doloremque odio? Perferendis quibusdam ut unde quo
                    dolore sit ullam veritatis, incidunt harum dolor nam dolorum
                    nobis consectetur error sapiente quod.
                  </p>
                  <div className="profile">
                    <div className="imgBox"></div>
                    <div className="contentBox">
                      <h3>Famous Person</h3>
                      <p>CEO of Company</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_card_cover">
                <div className={`testimonial_card ${plain}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, doloremque odio? Perferendis quibusdam ut unde quo
                    dolore sit ullam veritatis, incidunt harum dolor nam dolorum
                    nobis consectetur error sapiente quod.
                  </p>
                  <div className="profile">
                    <div className="imgBox"></div>
                    <div className="contentBox">
                      <h3>Famous Person</h3>
                      <p>CEO of Company</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
=======
      <Flex flexDirection={"column"} justifyContent="center" alignItems="center" minH="100vh" p={3}>
        <VStack spacing={8}>
          <Logo height="100" width="auto" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
        </VStack>
      </Flex>
>>>>>>> spons
    </CustomBox>
  );
};

export default Home;
