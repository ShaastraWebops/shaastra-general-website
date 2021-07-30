import { Box, BoxProps, Heading, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion<BoxProps>(Box);

export const ReverseCoding = () => {
    return (
        <Stack padding={"30px"} alignContent={"center"}>
            <Heading marginLeft={"30px"} alignItems={"flex-end"}>
                <MotionBox
                    whileHover={{ scale: 1.1 }}
                >Reverse Coding</MotionBox>
            </Heading>
            <MotionBox
            whileHover={{ scale: 1.05 }}
            >
                <Text fontSize={"2xl"} paddingTop={"60px"}>
                    Think you're good at problem solving? Well there are many ways to brag, let’s see which 
                    one you pick. This event looks for the real star that stands up to the ability of 
                    creativity and logic to reverse engineer. So, get ready for the ultimate challenge 
                    of hardcore logic, preceded by a prelims to test your mettle.
                </Text>
            </MotionBox>
        </Stack>
    )
}