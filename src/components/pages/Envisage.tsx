// import React from "react";
// import { Heading } from "@chakra-ui/react";
// import { Grid, GridItem, Container, Text, Box, Center, Flex } from "@chakra-ui/react";
// import "../../main.css";
// import { Link } from "react-router-dom";

// const sections = [
//     {
//         title: "About Us",
//         desc: "The Annual Technical Festival of IIT Madras, Shaastra introduced a technologically aided cultural show in the year 2013, capitalizing on the entertainment factor. This techno – cultural show was named Envisage and today it is India’s first and only student organised techno-entertainment show. The projects exhibited by Envisage attract a bunch of not-so-technically oriented guests too. The projects are designed in conformity with the tagline of Envisage – “Technology meets Entertainment”. Alongside conducting the show on 1st day of Shaastra, a number of other interactive projects and video games are also developed and exhibited to a vast crowd at KV Stalls during Shaastra. Over the past few years Envisage has been exploring and presenting projects at various avenues like IIM Bangalore, Anna University and in several other universities as part of Samparks, Publicity event of Shaastra. The coming version marks the entry of Envisage into its very 10th year.",
//     },
//     {
//         title: "Vision",
//         desc: "As the tagline “Where Technology Meets Entertainment” suggests, we inspire and enable students to explore their creative and engineering skills through various technical projects for the techno cultural show and the tech exhibition during Shaastra. ",
//     },
// ];

// const data = [
//     {
//         id: 1,
//         title: "Shows",
//         desc: "This vertical comprises large scale projects which are presented in the Envisage show, which is organized on the first day of Shaastra. This is the first and only student-run techno-entertainment show in India and witnessed by an audience of around 5000.",
//     },
//     {
//         id: 2,
//         title: "Tech-Ambience",
//         desc: "This vertical comprises interactive projects which are presented at KV grounds during Shaastra as a part of tech- exhibition of Envisage.",
//     },
//     {
//         id: 3,
//         title: "GameDev",
//         desc: "This vertical is involved in creating video games from scratch and are displayed at KV stalls during Shaastra as a part of our Tech-Exhibition. We also compete in a lot of entertaining game jam sessions and conduct game development workshops as a team to show the entertaining aspect of game development to others.",
//     },
// ];

// export default function Main() {
//     return (
//         <>
//             <Heading color="#00AB74" size="xl" textAlign="center">
//                 ENVISAGE
//             </Heading>

//             <Flex className="sections--container" direction="column">
//                 {sections.map(({ title, desc }) => (
//                     <Container className="sections__section" width="60%" margin="5">
//                         <Heading color="#35D7FF" fontFamily="monospace">
//                             {title}
//                         </Heading>
//                         <br />
//                         <Text color="#FFE8E0" fontSize="xl">
//                             {desc}
//                         </Text>
//                     </Container>
//                 ))}
//             </Flex>
//             <div>
//                 <Center>
//                     <Container p="1" margin="1" maxW="container.xl">
//                         <Box className="root" border="1px solid white" height="80px">
//                             <Flex justify="center" align="center" height="100%">
//                                 <Heading color="#35D7FF" textAlign="center">
//                                     Projects
//                                 </Heading>
//                             </Flex>
//                         </Box>
//                         <Grid maxWidth="100%" templateColumns="repeat(3, 1fr)" columnGap="4" className="wrapper--level__1" wrap="nowrap">
//                             {data.map(({ title, desc, id }) => (
//                                 <GridItem border="1px solid white" className="tree--level__1 node">
//                                     <Link to={{ pathname: `/project/${id}`, state: { title } }}>
//                                         <Container>
//                                             <Heading color="#35D7FF" size="lg" textAlign="center" verticalAlign="center">
//                                                 {title}
//                                             </Heading>
//                                             <Container>
//                                                 <Text>{desc}</Text>
//                                             </Container>
//                                         </Container>
//                                     </Link>
//                                 </GridItem>
//                             ))}
//                         </Grid>
//                     </Container>
//                 </Center>
//             </div>
//         </>
//     );
// }

import React from "react";
import {
  Heading,
  useBreakpointValue,
  useColorModeValue,
  Grid,
  GridItem,
  Container,
  Text,
  Box,
  Center,
  Flex,
  Image,
} from "@chakra-ui/react";
import "../../main.css";
import { Link } from "react-router-dom";
import CustomBox from "../shared/CustomBox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedinIn,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const sections = [
  {
    imgUrl: "/envisage_1.png",
    title: "About Us",
    desc: "The Annual Technical Festival of IIT Madras, Shaastra introduced a technologically aided cultural show in the year 2013, capitalizing on the entertainment factor. This techno – cultural show was named Envisage and today it is India’s first and only student organised techno-entertainment show. The projects exhibited by Envisage attract a bunch of not-so-technically oriented guests too. The projects are designed in conformity with the tagline of Envisage – “Technology meets Entertainment”. Alongside conducting the show on 1st day of Shaastra, a number of other interactive projects and video games are also developed and exhibited to a vast crowd at KV Stalls during Shaastra. Over the past few years Envisage has been exploring and presenting projects at various avenues like IIM Bangalore, Anna University and in several other universities as part of Samparks, Publicity event of Shaastra. The coming version marks the entry of Envisage into its very 10th year.",
  },
  {
    imgUrl: "/envisage_2.png",
    title: "Vision",
    desc: "As the tagline “Where Technology Meets Entertainment” suggests, we inspire and enable students to explore their creative and engineering skills through various technical projects for the techno cultural show and the tech exhibition during Shaastra.",
  },
];

