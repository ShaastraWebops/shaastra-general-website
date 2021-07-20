import * as React from "react";
import { Text, VStack, Code, useColorModeValue, Flex } from "@chakra-ui/react";
import { ReactComponent as DiceOutlineDarkAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
import { ReactComponent as DiceOutlineLightAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";

import CustomBox from "../shared/CustomBox";

interface Props {}

const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );
  // const color = useColorModeValue("secondary", "link")

  return (
    <CustomBox>
      <div className="Home">
        <div className="Home_sideNavBar"></div>
        <section className="Home_landingPage"></section>
        <section className="Home_whoAreWe"></section>
        <section className="Home_WorkshopsEvents"></section>
        <section className="Home_Speakers"></section>
        <section className="Home_Testimonials"></section>
      </div>
    </CustomBox>
  );
};

export default Home;
