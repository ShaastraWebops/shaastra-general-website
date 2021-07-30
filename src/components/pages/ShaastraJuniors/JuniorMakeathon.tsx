import { Box, BoxProps, Heading, Text, Image, Flex, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import junior_makeathon from "../../../images/JuniorShaastra/junior_make-a-thon.jpg"

const MotionBox = motion<BoxProps>(Box);

export const JuniorMakeathon = () => {
    return (
        <Flex padding={"30px"}justifyContent={"space-evenly"} alignContent={"stretch"}>
            <Flex flexDirection={"column"} width={"50%"} justifyContent={"space-evenly"} alignItems={"center"}>
                <Heading padding={"15px"} borderBottom={"dashed 4px"} borderBottomColor={`${useColorModeValue("gray", "black")}`}>
                    <MotionBox
                        whileHover={{ scale: 1.2 }}
                    >Shaastra Art Challenge</MotionBox>
                </Heading>
                <MotionBox
                  whileHover={{ scale: 1.05 }}
                >
                    <Text padding={"20px"} fontSize={"2xl"}>
                        Junior Make-a-thon (JMT) is a one-of-a-kind event which centres around the ideas, 
                        imagination, and innovation skills of high school students.One of the primary aims 
                        of JMT is to promote maker culture among school students, with quality mentorship 
                        and workshops. With the help of our partners, including the IITM Research Park and 
                        IITM Incubation Cell, we encourage students to come up with solutions to problems 
                        persisting in different fields like agriculture, sustainability, healthcare, robotics, 
                        and home comfort.
                    </Text>
                </MotionBox>
                {/* <Image src={spark_1} width={"80%"} height={"70"}/> */}
            </Flex>
            <Image src={junior_makeathon} width={"40%"}/>
        </Flex>
        // <Flex padding={"30px"} justifyContent={"space-evenly"} alignItems={"center"}>
        //     <Flex flexDirection={"column"} width={"50%"} justifyContent={"space-evenly"} alignItems={"center"}>
        //         <Heading padding={"15px"}>
        //             <MotionBox
        //                 whileHover={{ scale: 1.2 }}
        //             >Junior Make-a-thon</MotionBox>
        //         </Heading>
        //         <MotionBox
        //         whileHover={{ scale: 1.05 }}
        //         >
        //             <Text paddingTop={"20px"} fontSize={"2xl"}>
                        // Junior Make-a-thon (JMT) is a one-of-a-kind event which centres around the ideas, 
                        // imagination, and innovation skills of high school students.One of the primary aims 
                        // of JMT is to promote maker culture among school students, with quality mentorship 
                        // and workshops. With the help of our partners, including the IITM Research Park and 
                        // IITM Incubation Cell, we encourage students to come up with solutions to problems 
                        // persisting in different fields like agriculture, sustainability, healthcare, robotics, 
                        // and home comfort.
        //             </Text>
        //         </MotionBox>
        //         {/* <Image src={brain_squeeze} height={"60%"}/> */}
        //     </Flex>
        //     <Image src={junior_makeathon} width={"40%"} height={"80%"}/>
        // </Flex>
    )
}