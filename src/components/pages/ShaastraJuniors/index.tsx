import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Button, BoxProps } from "@chakra-ui/react";
import * as React from "react"
import { useState } from "react";
import CustomBox from "../../shared/CustomBox"
import { AnHourofCode } from "./AnHourofCode";
import { BrainSqueeze } from "./BrainSqueeze";
import { ChessTournament } from "./ChessTournament";
import { JuniorMakeathon } from "./JuniorMakeathon";
import { JuniorsNights } from "./JuniorsNights";
import { OnlineScavengerHunt } from "./OnlineScavengerHunt";
import { ReverseCoding } from "./ReverseCoding";
import { ShaastraArtChallenge } from "./ShaastraArtChallenge";
import { ShaastraJuniors } from "./ShaastraJuniors";
import { Spark } from "./Spark";
import "../../../styles/ShaastraJuniors/index.css";

import { motion } from "framer-motion";

const MotionBox = motion<BoxProps>(Box);

const ShaastraJuniorsPage = () => {
    const events = ['Spark', 'Shaastra Art Challenge', 'Junior Make-a-thon', 'Online Scavenger Hunt', 'BrainSqueeze', 'Chess Tournament', 'An Hour of Code', 'Reverse Coding', 'Juniors Nights']
    const [value, setValue] = useState(0);

    return (
        <CustomBox>
            <Flex flexDirection={"column"} justifyContent={"strech"} alignItems="center" height="100vh" padding={'80px 50px'}>
              <Flex padding={"10px"} width={"100%"}>
                <Slider
                    getAriaValueText={() => events[value]}
                    value={value}
                    min={0}
                    max={events.length}
                    step={1}
                    isReadOnly = {true}
                    cursor={"unset"}
                    height={'30px'}
                >
                    <SliderTrack>
                        <SliderFilledTrack/>
                    </SliderTrack>
                    <SliderThumb boxSize={6}>
                        <Box>
                            <MotionBox
                            whileHover={{ scale: 2.0 }}
                            >
                                <Flex color={"black"}>{value + 1}</Flex>
                            </MotionBox>
                        </Box>
                    </SliderThumb>
                </Slider>
              </Flex>
              <Flex flex={1} width={"100%"} alignItems={"stretch"} justifyContent={"start"} padding={"10px"} height={"100%"}>
                <Flex flexDirection={"column"} justifyContent={"space-evenly"} padding={"0 10px"} height={"100%"}>
                    <Button onClick={() => setValue(0)} variant="ghost" _hover={{ bg: "none" }} size={"lg"}>
                        <MotionBox
                            whileHover={{ scale: 1.5 }}
                        >Shaastra Juniors</MotionBox>
                    </Button>
                    {events.map((_events, index) => 
                        value === index + 1 ? <Button>{_events}</Button> :
                        <Button onClick={() => setValue(index + 1)} variant="ghost" _hover={{ bg: "none" }} size={"lg"}>
                            <MotionBox
                                whileHover={{ scale: 1.3 }}
                            >{_events}</MotionBox>
                        </Button>)}
                </Flex>
                <Flex flex={1}>
                    {value === 0 && <ShaastraJuniors/>}
                    {value === 1 && <Spark/>}
                    {value === 2 && <ShaastraArtChallenge/>}
                    {value === 3 && <JuniorMakeathon/>}
                    {value === 4 && <OnlineScavengerHunt/>}
                    {value === 5 && <BrainSqueeze/>}
                    {value === 6 && <ChessTournament/>}
                    {value === 7 && <AnHourofCode/>}
                    {value === 8 && <ReverseCoding/>}
                    {value === 9 && <JuniorsNights/>}
                </Flex>
              </Flex>
            </Flex>
        </CustomBox>
    )
}

export default ShaastraJuniorsPage;