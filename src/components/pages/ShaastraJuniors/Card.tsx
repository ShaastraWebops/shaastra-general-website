import { Box, BoxProps, Flex, Heading, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import { Image, Text } from "@chakra-ui/react"
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion<BoxProps>(Box);

export const Card = ({data}) => {
    const bgTitle = useColorModeValue("secondary.300, secondary.500","#6cd4ff,#00a878");
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    const colorBorder = useColorModeValue("secondary.100", "#6cd4ff")

    return (
        <Flex flexDirection={{base:"column", xl: "row"}} padding={"15px"} height={"intial"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Flex flexDirection={"column"} width={{base:"100%", xl: "55%"}} justifyContent={"space-evenly"} alignItems={"center"} height={"fit-content"}>
                <Heading padding={"15px"} borderBottom={"dotted 4px"} borderBottomColor={colorBorder} fontSize={isNotSmallerScreen ? "4xl" : "3xl"}>
                    <MotionBox
                        whileHover={{ scale: 1.2 }}
                    >
                        <Text
                          bgGradient={`linear(to-l, ${bgTitle})`}
                          bgClip="text"
                          fontWeight="extrabold"
                        >
                            {data.title}
                        </Text>
                    </MotionBox>
                </Heading>
                <Text padding={"20px"} fontSize={isNotSmallerScreen ? "x-large" : "large"}>{data.description}</Text>
            </Flex>
            <Flex width={{base:"100%", xl: "35%"}} justifyContent={"center"}>
                <Image src={data.image} objectFit={"inherit"} boxSize={"400px"}/>
            </Flex>
        </Flex>
    )
}