// import { GridItem, Grid, Heading, Text, Image, Flex } from "@chakra-ui/react";
// import React from "react";
// import { useHistory, useParams } from "react-router-dom";

// const projects = [
//     [
//         {
//             imgUrl: "https://bit.ly/sage-adebayo",
//             title: "Project 1",
//             desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
//         Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
//         Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
//         Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
//         Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
//         },
//         {
//             imgUrl: "https://bit.ly/sage-adebayo",
//             title: "Project 2",
//             desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
//         Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
//         Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
//         Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
//         Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
//         },
//         {
//             imgUrl: "https://bit.ly/sage-adebayo",
//             title: "Project 3",
//             desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
//         Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
//         Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
//         Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
//         Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
//         },
//     ],
//     [
//         {
//             imgUrl: "https://bit.ly/sage-adebayo",
//             title: "Project 1",
//             desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
//         Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
//         Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
//         Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
//         Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
//         },
//         {
//             imgUrl: "https://bit.ly/sage-adebayo",
//             title: "Project 2",
//             desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
//         Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
//         Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
//         Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
//         Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
//         },
//         {
//             imgUrl: "https://bit.ly/sage-adebayo",
//             title: "Project 3",
//             desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
//         Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
//         Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
//         Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
//         Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
//         },
//     ],
//     [
//         {
//             imgUrl: "https://bit.ly/sage-adebayo",
//             title: "Project 1",
//             desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
//         Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
//         Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
//         Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
//         Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
//         },
//         {
//             imgUrl: "https://bit.ly/sage-adebayo",
//             title: "Project 2",
//             desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
//         Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
//         Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
//         Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
//         Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
//         },
//         {
//             imgUrl: "https://bit.ly/sage-adebayo",
//             title: "Project 3",
//             desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
//         Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
//         Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
//         Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
//         Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
//         },
//     ],
// ];

// export default function Project() {
//     let { id }: { id: any | null } = useParams();
//     const {
//         location: { state },
//     } = useHistory();
//     if (isNaN(parseInt(id))) return <h1>404 Not Found</h1>;
//     else id = parseInt(id);
//     const data = projects[(id - 1) % 3];
//     const { title } = state as any;
//     return (
//         <>
//             {title && (
//                 <Heading textAlign="center" marginTop="10" textDecoration="underline" color="#00AB74">
//                     {title}
//                 </Heading>
//             )}
//             <Grid templateColumns="repeat(1, 1fr)" className="projects" rowGap="10" p="20">
//                 {data &&
//                     data.map(({ imgUrl, title, desc }) => (
//                         <GridItem key={title}>
//                             <Heading color="#35D7FF" textDecoration="underline">
//                                 {title}
//                             </Heading>
//                             <br />
//                             <Flex>
//                                 <div>
//                                     <Image width="60%" src={imgUrl} alt={title} />
//                                 </div>
//                                 <div>
//                                     <Text color="#FFE8E0" textAlign="justify">
//                                         {desc}
//                                     </Text>
//                                 </div>
//                             </Flex>
//                         </GridItem>
//                     ))}
//             </Grid>
//         </>
//     );
// }