const data = [
  {
    id: 1,
    title: "Shows",
    desc: "This vertical comprises large scale projects which are presented in the Envisage show, which is organized on the first day of Shaastra. This is the first and only student-run techno-entertainment show in India and witnessed by an audience of around 5000.",
  },
  {
    id: 2,
    title: "Tech-Ambience",
    desc: "This vertical comprises interactive projects which are presented at KV grounds during Shaastra as a part of tech- exhibition of Envisage.",
  },
  {
    id: 3,
    title: "GameDev",
    desc: "This vertical is involved in creating video games from scratch and are displayed at KV stalls during Shaastra as a part of our Tech-Exhibition. We also compete in a lot of entertaining game jam sessions and conduct game development workshops as a team to show the entertaining aspect of game development to others.",
  },
];

export default function Main() {
  const bg = useColorModeValue("black", "white");
  const wd = useBreakpointValue({ base: "100%", md: "60%" });
  const cols = useBreakpointValue({ base: 1, md: 3 });
  const beforesDisplay = useBreakpointValue({ base: "none", md: "block" });
  console.log(cols);
  return (
    <CustomBox>
      <br />
      <br />
      <br />
      <Heading color="#00AB74" size="xl" textAlign="center">
        ENVISAGE
      </Heading>

      <Flex
        padding="0 20px"
        className="sections--container"
        direction="column"
        minHeight="80vh"
      >
        {sections.map(({ title, desc, imgUrl }, index) => (
          <Container
            minWidth="98%"
            className="sections__section"
            width={wd}
            margin="5"
          >
            <Heading
              data-aos={`fade-${index % 2 === 0 ? "right" : "left"}`}
              as="span"
              color="#35D7FF"
              fontFamily="monospace"
            >
              {title}
            </Heading>
            <br />
            <Grid
              data-aos={`fade-${index % 2 === 0 ? "right" : "left"}`}
              templateColumns="repeat(2, 1fr)"
            >
              <GridItem order={index % 2 === 0 ? 0 : 2}>
                <Text
                  textAlign="justify"
                  fontSize="xl"
                  style={{ fontFamily: "monospace" }}
                >
                  {desc}
                </Text>
              </GridItem>
              <GridItem verticalAlign="top">
                <Center>
                  <Image width="80%" src={imgUrl} borderRadius="8" />
                </Center>
              </GridItem>
            </Grid>
          </Container>
        ))}
      </Flex>
      <Center>
        <Container p="1" margin="1" maxW="container.xl">
          <Box className="root" border="1px" borderColor={bg} height="80px">
            <Flex justify="center" align="center" height="100%">
              <Heading color="#35D7FF" textAlign="center">
                Verticals
              </Heading>
            </Flex>
          </Box>
          <Grid
            maxWidth="100%"
            _before={{ background: bg, display: beforesDisplay }}
            templateColumns={`repeat(${cols}, 1fr)`}
            columnGap="4"
            className="wrapper--level__1"
            wrap="nowrap"
            rowGap="4"
          >
            {data.map(({ title, desc, id }, index) => (
              <GridItem
                data-aos={`fade-${
                  index === 0 ? "right" : index === 1 ? "up" : "left"
                }`}
                key={title}
                border="1px"
                _before={{ background: bg, display: beforesDisplay }}
                className="tree--level__1 node"
              >
                <Link to={{ pathname: `/project/${id}`, state: { title } }}>
                  <Container>
                    <Heading
                      color="#35D7FF"
                      size="lg"
                      textAlign="center"
                      verticalAlign="center"
                    >
                      {title}
                    </Heading>
                    <Container>
                      <Text>{desc}</Text>
                    </Container>
                  </Container>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Center>
      <br />
      <br />
      <br />
      <Center>
        <Heading className="captions" textAlign="center" padding="2">
          Go Shaastra!
        </Heading>
      </Center>
      <br />
      <br />
      <br />
      <Center>
        <Heading className="captions" textAlign="center" padding="2">
          Go Envisage!!
        </Heading>
      </Center>
      <br />
      <br />
      <br />
      <Container paddingBottom="10">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem textAlign="center">
            <a href="https://www.facebook.com/Envisage.IITM">
              <FontAwesomeIcon
                className="h-eff"
                size="4x"
                data-aos="zoom-in"
                icon={faFacebookSquare}
              />
            </a>
          </GridItem>
          <GridItem textAlign="center">
            <a href="https://www.linkedin.com/">
              <FontAwesomeIcon
                className="h-eff"
                size="4x"
                data-aos="zoom-in"
                icon={faLinkedinIn}
              />
            </a>
          </GridItem>
          <GridItem textAlign="center">
            <a href=" https://www.instagram.com/envisageiitmadras/">
              <FontAwesomeIcon
                className="h-eff"
                size="4x"
                data-aos="zoom-in"
                icon={faInstagramSquare}
              />
            </a>
          </GridItem>
          <GridItem textAlign="center">
            <a href="https://twitter.com">
              <FontAwesomeIcon
                className="h-eff"
                size="4x"
                data-aos="zoom-in"
                icon={faTwitterSquare}
              />
            </a>
          </GridItem>
        </Grid>
      </Container>
    </CustomBox>
  );
}
