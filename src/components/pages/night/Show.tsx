import React, { useEffect } from "react"
import CustomBox from "./../../shared/CustomBox";
import Header from "./../../shared/Header"
import Footer from "../../shared/Footer";
import { Heading, Flex, Box, Image, useColorModeValue } from "@chakra-ui/react";
import w from "./../../../images/night/shows_1.png";
import q from "./../../../images/night/shows_2.png";
import r from "./../../../images/night/shows_3.png";
import Bg from "./../../../images/night/shows-bg.jpg"
import event from "./script";
import "../../../styles/night/show.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Show()
{
    const bg = useColorModeValue("light" , "dark")

    useEffect(
        () => {
            var headL:HTMLElement = document.getElementById("show-head-l")!
        // var headR: HTMLElement = document.getElementById("show-head-r")!
        headL.style.animation = "left 1.5s linear";
        // headR.style.animation = "left 2s ease"
        }
    )

    return(
        <>
            <CustomBox>
                <Box className="shows-main" backgroundColor="transparent" zIndex="2">
                <Header></Header>
                <Flex width="100vw" className="shows"
                    justifyContent="space-between" marginBottom="10vh"
                    backgroundColor="transparent" paddingTop="10vh" alignItems="center"
                >
                    <Box width="20%" height="3vh" className={` ${bg}`} id="show-head-l"> </Box>
                    <Heading backgroundColor="transparent" fontSize="4vw">SHOWS</Heading>
                    <Box width="20%" height="3vh"className={`${bg}`} id="show-head-r" > </Box>
                </Flex>
                <Box margin="auto"
                    width="80vw" fontSize="2xl" fontWeight="600"
                    textAlign="center" marginBottom="15vh"   
                    borderRadius="12px" 
                    className={`shows-info ${bg}`}
                    textColor="#0e101b" padding="8vh"
                    backdropBlur={"30px"}
                >
                    The flagship event of Shaastra, Shaastra Nights, has made the former a noteworthy leader amongst parallel 
                    fests in the country. Shaastra Nights provide a platform for exquisite performers to display their artistic
                     prowess while giving the audience a once-in-a-lifetime opportunity to witness a confluence of technology 
                     and culture. Shaastra Nights is non-ticketed - an attribute that distinguishes it from shows akin; it 
                     enables students and the public to access quality entertainment at its finest. Behind the warranted glitz 
                     and glamour, Shaastra Nights' true intentions shine - diversity and inclusivity. 
                     <br /> <br />
                     Professional shows are a fitting end to each day of Shaastra. These techno-entertainment shows, ever 
                     since their conception, have hosted artists from across the globe. Our audience counts up in thousands,
                      which is a testament to its success and popularity. These include Mirage, a laser show by an 
                      international group, Sand Art show by world-renowned artists, Bike Stunt show by French performers 
                      and EDM (Electronic Dance Music) Night.
                </Box>
                <Flex width="60vw" margin="auto" justifyContent="space-between" className="shows-image">
                    <Image src={w} boxSize="18vw" borderRadius="50%" border="5px solid white"></Image>
                    <Image src={q} boxSize="18vw" borderRadius="50%" border="5px solid white"></Image>
                    <Image src={r} boxSize="18vw" borderRadius="50%" border="5px solid white"></Image>
                </Flex>
                <VerticalTimeline>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0e101b', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #0e101b' }}
                iconStyle={{ background: '#0e101bc9', color: '#fee9e1' }}>
                    <Flex flexDirection="column" >
                        <h3>2016</h3>
                        <p>Adelaida</p>
                        <p>Vivek Patil</p>
                        <p>Freestyle Air - 3 acts</p>
                    </Flex>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0e101b', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #0e101b' }}
                iconStyle={{ background: '#0e101bc9', color: '#fff' }}>
                    <Flex flexDirection="column">
                        <h3>2017</h3>
                        <p>IDRL drone race </p>
                    </Flex>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0e101b', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #0e101b' }}
                iconStyle={{ background: '#0e101bc9', color: '#fff' }}>
                    <Flex flexDirection="column">
                        <h3>2018</h3>
                        <p>Mariana Bo</p>
                        <p>Get Massive</p>
                        <p>Broken Symmetry</p>
                        <p>Suhani Shah</p>
                    </Flex>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0e101b', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #0e101b' }}
                iconStyle={{ background: '#0e101bc9', color: '#fff' }}>
                    <Flex flexDirection="column">
                        <h3>2019</h3>
                        <p>Vivek Patil</p>
                        <p>Vilas Nayak</p>
                    </Flex>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0e101b', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #0e101b' }}
                iconStyle={{ background: '#0e101bc9', color: '#fff' }}>
                    <Flex flexDirection="column">
                        <h3>2020</h3>
                        <p>Heimdall </p>
                        <p>Vivek Desai</p>
                    </Flex>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0e101b', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #0e101b' }}
                iconStyle={{ background: '#0e101bc9', color: '#fff' }}>
                    <Flex flexDirection="column">
                        <h3>2021</h3>
                        <p>Kenny Sebastian</p>
                        <p>Soda (Sudarshan Ramamurthy)</p>
                        <p>Ray Li</p>
                        <p>Dan Rhodes</p>
                        <p>Sonic Snares</p>
                        <p>Sushil Jazz</p>
                        <p>Rishabh Rajan</p>
                    </Flex>
                </VerticalTimelineElement>
                </VerticalTimeline>
           <Box backgroundColor="#0e101bc9">
           <Footer designed={[{name : "Krithikaa",mail :"be20b020@smail.iitm.ac.in"}]} />
           </Box>
            </Box>
            </CustomBox>
        </>
    )
}