import { GridItem, Grid, Heading, Text, Image, Flex, useBreakpointValue, Center, Container, background } from "@chakra-ui/react";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "../../main.css";
import CustomBox from "../shared/CustomBox";
import Particles from 'react-tsparticles';
const projects = [
    [
        {
            imgUrl: "/Copy of H0019396.JPG",
            title: "Smart Mirror",
            desc: `Smart Mirrors are part of an optimistic vision of the future that imagines a world where screens and data are everywhere, ready to feed you whatever information you need at a moment’s notice. In this project, we have integrated Alexa voice-controlled virtual assistant into an everyday-use mirror along with many other smart features like google calendar, weather etc.
            `,
        },
        {
            imgUrl: "/Persistence of Vision.jpg",
            title: "Persistence of Vision",
            desc: `A POV display is an array of LEDs, mounted on a motor, used for displaying pictures or videos. It works on the principle of Persistence of vision where our mind, rather than recognising the instantaneous position of the LED strip, perceives it as a continuous picture, due to the (very fast) motion of the LEDs.`,
        },
        {
            imgUrl: "/IMG_2050.JPG",
            title: "Projection Mapping",
            desc: `The aim of the project is to bring out the best effects out of the video editing softwares used, to create a classic visual sensation for the audience. This project is about 3D illusions. A 2D video is mapped onto a 3D object which ultimately gives out a 3D effect.`,
        },
    ],
    [
        {
            imgUrl: "/3D Hologram.JPG",
            title: "Project 1",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
        {
            imgUrl: "/envisage_3.png",
            title: "Project 2",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
        {
            imgUrl: "/IMG_2037.JPG",
            title: "Project 3",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
    ],
    [
        {
            imgUrl: "/GameDev Zenith.jpeg",
            title: "GameDev Zenith",
            desc: `This project is a game with a similar experience to current spaceship games using UnityEngine, ultimately giving the user an immersed feel of observing and controlling a spaceship.`,
        },
        {
            imgUrl: "/envisage_4.png",
            title: "Project 2",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
        {
            imgUrl: "/Techno Cultural Show.jpg",
            title: "Project 3",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
    ],
];

export default function Project() {
    const direction = useBreakpointValue({ base: "column", md: "row" });
    const width = useBreakpointValue({ base: "100%" });
    const co = useBreakpointValue({ base: 1, md: 2 });


    const wd = useBreakpointValue({ base: "100%", md: "60%" });
    const height = useBreakpointValue({ base: "60", lg: "50" });
    const h = useBreakpointValue({ base: "400", md:"500" });
  
    const ss = useBreakpointValue({ base: "100%", md: "80%" });
    
    const cols = useBreakpointValue({ base: 1, md: 3 });
    const beforesDisplay = useBreakpointValue({ base: "none", md: "block" });


    let { id }: { id: any | null } = useParams();
    const {
        location: { state },
    }: any = useHistory();
    if (isNaN(parseInt(id))) return <h1>404 Not Found</h1>;
    else id = parseInt(id);
    const data = projects[(id - 1) % 3];
    return (


        <div className="shows1"
        style={{
            zIndex:1
            
        }}><Particles
        className='particles'
        style={{
           
            position: "fixed",
          width: "100%",
          height: "100vh",
          zIndex:0
        }}
      id="tsparticles"
      options={{ 
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#f30a0a",
          },
          links: {
            color: "#15f306",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true, }}
        />  
        
        <CustomBox > </CustomBox>
        
            {state && state.title && (
              <Center >
                <Heading textAlign="center" textDecoration="underline" color="#00AB74" verticalAlign="center" marginTop="20px" padding="0">
                    {state.title}
                </Heading>
                </Center>
            )}
            {/* <Grid templateColumns={`repeat(${co}, 1fr)`} className="projects"> */}
            <Flex padding="0 20px" className="sections--container" direction="column" minHeight="60vh">
                {data &&
                    data.map(({ imgUrl, title, desc }, index) => (
                      <Container minWidth="98%" className="sections__section" width={wd} margin="5">
                      <Heading data-aos={`fade-${index % 2 === 0 ? "right" : "left"}`} as="span" textAlign="center" color="#1b22f1" fontFamily="monospace">
                          {title}
                      </Heading>
                      <br />
                      <Grid data-aos={`fade-${index % 2 === 0 ? "right" : "left"}`} templateColumns={`repeat(${co}, 1fr)`}>
                          <GridItem order={index % 2 === 0 ? 0 : 2} >
                            <Center>
                            <div style={{ width,display: 'flex', justifyContent: "center", alignItems: "center" ,zIndex:1}}>
                              <Text textAlign="justify" justifyContent="center" alignItems="center" alignContent="center" verticalAlign="center" fontSize="xl" style={{fontFamily: "monospace"}} >
                                  {desc}
                              </Text>
                              </div>
                              </Center>
                          </GridItem>
                          <GridItem verticalAlign="top">
                              <Center>
                                  <Image width={ss} height = {h} src={imgUrl} borderRadius="8"  style={{
             zIndex:1
         }}  />
                              </Center>
                          </GridItem>
                      </Grid>
                  </Container>
        //                 <GridItem key={title} data-aos="zoom-in">
        //                     <Heading color="#35D7FF" textDecoration="underline" textAlign="center" margin="4rem 0">
        //                         {title}
        //                     </Heading>
        //                     <br />
        //                     <Flex direction={(direction || "column") as any}>
                               
        //                             <Center>
        //                                 <Image width="90%" src={imgUrl} alt={title} maxWidth="100%" maxheight="100%" style={{
        //     zIndex:1,
        //     justifyContent: "center", alignItems: "center"
        // }} />
        //                             </Center>
        //                             {/* </GridItem>
        //                             <GridItem key={title} data-aos="zoom-in"> */}
                             
        //                         <div style={{ width,display: 'flex', justifyContent: "center", alignItems: "center" ,zIndex:1}}>
        //                             <Text textAlign="justify" fontFamily="cursive">{desc}</Text>
        //                         </div>
        //                     </Flex>
        //                 </GridItem>
                    ))}
            {/* </Grid> */}
            </Flex>
        
        </div>
    );
}
