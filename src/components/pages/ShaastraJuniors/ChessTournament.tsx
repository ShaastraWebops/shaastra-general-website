import { Box, BoxProps, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import chess_tournament_1 from "../../../images/JuniorShaastra/chess_tournament_1.png"
import chess_tournament_2 from "../../../images/JuniorShaastra/chess_tournament_2.jpg"

const MotionBox = motion<BoxProps>(Box);

export const ChessTournament = () => {
    return (
        <Flex padding={"30px"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Flex flexDirection={"column"} width={"50%"} justifyContent={"space-evenly"} alignItems={"center"}>
                <Heading padding={"15px"}>
                    <MotionBox
                        alignItems={"start"}
                        whileHover={{ scale: 1.2 }}
                    >Chess Tournament</MotionBox>
                </Heading>
                <MotionBox
                whileHover={{ scale: 1.05 }}
                >
                    <Text paddingTop={"50px"} fontSize={"2xl"}>
                        Shaastra presents the first ever Shaastra Junior Chess Tournament after organising FIDE rated 
                        Shaastra RAPID Chess for 4 consecutive years. SJCT aims to create an environment for 
                        enthusiastic and bright young minds to compete amongst the best for the championship, and 
                        promote the wonderful game during these difficult times.
                    </Text>
                </MotionBox>
                {/* <Image src={brain_squeeze} height={"60%"}/> */}
            </Flex>
            <Flex flexDirection={"column"} height={"100%"} justifyContent={"space-evenly"}>
                <Image src={chess_tournament_1} height={"45%"}/>
                <Image src={chess_tournament_2} height={"45%"}/>
            </Flex>
        </Flex>
        // <Flex>
        //     <Flex>
        //         Shaastra presents the first ever Shaastra Junior Chess Tournament after organising FIDE rated 
        //         Shaastra RAPID Chess for 4 consecutive years. SJCT aims to create an environment for 
        //         enthusiastic and bright young minds to compete amongst the best for the championship, and 
        //         promote the wonderful game during these difficult times.
        //     </Flex>
        //     <Image src={chess_tournament_1} height={"fit-content"}/>
        //     <Image src={chess_tournament_2} height={"fit-content"}/>
        // </Flex>
    )
}