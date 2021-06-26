import { Box, BoxProps, Heading, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion<BoxProps>(Box);

export const ShaastraJuniors = () => {
    return (
        <Stack className="sj" padding={"30px"}>
            <Heading marginRight={"30px"}>
                <MotionBox
                    whileHover={{ scale: 1.2 }}
                >Shaastra Juniors</MotionBox>
            </Heading>
            <MotionBox
              whileHover={{ scale: 1.05 }}
            >
                <Text fontSize={"2xl"} paddingTop={"50px"}>
                Shaastra Juniors 2021, form Shaastra IIT Madras, is the first-ever completely online 
                two-day Tech fest specially aimed at apreading awareness about technology among school students.
                A fun-filled weekend filled with events, shows, lectures and workshops is sure to have each and 
                every student yearning for more.
                </Text>
            </MotionBox>
            <MotionBox
              whileHover={{ scale: 1.05 }}
            >
                <Text fontSize={"2xl"} paddingTop={"10px"}>
                Shaastra Juniors is conducted online so each and every student can participate from the comfort 
                of their home. Shaastra Juniors has special trophies for the beat school and excellent students, 
                with schools competing against one another to win the Shaastra Juniors Championship
                </Text>
            </MotionBox>
        </Stack>
    )
}