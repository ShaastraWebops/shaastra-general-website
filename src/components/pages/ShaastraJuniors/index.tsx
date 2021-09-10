import { Box, Flex, Slider, SliderFilledTrack, SliderTrack, Button, BoxProps, useColorModeValue, useMediaQuery, Divider } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import * as React from "react"
import { useState } from "react";
import CustomBox from "../../shared/CustomBox"
import { Card } from "./Card";
import "../../../styles/ShaastraJuniors/index.css";

import { motion } from "framer-motion";
import { shaastraJunoirsData } from "./Data";
import { ArrowForwardIcon, QuestionIcon } from "@chakra-ui/icons";

const MotionBox = motion<BoxProps>(Box);

const ShaastraJuniorsPage = () => {
    const [value, setValue] = useState(0);
    const bgNav = useColorModeValue("(#fee9e1,secondary.100,highlight.300)","(highlight,secondary.300,#262c2a)");
    const bgButton = useColorModeValue("white","#2c262a");
    const bgProgress = useColorModeValue("secondary.300,#6cd4ff", ",#6cd4ff, secondary.300");
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

    if(isNotSmallerScreen)
        return (
            <CustomBox>
                <Flex flexDirection={"column"} justifyContent={"strech"} alignItems="center" paddingTop={'80px'} minHeight={"100vh"}>
                <Flex width={"100%"}>
                    <Slider
                        getAriaValueText={() => shaastraJunoirsData[value].title}
                        value={value}
                        min={0}
                        max={shaastraJunoirsData.length - 1}
                        step={1}
                        isReadOnly = {true}
                        cursor={"unset"}
                        height={'10px'}
                    >
                        <SliderTrack>
                            <SliderFilledTrack bgGradient={`linear(to-l, ${bgProgress})`}/>
                        </SliderTrack>
                    </Slider>
                </Flex>
                <Flex flex={1} width={"100%"} alignItems={"stretch"} justifyContent={"start"} padding={"10px"} height={"100%"}>
                    <Flex
                    flexDirection={"column"}
                    justifyContent={"space-evenly"}
                    margin={"20px"}
                    padding={"10px"}
                    //height={"100%"}
                    //bgGradient={`linear(to-l, ${bgProgress})`}
                    //borderRadius={"20px"}
                    //width={"280px"}
                    >
                        {shaastraJunoirsData.map((_events, index) => 
                            index === 0 ? 
                            <Button
                            //   leftIcon={<QuestionIcon/>}
                              onClick={() => setValue(index)}
                              //bg={bgButton}
                              size={"lg"}
                              _hover={{ bg: {bgButton} }}
                               >
                                {_events.title}
                            </Button>
                            : (value === index ? 
                            <Button
                             //bg={bgButton}
                             size={"lg"}
                             _hover={{ bg: {bgButton} }}
                            //  rightIcon={<ArrowForwardIcon />}
                            >
                                {_events.title}
                            </Button>
                            : <Button
                                onClick={() => setValue(index)}
                                variant="ghost"
                                _hover={{ bg: "none" }}
                                size={"lg"}
                                //textColor={"black"}
                                //justifyContent={"left"}
                                >
                                <MotionBox
                                    whileHover={{ scale: 1.2 }}
                                >{_events.title}</MotionBox>
                            </Button>))}
                    </Flex>
                    <Flex flex={1}>
                        <Card data={shaastraJunoirsData[value]}/>
                    </Flex>
                </Flex>
                </Flex>
            </CustomBox>
        )
    
    return (
        <CustomBox>
            <Flex paddingTop={'60px'} flexDirection={"column"}>
                {shaastraJunoirsData.map((_item) => 
                    <Card data={_item}/>
                )}
            </Flex>
        </CustomBox>
    );
}

export default ShaastraJuniorsPage;