import * as React from "react";

import "../../../styles/socialEndeavours/SocialEndeavours.css"
import "../../../styles/socialEndeavours/SheCan.css"
import "../../../styles/socialEndeavours/Blink.css"
import "../../../styles/socialEndeavours/Past.css"
import Events from "./script"

import { Image, Grid, GridItem } from "@chakra-ui/react";

import img from "../../../images/socialEndeavours/sheCan.png"
import moeOne from "../../../images/socialEndeavours/moeOne.png"
import moeTwo from "../../../images/socialEndeavours/moeTwo.png"
import moeTwo2 from "../../../images/socialEndeavours/moeTwo2.png"
import dtnext from "../../../images/socialEndeavours/dtnext.png"
import blinkOne from "../../../images/socialEndeavours/blinkOne.jpg"
import blinkTwo from "../../../images/socialEndeavours/blinkTwo.jpg"
import bubblesOne from "../../../images/socialEndeavours/bubblesOne.png"
import bubblesTwo from "../../../images/socialEndeavours/bubblesTwo.png"
import bubblesThree from "../../../images/socialEndeavours/bubblesThree.png"
import pledge from "../../../images/socialEndeavours/pledge.png"
import pledgeSmall from "../../../images/socialEndeavours/pledgeSmall.png"
import sheCanLogo from "../../../images/socialEndeavours/sheCanLogo.jpeg"

import CustomBox from "../../shared/CustomBox";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import { useEffect } from "react";
interface Props{
}

