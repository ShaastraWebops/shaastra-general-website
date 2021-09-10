import { Box, BoxProps, Heading, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
const MotionBox = motion<BoxProps>(Box);

export const AnHourofCode = () => {
    return (
        <Stack padding={"30px"} alignContent={"center"}>
            <Heading marginLeft={"30px"} alignItems={"flex-end"}>
                <MotionBox
                    whileHover={{ scale: 1.1 }}
                >An Hour of Code</MotionBox>
            </Heading>
            <MotionBox
            whileHover={{ scale: 1.05 }}
            >
                <Text fontSize={"2xl"} paddingTop={"60px"}>
                    The Hour of Code Event is a one-hour introduction to computer science, designed to demystify 
                    "code", to show that any student can learn the basics, and to broaden participation in the 
                    field of computer science. These coding activities typically lasting about an hour are 
                    developed so as to cater to the level of understanding of middle school students, generally 
                    in block based languages such as scratch.
                </Text>
            </MotionBox>
        </Stack>
    )
}