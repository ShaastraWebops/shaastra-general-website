import { Box, BoxProps, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import shaastra_art_challenge_2 from "../../../images/JuniorShaastra/shaastra_art_challenge_2.jpg"

const MotionBox = motion<BoxProps>(Box);

export const ShaastraArtChallenge = () => {
    return (
        <Flex padding={"30px"}justifyContent={"space-evenly"} alignContent={"stretch"}>
            <Flex flexDirection={"column"} width={"50%"} justifyContent={"space-evenly"} alignItems={"center"}>
                <Heading padding={"15px"} borderBottom={"dashed 4px"} borderBottomColor={`${useColorModeValue("gray", "black")}`}>
                    <MotionBox
                        whileHover={{ scale: 1.2 }}
                    >Shaastra Art Challenge</MotionBox>
                </Heading>
                <MotionBox
                  whileHover={{ scale: 1.05 }}
                >
                    <Text padding={"20px"} fontSize={"2xl"}>
                            Shaastra represents the Spirit of Engineering and stands with bated breath to hear about 
                            different technological advancements in different fields. But not all of these advancements 
                            are brought to our notice. To change this culture and to become more aware of the progress 
                            that we've made till now, Shaastra organises the "Art of Technology" to encourage children 
                            to draw about technology and it's inner workings.
                    </Text>
                </MotionBox>
                {/* <Image src={spark_1} width={"80%"} height={"70"}/> */}
            </Flex>
            <Image src={shaastra_art_challenge_2} width={"40%"}/>
        </Flex>
        // <Flex padding={"30px"}justifyContent={"space-evenly"}>
        //     <Flex flexDirection={"column"} width={"50%"} justifyContent={"space-evenly"} alignItems={"center"}>
        //         <Heading padding={"15px"}>
        //             <MotionBox
        //                 whileHover={{ scale: 1.2 }}
        //             >Shaastra Art Challenge</MotionBox>
        //         </Heading>
        //         <MotionBox
        //         whileHover={{ scale: 1.05 }}
        //         >
        //             <Text paddingBottom={"10px"} fontSize={"1.9xl"}>
        //                 Shaastra represents the Spirit of Engineering and stands with bated breath to hear about 
        //                 different technological advancements in different fields. But not all of these advancements 
        //                 are brought to our notice. To change this culture and to become more aware of the progress 
        //                 that we've made till now, Shaastra organises the "Art of Technology" to encourage children 
        //                 to draw about technology and it's inner workings.
        //             </Text>
        //         </MotionBox>
        //         <Image src={shaastra_art_challenge_1} height={"60%"}/>
        //     </Flex>
        //     <Image src={shaastra_art_challenge_2} width={"40%"}/>
        // </Flex>
    )
}