const Social = (props: Props) => {
Events()
    return(
        <div className="body">
            <Header></Header>
         <div className="header">
                <div className="heading">
                SOCIAL ENDEAVOURS
                </div>
                <div className="section-link">
                    <a href="#she-can">SHE CAN</a>
                    <a href="#blink">BLINK</a>
                    <a href="#past">PAST CAMPAIGNS</a>
                </div>
            </div>

            <div>
            <section className="intro">
                <div className="bg"></div>
                <div className="bg bg1"></div>
                <div className="bg bg2"></div>
                <h2 className ="heading-intro">SHAASTRA - SOCIAL IMPACT</h2>
                Every year, Shaastra conducts a social campaign in an attempt to give back to society and create as big of an impact 
                on the lives of the people that we can with the audience that Shaastra amasses. <br /> Over the past years, we have 
                successfully carried out several campaigns such as SheCan, a campaign centered around upliftment of women, Blink, 
                a campaign to help the Blind community, and Pledge a Book, to help provide books to the underprivileged, with these 
                campaigns having been endorsed by a number of esteemed personalities, and helping a lot of people across all walks of 
                life.
            </section>
            </div>

            <section className="she-can" id="she-can">
                <div className="she-can-intro">
                    <div className="she-can-heading sec-heading">
                            SHE <br /> CAN
                    </div>
                   <div className="wrap">
                   <div className="she-can-backdiv"></div>
                    <div className="she-can-intro-info">
                        <p>
                        She Can is centred around women's empowerment by giving them access to information about the vast ocean of 
                        opportunities available to them. 
                        We hope to motivate them to explore and figure out their dreams and aspirations and enable them to make 
                        these dreams a reality with whatever assistance we can provide in this regard, and show the world that 
                        She Can achieve all her goals with the right nudge. 
                        Our mission is to pave the way for the empowerment
                        of women through skill development and career guidance.​
                        </p>
                    </div>
                   </div>
                   </div>
                <Grid templateColumns="repeat(7,1fr)" templateRows="repeat(4,1fr)" columnGap="3vw" textAlign="center"
                rowGap="3vw" margin={["25vw 0","20vw 4vw","25vw 4vw","4rem 4rem"]} color="var(--pink)" 
                marginBottom={["15vw","8vw","8vw","10rem"]}>
                    <GridItem id="she-can-logo" colSpan={[7,7,7,3]} display="flex" justifyContent="center" alignItems="center">
                        <Image src={sheCanLogo} height="227px" width="475px" padding="0" w="fit-content" margin="auto"
                    alt="she can logo" borderRadius={["0","0","24px","24px"]}></Image>
                    </GridItem>
                    <GridItem colSpan={[7,7,7,2]} colStart={[1,1,1,4]} rowSpan={[1,1,1,2]} id="she-can-grid" backgroundColor="var(--green)"
                     display="flex" alignItems="center" justifyContent="center" padding="2rem" borderRadius={["0","0","24px","24px"]}
                      fontSize={["4vw", "4vw", "4vw","1.75vw"]}> 
                         By exposing them to new skill sets, new avenues, and new ideas, we aim to help them become the best 
                     version of themselves, as equal and valued members of their families, society, and the world at large.
                     </GridItem>
                     <GridItem colSpan={[7,7,7,3]} rowSpan={[1,1,1,3]} colStart={1} id="she-can-grid" 
                     display="flex" alignItems="center" justifyContent="center" padding="4rem"
                     backgroundColor="var(--green)" borderRadius={["0","0","24px","24px"]} fontSize={["4vw","4vw","2vw","2vw"]}> 
                         Only 13 percent of all Indian women have more than primary education. This situation has to be improved 
                         to uplift women. Skills and education to match today's industry and economy have to be mastered by women to 
                         thrive. 
                     </GridItem>   
                     {/* <GridItem colSpan={[7,7,7,2]} colStart={[1,1,1,4]} rowSpan={[1,1,1,2]} id="she-can-grid"
                     display="flex" alignItems="center" justifyContent="center" padding="2rem" rowStart={1}
                     backgroundColor="#00a787" borderRadius="24px" fontSize={["4vw", "4vw", "4vw","1.65vw"]}> 
                         By exposing them to new skill sets, new avenues, and new ideas, we aim to help them become the best 
                     version of themselves, as equal and valued members of their families, society, and the world at large.
                     </GridItem> */}
                     <GridItem rowSpan={[1,1,1,2]} rowStart={3} colSpan={[7,7,7,4]} colStart={[1,1,1,4]} id="she-can-grid"
                     display="flex" alignItems="center" justifyContent="center" padding="2rem"
                     backgroundColor="var(--green)" borderRadius={["0","0","24px","24px"]} fontSize={["4vw","4vw","4vw","2vw"]}>
                        We aim to motivate and drive women to explore new realms of possibilities and career options. 
                     The notion of womanhood being just narrowed to motherhood and homemakers cannot be justified at the present age.
                     </GridItem>
                     <GridItem rowSpan={[1,1,1,2]} colStart={[1,1,1,6]} colSpan={[7,7,7,2]} rowStart={[4,4,4,1]}
                     display="flex" alignItems="center" justifyContent="center" padding="2rem" id="she-can-grid"
                     backgroundColor="var(--green)" borderRadius={["0","0","24px","24px"]} fontSize={["4vw", "4vw", "4vw","1.75vw"]}>
                          'She Can' campaign desires to be the foundation of such a dream, Women to reach their complete 
                         potential and to contribute to society through her achievement.
                     
                     </GridItem>
                </Grid>
                <Grid templateColumns="repeat(2, 1fr)" 
                        templateRows={["repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(2,1fr)"]} rowGap="2rem" columnGap="3rem"
                        width="80%" margin={["8vw auto","8vw auto","8vw auto","8rem auto"]}>
                            <GridItem display="flex" rowSpan={[1,1,1,2]}  colSpan={[2,2,2,1]} textAlign="center"
                            backgroundColor="var(--green)" borderRadius="24px"  id="she-can-grid" className="link-she-can"
                            alignItems="center" justifyContent="center">
                                <a href="https://www.youtube.com/watch?v=9_ZsXmRUPfE" rel="noopener"
                                target="_blank">Campaign Launch Video</a>
                            </GridItem>
                            <GridItem rowSpan={1}  display="flex" padding="1rem" colSpan={[2,2,2,1]}
                             backgroundColor="var(--green)" borderRadius="24px" className="link-she-can" id="she-can-grid"
                             alignItems="center" justifyContent="center">
                                <a href="https://www.youtube.com/watch?v=4GYNmmNt2v8" rel="noopener"
                                target="_blank">DD National Interview </a>
                            </GridItem>
                            <GridItem rowSpan={1} display="flex" padding="1rem" colSpan={[2,2,2,1]}
                             backgroundColor="var(--green)" borderRadius="24px" className="link-she-can" id="she-can-grid"
                             alignItems="center" justifyContent="center">
                                <a href="https://www.shecan.shaastra.org/" rel="noopener"
                                target="_blank">For More Info</a>
                            </GridItem>
                </Grid>
                <div className="she-can-recog">
                    <div className="recog-heading">
                        Recognition
                    </div>
                    <div className="recog-info">
                        <div className="recog-info-child odd one">
                            <hr />
                            <div className="title">
                              NDTV NEWS
                            </div>
                            <div className="info">
                                <p>IIT Madras Students Campaign 'She Can' To Empower Women During Pandemic</p>
                                <p>Through the social initiative, 'She Can', online career guidance sessions were held
                                    for girl students from schools and colleges, and financial literacy sessions for women
                                    working in the unorganized sector.
                                </p>
                                <a href="https://www.ndtv.com/education/iit-madras-students-campaign-she-can-empower-women-during-pandemic"
                               target="_blank" rel="noopener">
                                   Read the article
                               </a>
                            </div>
                        </div>
                        <div className="recog-info-child alt two">
                            <hr />
                            <div className="title">MINISTRY OF EDUCATION</div>
                            <div className="info moe">
                                <Image objectFit="cover" alt="tweet" height="475px" width="730px"
                                boxSize={"100%"} src={moeOne}></Image>
                                {/* <Image objectFit="cover" alt="tweet" height="475px" width="730px" padding="8px"
                                boxSize={["100%","100%","100%","80%","100%"]} src={moeTwo2}></Image> */}
                            </div>
                        </div>
                        <div className="recog-info-child odd three">
                            <hr />
                            <div className="title">THE HINDU</div>
                            <div className="info">
                                <p>Women's empowerment is the theme</p>
                                <p>As a part of Shaastra, the annual technical fest of Indian Institute of Technology-Madras,
                                    the students have organised an online campaign to empower women called "She Can".
                                    <br /><br />
                                    So far, the students have conducted career guidance sessions for over 190 schoolgirls
                                    and an ineraction for over 200 college girls with women entrepreneurs.
                                    <br /><br />
                                    The IIT students conducted financial literacy sessions for over 85 working women in Marathi 
                                    and Tamil during lockdown.
                                </p>
                                <a href="https://www.thehindu.com/news/cities/chennai/iit-m-students-launch-she-can-campaign/article33496089.ece"
                                target="_blank" rel="noopener">Read the article</a>
                            </div>
                        </div>
                        <div className="recog-info-child alt four">
                            <hr />
                            <div className="title">DTNEXT.IN</div>
                            <div className="info">
                                <Image src={dtnext} alt="article" height="145px" width="336px" padding="4px 0" id="she-can-image"
                                marginBottom="6vw"></Image>
                                <a href="https://www.dtnext.in/News/City/2021/01/08050455/1270350/IITM-students-organise-women-empowerment-programme.vpf"
                                target="_blank" rel="noopener">Read the article</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Grid templateColumns="repeat(2, 1fr)" 
                        templateRows={["repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(2,1fr)"]} rowGap="2rem" columnGap="3rem"
                        width="80%" margin={["8vw auto","8vw auto","8vw auto","8rem auto"]}>
                            <GridItem display="flex" rowSpan={[1,1,1,2]}  colSpan={[2,2,2,1]}
                            backgroundColor="#00a7889c" borderRadius="24px"  id="link-she-can"
                            alignItems="center" justifyContent="center">
                                <a href="https://www.youtube.com/watch?v=9_ZsXmRUPfE" rel="noopener"
                                target="_blank">Campaign Launch Video</a>
                            </GridItem>
                            <GridItem rowSpan={1}  display="flex" padding="1rem" colSpan={[2,2,2,1]}
                             backgroundColor="#00a7889c" borderRadius="24px" id="link-she-can"
                             alignItems="center" justifyContent="center">
                                <a href="https://www.youtube.com/watch?v=4GYNmmNt2v8" rel="noopener"
                                target="_blank">DD National Interview </a>
                            </GridItem>
                            <GridItem rowSpan={1} display="flex" padding="1rem" colSpan={[2,2,2,1]}
                             backgroundColor="#00a7889c" borderRadius="24px" id="link-she-can"
                             alignItems="center" justifyContent="center">
                                <a href="https://www.shecan.shaastra.org/" rel="noopener"
                                target="_blank">For More Info</a>
                            </GridItem>
                </Grid> */}
            </section>

            <section className="blink b" id="blink">
                <div className="sec-heading">BLINK</div>
                <div className="blink-info intro-info">
                BLINK, the social campaign of Shaastra 2020, continues Shaastra's rich legacy of grassroots social impact and
                is aimed at empowering the visually impaired and enabling them to achieve their full potential. The initiative,
                which began in July 2020, has currently impacted over 200 visually impaired students in and around Chennai.
                </div>
                <Grid templateColumns="repeat(4,1fr)" templateRows={["repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(2,1fr)"]}
                width="93%" margin={["4vw auto","4vw auto","4vw auto","0rem auto"]} columnGap="4rem" rowGap={["2vw","2vw","2vw","2rem"]}>
                    <GridItem colStart={[1,1,1,2]} colSpan={[4,4,4,2]} display="flex"
                    justifyContent="center" alignItems="center" fontSize={["5vw","5vw","5vw","1.65vw"]}>
                        <p className="blink-info-back">Impacted 200+ students across 4 schools in Chennai through Social inclusion and 
                            Personality development programmes</p>
                    </GridItem>
                    <GridItem rowStart={2} colSpan={[4,4,4,2]}><Image src={blinkOne} alt="blink" 
                    height="183px" width="274px" id="blink-image"></Image></GridItem>
                    <GridItem colStart={[1,1,1,3]} colSpan={[4,4,4,2]}><Image src={blinkTwo} height="183px" width="274px" 
                     alt="blink" id="blink-image"></Image></GridItem>
                    {/* <GridItem colStart={1} colSpan={[4,4,4,2]} display="flex"
                    justifyContent="flex-start" alignItems="center" fontSize={["8vw","8vw","6vw","1.65vw"]}>
                        <p className="blink-info-back">Impacted 100+ adults through Career Development programs</p>
                    </GridItem>
                    <GridItem colStart={[1,1,1,3]} colSpan={[4,4,4,2]} display="flex"
                    justifyContent="flex-end" alignItems="center" fontSize={["8vw","8vw","6vw","1.65vw"]}>
                        <p className="blink-info-back">300+ People pledged to donate their eyes.</p>
                    </GridItem> */}
                </Grid>
                <Grid templateRows="repeat(2,1fr)" templateColumns="repeat(2,1fr)" columnGap="4vw" padding="4vw" rowGap="4vw">
                    <GridItem className="blink-info-back" colSpan={[2,2,2,1]} rowSpan={[1,1,1,2]}>
                    Impacted 100+ adults through Career Development programs
                    </GridItem>
                    <GridItem className="blink-info-back" colSpan={[2,2,2,1]} rowSpan={[1,1,1,2]} alignItems="center" 
                    display="flex"  justifyContent="center">
                    300+ People pledged to donate their eyes.
                    </GridItem>
                </Grid>
                {/* <div className="blink-main-info">
                    <div className="blink-info-back">
                    Impacted 100+ adults through Career Development programs
                    </div>
                    <div className="blink-info-back">
                    300+ People pledged to donate their eyes.
                    </div>
                </div> */}
                <Grid templateColumns="repeat(2,1fr)" templateRows="repeat(2,1fr)" columnGap="4vw" padding="3vw" rowGap="4vw">
                    <GridItem className="blink-info-light" colSpan={[2,2,2,1]} rowSpan={[1,1,1,2]}>
                    3D printed interactive puzzles (TacToys) for primary and secondary school students to make 
                    Braille learning fun and interactive. A revised and well-rounded pedagogy for the visually impaired. 
                    Personality Development and dramatics workshops have been conducted for primary and secondary school 
                    students across Chennai. Plans are in place to conduct a 2-day career development workshop 
                    during Shaastra to spread awareness about the career opportunities available to the visually impaired.
                    </GridItem>
                    <GridItem className="blink-info-dark" colSpan={[2,2,2,1]} rowSpan={[1,1,1,2]} alignItems="center" 
                    display="flex"  justifyContent="center">
                    Through this social initiative, Team BLINK aims to embolden and enable the visually challenged to forge 
                    their own path and achieve great success in their lives and careers. <br /><br />
                     Our long term goal is to create a well-rounded
                    curriculum in as many blind schools as possible, where they not only use our braille puzzles but also focus on other 
                    aspects like confidence, personality development and other fun activities.
                    </GridItem>
                </Grid>
                {/* <div className="blink-main-info">
                    <div className="blink-info-light">
                    3D printed interactive puzzles (TacToys) for primary and secondary school students to make 
                    Braille learning fun and interactive. A revised and well-rounded pedagogy for the visually impaired. 
                    Personality Development and dramatics workshops have been conducted for primary and secondary school 
                    students across Chennai. Plans are in place to conduct a 2-day career development workshop 
                    during Shaastra to spread awareness about the career opportunities available to the visually impaired.
                    </div>
                    <div className="blink-info-dark">
                    Through this social initiative, Team BLINK aims to embolden and enable the visually challenged to forge 
                    their own path and achieve great success in their lives and careers. <br /><br />
                     Our long term goal is to create a well-rounded
                    curriculum in as many blind schools as possible, where they not only use our braille puzzles but also focus on other 
                    aspects like confidence, personality development and other fun activities.
                    </div>
                </div> */}
            </section>

            <section id="past">
                <div className="sec-heading past">
                    PAST CAMPAIGNS
                </div>
                <div className="campaigns">
                    <div className="campaigns-child">
                        <hr />
                        <div id="flex">
                        <div className="info">
                            <p>Pledge a book</p>
                            Pledge a book tackled a problem of unavailability of books in underprivileged areas. We established 20 
                            libraries across different cities. Received support from eminent personalities like The Dalai Lama, Sachin Tendulkar,
                            and many more. 
                        </div>
                        <Image src={pledgeSmall} alt="logo" h="189px" w="340px" zIndex="-1" id="pledge"></Image>
                        </div>
                    </div>
                    

                    <Grid templateRows={["repeat(5,1fr)","repeat(5,1fr)","repeat(5,1fr)","repeat(3,1fr)"]} 
                    templateColumns="repeat(3,1fr)" textAlign="center" 
                    margin="auto" marginBottom={["0","0","0","4rem"]} rowGap="1rem" columnGap="1rem" width="100%">
                        <GridItem className="pledge-grid" colSpan={[3,3,3,1]} borderRadius={["0","0","0","24px"]}
                        padding="4rem 0.5vw">
                            20,000+ books donated
                        </GridItem>
                        <GridItem className="pledge-grid" colSpan={[3,3,3,1]} colStart={[1,1,1,3]} borderRadius={["0","0","0","24px"]}
                         padding="4rem 0.5vw">
                            25+ Libraries created
                        </GridItem>
                        <GridItem className="pledge-grid" colSpan={[3,3,3,1]} rowStart={[3,3,3,2]} borderRadius={["0","0","0","24px"]}
                        colStart={[1,1,1,2]} padding="4rem 0.5vw">
                        1 National TV coverage
                        </GridItem>
                        <GridItem className="pledge-grid" colSpan={[3,3,3,1]} rowStart={[4,4,4,3]} borderRadius={["0","0","0","24px"]}
                        padding="4rem 0.5vw">
                            20+ Media Articles
                        </GridItem>
                        <GridItem className="pledge-grid" colSpan={[3,3,3,1]} colStart={[1,1,1,3]} borderRadius={["0","0","0","24px"]}
                        rowStart={[5,5,5,3]} padding="4rem 0.5vw">
                            10+ Marquee pledges
                        </GridItem>
                    </Grid>
                    <div className="campaigns-child even">
                    <div id="bubble-bg">
                            <Image src={bubblesTwo} alt="background" width="1040px" height="780px"
                            w={["100vw","100vw","100vw", "100vw"]} h={["165vw","150vw","150vw","75vw","32vw"]} fit="cover"></Image>
                            <Image src={bubblesThree} alt="background" width="1080" height="1080"
                            w={["100vw","100vw","100vw", "100vw"]} h={["165vw","150vw","150vw","75vw","32vw"]} fit="cover"></Image>
                    </div>
                            <div className="info">
                                <p>Bubbles</p>
                                With the motivation of creating an impact in both social and economic capacities, Shaastra has come up with - 
                                <b> Bubbles. </b>
                                <br /><br />
                                One of the basic necessities in developing India is to increase the hygiene condition in every possible way 
                                and washing hands is the foremost aspect in maintaining hygiene. We notice that most underprivileged schools 
                                do not take this seriously and avoid buying handwash.
                                <br /><br />
                                Also, in today’s world, resources are being depleted at an alarming rate and waste generated has also 
                                increased exponentially; the most feasible solution to this problem is to recycle and reuse.
                                <br /><br />
                                Under the campaign Bubbles, Shaastra aims to collaborate with hotels, companies and organizations from where we seek to
                                collect leftover used soap bars, These soap bars will  then be treated and recycled into hand wash solutions that will 
                                be distributed with help of NGOs in schools, street vendors and other public places to help increase the hygiene standards. 
                                The campaign will also include activities to promote hygiene awareness in schools and other public places in Chennai.
                            </div>
                    </div>
                    {/* <div><Image src={bubblesOne} alt="poster" height="540px" width='540px' id="bubbles-image"></Image></div> */}
                </div>
            </section>
            <script src="./script.tsx"></script>
            <Footer></Footer>
        </div>
    )
}


export default Social;