import React from "react";
import {
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

interface Probs {
  heading: string;
  description: string;
  image: string;
}

export const Events = (probs: Probs) => {
  const cardColor = useColorModeValue("secondary.100", "primary.450");

  return (
    <Flex
      bgColor={cardColor}
      mb={[10, 10, 10, 20]}
      borderRadius={10}
      boxShadow={"lg"}
      flexDir={["column", "column", "column", "row"]}
    >
      <Flex
        flexDir={"column"}
        p={10}
        my={"auto"}
        justifyContent={"space-evenly"}
        h={"100%"}
      >
        <Heading textAlign={"center"} mb={5}>
          {probs.heading}
        </Heading>
        <Text
          fontSize={[17, 20, 23]}
          mb={"auto"}
          textAlign={["center", "center", "center", "start"]}
        >
          {probs.description}
        </Text>
      </Flex>
      <Image
        src={probs.image}
        minW={"30vw"}
        objectFit={"fill"}
        minH={"100%"}
        borderRadius={10}
      />
    </Flex>
  );
};
