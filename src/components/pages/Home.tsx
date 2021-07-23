import * as React from "react";
import { Text, VStack, Code, useColorModeValue, Flex } from "@chakra-ui/react";
import { ReactComponent as DiceOutlineDarkAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
import { ReactComponent as DiceOutlineLightAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";
import "./Home.css";
import CustomBox from "../shared/CustomBox";
import { FaTwitterSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Link } from "react-router-dom";
import atkins from "../../images/Peter_Atkins.jpg";
import shaastra_juniors from "../../images/shaastra_juniors.png";
import prevArrow from "../../images/prevArrow.svg";

interface Props {}

SwiperCore.use([Navigation, Pagination]);

const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );
  // const color = useColorModeValue("secondary", "link")

  const [sideNavBar_marker, setSideNavBar_marker] =
    React.useState("calc(200px / 6)");

  const update_sidenav_marker = (e) => {
    // console.log(e);
    //  (e.target.scrollTop / 720)*
    setTimeout(() => {}, 500);
    if (e.target.scrollTop < window.innerHeight - 20 && e.target.scrollTop >= 0)
      setSideNavBar_marker(
        `calc(calc(200px / 6) + 0*calc(calc(200px / 6) + 30px))`
      );
    else if (
      e.target.scrollTop < 2 * window.innerHeight - 20 &&
      e.target.scrollTop >= window.innerHeight - 20
    )
      setSideNavBar_marker(
        `calc(calc(200px / 6) + 1*calc(calc(200px / 6) + 30px))`
      );
    else if (
      e.target.scrollTop < 3 * window.innerHeight - 20 &&
      e.target.scrollTop >= 2 * window.innerHeight - 20
    )
      setSideNavBar_marker(
        `calc(calc(200px / 6) + 2*calc(calc(200px / 6) + 30px))`
      );
    else if (
      e.target.scrollTop < 4 * window.innerHeight - 20 &&
      e.target.scrollTop >= 3 * window.innerHeight - 20
    )
      setSideNavBar_marker(
        `calc(calc(200px / 6) + 3*calc(calc(200px / 6) + 30px))`
      );
    else if (
      e.target.scrollTop < 5 * window.innerHeight - 20 &&
      e.target.scrollTop >= 4 * window.innerHeight - 20
    )
      setSideNavBar_marker(
        `calc(calc(200px / 6) + 4*calc(calc(200px / 6) + 30px))`
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
      <div onScroll={update_sidenav_marker} className="Home">
        <div className="Home_sideNavBar">
          <span
            className="Home_sideNavBar_marker"
            style={{
              top: sideNavBar_marker,
            }}
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
        <section id="landing_page" className="Home_landingPage">
          <div className="ContentBox">
            <h1>SHAASTRA 2022</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              esse? Ratione nobis dignissimos veniam neque doloremque
              perspiciatis sunt, nostrum aliquam, dolor odit amet tempora
              repellendus, corporis nemo vitae deleniti iure.
            </p>
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
              <FaTwitterSquare />
            </a>
            <span></span>
          </div>
        </section>
        <section id="who_are_we" className="Home_whoAreWe">
          <h1>WHO ARE WE ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem
            eos ad corporis modi quia voluptatum iure amet, necessitatibus vitae
            dolores impedit ex fugiat itaque. Molestiae quia labore vitae
            assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est autem eos ad corporis modi quia voluptatum iure amet,
            necessitatibus vitae dolores impedit ex fugiat itaque. Molestiae
            quia labore vitae assumenda. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Est autem eos ad corporis modi quia voluptatum
            iure amet, necessitatibus vitae dolores impedit ex fugiat itaque.
            Molestiae quia labore vitae assumenda. Est autem eos ad corporis
            modi quia voluptatum iure amet, necessitatibus vitae dolores impedit
            ex fugiat itaque. Molestiae quia labore vitae assumenda. Est autem
            eos ad corporis modi quia voluptatum iure amet, necessitatibus vitae
            dolores impedit ex fugiat itaque. Molestiae quia labore vitae
            assumenda.
          </p>
        </section>
        <section id="workshop_events" className="Home_WorkshopsEvents">
          <h1>WORKSHOP & EVENTS</h1>
          <div className="speaker_swiper_container">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              navigation={{
                prevEl: events_navigationPrevRef.current,
                nextEl: events_navigationNextRef.current,
              }}
              loop={true}
              pagination={{ el: events_paginationRef.current, clickable: true }}
            >
              <SwiperSlide>
                <img src={shaastra_juniors} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>Professor of Chemistry at the University of Oxford</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={shaastra_juniors} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>Professor of Chemistry at the University of Oxford</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={shaastra_juniors} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>Professor of Chemistry at the University of Oxford</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={shaastra_juniors} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>Professor of Chemistry at the University of Oxford</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={shaastra_juniors} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>Professor of Chemistry at the University of Oxford</p>
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
        <section id="speakers" className="Home_Speakers">
          <h1>SPEAKERS</h1>
          <div className="speaker_swiper_container">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              navigation={{
                prevEl: speaker_navigationPrevRef.current,
                nextEl: speaker_navigationNextRef.current,
              }}
              loop={true}
              pagination={{
                el: speaker_paginationRef.current,
                clickable: true,
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
        <section id="testimonials" className="Home_Testimonials">
          <h1>TESTIMONIALS</h1>
          <div className="testimonial_card_container">
            <div className="testimonialWrapper">
              <div className="testimonial_card_cover">
                <div className="testimonial_card">
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
                <div className="testimonial_card">
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
                <div className="testimonial_card">
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
                <div className="testimonial_card">
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
                <div className="testimonial_card">
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
                <div className="testimonial_card">
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
    </CustomBox>
  );
};

export default Home;
