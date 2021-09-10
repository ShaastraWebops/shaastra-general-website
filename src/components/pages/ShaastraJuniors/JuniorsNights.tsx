import { Box, BoxProps, Text, Heading, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion<BoxProps>(Box);

export const JuniorsNights = () => {
    return (
        <Stack padding={"30px"} alignContent={"center"}>
            <Heading marginLeft={"30px"} alignItems={"flex-end"}>
                <MotionBox
                    whileHover={{ scale: 1.1 }}
                >Juniors Nights</MotionBox>
            </Heading>
            <MotionBox
            whileHover={{ scale: 1.05 }}
            >
                <Text fontSize={"2xl"} paddingTop={"60px"}>
                    With everyone stuck at home and all the work being moved on the web, 'Junior Nights' 
                    brings live entertainment at your doorstep. It's a flagship event of Shaastra Juniors 
                    where you can witness brilliant artists perform live from across the globe. Their 
                    mesmerizing and mind-blowing acts will undoubtedly raise your spirits and thoroughly engage you.
                </Text>
            </MotionBox>
        </Stack>
        // <Flex>
        //     With everyone stuck at home and all the work being moved on the web, 'Junior Nights' 
        //     brings live entertainment at your doorstep. It's a flagship event of Shaastra Juniors 
        //     where you can witness brilliant artists perform live from across the globe. Their 
        //     mesmerizing and mind-blowing acts will undoubtedly raise your spirits and thoroughly engage you.
        // </Flex>
    )
}