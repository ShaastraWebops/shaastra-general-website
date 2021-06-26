import { Box, BoxProps, Text, Heading, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion<BoxProps>(Box);

export const OnlineScavengerHunt = () => {
    return (
        <Stack padding={"30px"} alignContent={"center"}>
            <Heading marginLeft={"30px"} alignItems={"flex-end"}>
                <MotionBox
                    whileHover={{ scale: 1.1 }}
                >Online Scavenger Hunt</MotionBox>
            </Heading>
            <MotionBox
            whileHover={{ scale: 1.05 }}
            >
                <Text fontSize={"2xl"} paddingTop={"60px"}>
                    An Online Scavenger Hunt where participants must scrape the depths of the internet 
                    to find the answers. The question will be either to find certain tweets or to get a 
                    quote from a book, etc. In an online Scavenger Hunt, the participant must scrape the 
                    internet (such as find certain phrases in a book or title of a webpage or such) to 
                    find certain clues and go on to reach the final point
                </Text>
            </MotionBox>
        </Stack>
    )
}