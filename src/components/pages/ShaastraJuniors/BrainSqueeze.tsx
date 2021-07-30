import { Box, BoxProps, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import brain_squeeze from "../../../images/JuniorShaastra/brain_squeeze.jpg"

const MotionBox = motion<BoxProps>(Box);

export const BrainSqueeze = () => {
    return (
        <Flex padding={"30px"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Flex flexDirection={"column"} width={"50%"} justifyContent={"space-evenly"} alignItems={"center"}>
                <Heading padding={"15px"}>
                    <MotionBox
                        whileHover={{ scale: 1.2 }}
                    >Brain Squeeze</MotionBox>
                </Heading>
                <MotionBox
                whileHover={{ scale: 1.05 }}
                >
                    <Text paddingTop={"50px"} fontSize={"2xl"}>
                        BrainSqueeze is all about putting your brain into overdrive mode while cracking arduous 
                        puzzles. Students get to experience the bliss of solving mind-bending questions in Brain 
                        Squeeze. An entirely logical event which puts your reasoning and analytical skills to 
                       the test with exceptionally tricky questions.
                    </Text>
                </MotionBox>
                {/* <Image src={brain_squeeze} height={"60%"}/> */}
            </Flex>
            <Image src={brain_squeeze} width={"40%"} height={"80%"}/>
        </Flex>
    )
}