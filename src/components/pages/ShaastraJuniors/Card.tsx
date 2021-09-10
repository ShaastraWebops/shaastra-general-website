import { Box, BoxProps, Divider, Flex, Heading, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import { Image, Text } from "@chakra-ui/react"
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion<BoxProps>(Box);

export const Card = ({data}) => {
    const bgTitle = useColorModeValue("#6cd4ff, secondary.300","#6cd4ff,#00a878");
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    //const colorBorder = useColorModeValue("#0e101b", "#6cd4ff");

    return (
        <Flex flexDirection={{base:"column", xl: "row"}} padding={"15px"} height={"intial"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Flex flexDirection={"column"} width={{base:"100%", xl: "55%"}} justifyContent={"space-evenly"} alignItems={"center"} height={"fit-content"}>
                <Heading
                //  borderBottom={"dotted 4px"}
                //  borderBottomColor={colorBorder}
                 >
                    <MotionBox
                        whileHover={{ scale: 1.2 }}
                    >
                        <Text
                          fontSize={isNotSmallerScreen ? "4xl" : "3xl"}
                          padding={"15px"}
                          //bgGradient={`linear(to-l, ${bgTitle})`}
                          //bgClip="text"
                          fontWeight="extrabold"
                          borderBottom={`5px solid #00a878`}
                        >
                            {data.title}
                        </Text>
                    </MotionBox>
                    {/* <Box bgGradient={`linear(to-l, ${bgTitle})`} height={"3px"} width={"inherit"}></Box> */}
                </Heading>
                <Text padding={"20px"} fontSize={isNotSmallerScreen ? "x-large" : "large"} textAlign={"center"}>{data.description}</Text>
            </Flex>
            <Flex width={{base:"100%", xl: "35%"}} justifyContent={"center"}>
                <Image src={data.image} objectFit={"contain"} boxSize={"400px"}/>
            </Flex>
        </Flex>
    )
}