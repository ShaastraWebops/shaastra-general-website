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

import { GridItem, Grid, Heading, Text, Image, Flex, useBreakpointValue, Center } from "@chakra-ui/react";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import CustomBox from "../shared/CustomBox";

const projects = [
    [
        {
            imgUrl: "/smartmirror.png",
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
            imgUrl: "/Projection Mapping.jpeg",
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
            imgUrl: "/Speed Painting Bot.PNG",
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
    let { id }: { id: any | null } = useParams();
    const {
        location: { state },
    }: any = useHistory();
    if (isNaN(parseInt(id))) return <h1>404 Not Found</h1>;
    else id = parseInt(id);
    const data = projects[(id - 1) % 3];
    return (
        <CustomBox>
            {state && state.title && (
                <Heading textAlign="center" textDecoration="underline" color="#00AB74">
                    {state.title}
                </Heading>
            )}
            <Grid templateColumns="repeat(1, 1fr)" className="projects" rowGap="10" p="8">
                {data &&
                    data.map(({ imgUrl, title, desc }, index) => (
                        <GridItem key={title} data-aos="zoom-in">
                            <Heading color="#35D7FF" textDecoration="underline" textAlign="center" margin="4rem 0">
                                {title}
                            </Heading>
                            <br />
                            <Flex direction={(direction || "column") as any}>
                                <div style={{ width }}>
                                    <Center>
                                        <Image width="90%" src={imgUrl} alt={title} maxWidth="100%" />
                                    </Center>
                                </div>
                                <div style={{ width,display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                    <Text textAlign="justify" fontFamily="cursive">{desc}</Text>
                                </div>
                            </Flex>
                        </GridItem>
                    ))}
            </Grid>
        </CustomBox>
    );
}
