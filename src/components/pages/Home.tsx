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
import Event1 from "../../images/events_1.png";
import Event2 from "../../images/events_2.png";
import Event3 from "../../images/events_3.png";
import Event4 from "../../images/events_4.png";
import Event6 from "../../images/events_6.png";
import Event7 from "../../images/events_7.png";
import Event8 from "../../images/events_8.png";
import Event9 from "../../images/events_9.png";
import Workshop1 from "../../images/workshop_1.png";
import Workshop2 from "../../images/workshop_2.png";
import Workshop3 from "../../images/workshop_3.png";
import Workshop4 from "../../images/workshop_4.png";
// import codetochaos1 from "../../images/logo/static/codetochaos.svg";
import codetochaos1 from "../../images/logo/static/codetochaos2.svg";
import codetochaos2 from "../../images/logo/static/codetochaos2.svg";

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
    window.innerWidth > 600 ? 200 / 6 : (window.innerWidth - 150) / 6 - 5
  );

  const update_sidenav_marker = (e) => {
    var screenWidthSpacing = (window.innerWidth - 150) / 6;

    if (
      e.target.scrollTop < window.innerHeight - 20 &&
      e.target.scrollTop >= 0
    ) {
      if (window.innerWidth > 600) {
        setSideNavBar_marker(200 / 6 + 0 * (200 / 6 + 30));
      } else {
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

  const [scrollLeft, setScrollLeft] = React.useState({
    left: 0,
    right: 100,
  });

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
            <img
              style={
                plain === "black"
                  ? {
                      filter: "invert(1)",
                    }
                  : {
                      filter: "invert(0)",
                    }
              }
              src={codetochoas}
              alt=""
              id="theme_name"
            />
            <p id="themeDate">13th - 16th January</p>
            {window.innerWidth < 800 ? (
              <></>
            ) : (
              <p>
                Welcome to the Official website of first ISO certified
                student-run technical festival, Shaastra! Here, we will take you
                through all the amazing things you can do with us, from earning
                lakhs of money by winning events, to fireside chats with your
                favorite celebrities. So, what are you waiting for? Go ahead and
                explore what we have to offer.
              </p>
            )}
            <Link to="/signup">Register</Link>
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
                <div className="contentBox">
                  <ol type="1">
                    <li>
                      Make a chat app using Socket.io, Node.js and MongoDB
                    </li>
                    <li>Web Development in Python with Flask</li>
                    <li>Creative Coding</li>
                  </ol>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event1} alt="" />
                <div className="contentBox">
                  <h3>Capture the Flag (CTF)</h3>
                  <p>
                    Do "hacking" scenes in movies and TV Shows make you roll
                    your eyes? Do you want to see what exploiting real life
                    vulnerabilities in real life systems is like? Shaastra CTF
                    is the event for you. Break programs, sneakily attack and
                    search all over to find out encrypted hidden messages,
                    fittingly called Flags. This is a one round, all online
                    (fairly exciting) CTF event.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Workshop2} alt="" />
                <div className="contentBox">
                  <ol type="1">
                    <li>Introduction to FPGA</li>
                    <li>CPU and GPU Parallel Computing</li>
                    <li>Quantum Computing</li>
                  </ol>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event2} alt="" />
                <div className="contentBox">
                  <h3>Caterpillar IDP</h3>
                  <p>
                    Are you a person who is curious about problem solving? Yes,
                    you heard that right, you are at the right place. With mind
                    blogging problem statements at our stake and with the
                    collaboration of Caterpillar India Pvt ltd, we put forward
                    the most anticipated event of Shaastra, IDP (Industry
                    Defined Problems).
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Workshop3} alt="" />
                <div className="contentBox">
                  <ol type="1">
                    <li>Introduction to Arduino and IOT</li>
                    <li>Circuit Simulation and PCB Design</li>
                    <li>
                      Hacking Processors : An Unconventional Hacking Methodology
                    </li>
                  </ol>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event3} alt="" />
                <div className="contentBox">
                  <h3>Rapid Chess</h3>
                  <p>
                    The event is Blitz Chess. The event is going to be held on
                    Chess.com. Both opponents get 3min+2sec each for the chess
                    game. A player can win only if he checkmates the opponent or
                    the opponent's time runs out first. Draw is possible due to
                    stalemate or by insufficient pieces for checkmate. The event
                    is to be held on 6th March.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Workshop4} alt="" />
                <div className="contentBox">
                  <ol type="1">
                    <li>Stepping into the world of robotics</li>
                    <li>Python Algorithms for Robotics</li>
                    <li>Control of Robot Arm using Inverse Kinematics</li>
                  </ol>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event4} alt="" />
                <div className="contentBox">
                  <h3>Boeing Aeromodelling Competition</h3>
                  <p>
                    Have you ever wanted to work on modelling a real aeroplane?
                    Shaastra brings you, The BOEING NATIONAL AEROMODELLING
                    COMPETITION, conducted in collaboration between Boeing,
                    Skyfi Labs, and the IITs, is a golden opportunity for all
                    aeromodelling enthusiasts, to showcase your modelling skills
                    at a national platform
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event7} alt="" />
                <div className="contentBox">
                  <h3>Global Biotech Council</h3>
                  <p>
                    GBC is a debate-based event where the participants will have
                    to submit a write up about the topic given and the top 12
                    teams are selected for the final round that is a debate
                    round where they have to argue for/against the topic. The
                    topic for debate is “Gene Therapy – Boon or Bane?”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event6} alt="" />
                <div className="contentBox">
                  <h3>Shaastra Programming Contest</h3>
                  <p>
                    Truth can only be found in one place: the code. We are ready
                    with the most innovative problem situations ever, testing
                    algorithms and implementation in every way possible. Are you
                    ready to prove your skill and emerge a programming champion?
                    We have online prelims and an online finals
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event8} alt="" />
                <div className="contentBox">
                  <h3>Reverse Coding</h3>
                  <p>
                    Coders are divided by language but united by logic. Before
                    learning the mumbo-jumbo syntax of every programming
                    language there is to offer, first one must develop a keen
                    sense of how to approach problems. The RC event offers a
                    brief test on your logical and analytical skills that are
                    essential in becoming a good coder.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Event9} alt="" />
                <div className="contentBox">
                  <h3>Mouse Maze challenge</h3>
                  <p>
                    Mouse Maze challenge is a simple, fun, and challenging task.
                    This is the online version of Micro Mouse Maze, where an
                    autonomous robotic mouse is programmed to reach the center
                    of a maze. The problem is very practical and involves a
                    great deal of algorithmic thinking and problem solving
                    skills.
                  </p>
                </div>
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
              // breakpoints={{
              //   200: {
              //     slidesPerView: 1,
              //   },
              //   850: {
              //     slidesPerView: 4,
              //   },
              // }}
              slidesPerView={"auto"}
            >
              <SwiperSlide>
                <img src={atkins} alt="" />
                <div className="contentBox">
                  <h3>Peter Atkins</h3>
                  <p>FRSC, Prolific Author of popular chemistry textbooks</p>
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
                  <h3>Dr John Hennessy</h3>
                  <p>
                    Chairman of Alphabet Inc., Eminent Computer Scientist,
                    Turing Award, 2017
                  </p>
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
                  <h3>Dr K. Radhakrishnan</h3>

                  <p>Former Chairman, ISRO</p>
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
                  <h3>RoboThespian and Cleo</h3>

                  <p>World’s First Acting Humanoid Robots</p>
                  <a href="https://youtu.be/kLhGfEybZi4" target="_blank">
                    <FaYoutube />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Soumya} alt="" />
                <div className="contentBox">
                  <h3>Dr Soumya Swaminathan,</h3>

                  <p>Chief Scientist, World Health Organisation (WHO)</p>
                  <a href="https://youtu.be/2-_MZbCOP88" target="_blank">
                    <FaYoutube />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Capture} alt="" />
                <div className="contentBox">
                  <h3>Dr Joachim Frank</h3>
                  <p>Nobel Prize in Chemistry, 2017</p>
                  <a href="https://youtu.be/cYs-FEUSNFw" target="_blank">
                    <FaYoutube />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Robert} alt="" />
                <div className="contentBox">
                  <h3>Mr Robert C. Martin</h3>
                  <p>American Software Engineer, Popular Author</p>
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
          <Link to="/speakers">SEE MORE</Link>
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
