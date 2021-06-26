import { Box, BoxProps, Flex, Heading } from '@chakra-ui/react';
import { Image, Text } from "@chakra-ui/react"
import { motion } from 'framer-motion';
import React from 'react';
import spark_1 from "../../../images/JuniorShaastra/spark_1.png"
import spark_2 from "../../../images/JuniorShaastra/spark_2.jpg"

const MotionBox = motion<BoxProps>(Box);

export const Spark = () => {
    return (
        <Flex padding={"30px"}justifyContent={"space-evenly"}>
            <Flex flexDirection={"column"} width={"50%"} justifyContent={"space-evenly"} alignItems={"center"}>
                <Heading padding={"15px"}>
                    <MotionBox
                        whileHover={{ scale: 1.2 }}
                    >Spark</MotionBox>
                </Heading>
                <MotionBox
                  whileHover={{ scale: 1.05 }}
                >
                    <Text paddingBottom={"10px"} fontSize={"1.9xl"}>
                        Spark is a national platform where students compete with each other across technical quizzes, 
                        case studies and presentations, and in the process improve themselves - all at no charge. Last 
                        year’s edition of the Spark Junior Quiz was conducted in 20 cities and saw a participation of 
                        more than 3000+ students across the nation. From introducing quizzing to students to organising 
                        a coveted nationwide inter school competition, Spark has been growing in multifolds since inception.
                    </Text>
                </MotionBox>
                <Image src={spark_1} width={"80%"}/>
            </Flex>
            <Image src={spark_2} height={"100%"}/>
        </Flex>
    )
}