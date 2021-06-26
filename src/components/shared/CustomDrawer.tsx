import * as React from "react";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Link } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CustomDrawer = (props: Props) => {
  const { isOpen } = useDisclosure({ isOpen: props.isOpen });
  const closeButtonSize = useBreakpointValue({ base: "lg", lg: "xl" });

  return (
    <Drawer
      placement="right"
      onClose={props.onClose}
      isOpen={isOpen}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <Heading as="h3" size="lg" p={3}>Our Menu</Heading>
          <DrawerCloseButton
            variant="unstyled"
            mt={3}
            mr={3}
            p={2}
            outline="none"
            borderRadius="50%"
            size={closeButtonSize}
          />
        </DrawerHeader>
        <DrawerBody overflowY="scroll">
          <Flex flexDirection="row" justifyContent="center" alignItems="center" flex={1}>
            <Flex flexDirection="column" justifyContent="flex-start" height="90%" flex={1}>
              <Text className="menu-text" fontSize={{ base: 28, lg: 40 }} fontFamily={{lg: "monospace"}} fontStyle={{ base: "normal", lg: "italic" }}  pl={{ base: 3, lg: 12 }} p={3} mb={{ base: 3, lg: 8 }}><Link to="/">Events and Workshops</Link></Text>
              <Text className="menu-text" fontSize={{ base: 28, lg: 40 }} fontFamily={{lg: "monospace"}} fontStyle={{ base: "normal", lg: "italic" }}  pl={{ base: 3, lg: 12 }} p={3} mb={{ base: 3, lg: 8 }}><Link to="/">Exhibitions</Link></Text>
              <Text className="menu-text" fontSize={{ base: 28, lg: 40 }} fontFamily={{lg: "monospace"}} fontStyle={{ base: "normal", lg: "italic" }}  pl={{ base: 3, lg: 12 }} p={3} mb={{ base: 3, lg: 8 }}><Link to="/">Shaastra Nights</Link></Text>
              <Text className="menu-text" fontSize={{ base: 28, lg: 40 }} fontFamily={{lg: "monospace"}} fontStyle={{ base: "normal", lg: "italic" }}  pl={{ base: 3, lg: 12 }} p={3} mb={{ base: 3, lg: 8 }}><Link to="/">Schools</Link></Text>
              <Text className="menu-text" fontSize={{ base: 28, lg: 40 }} fontFamily={{lg: "monospace"}} fontStyle={{ base: "normal", lg: "italic" }}  pl={{ base: 3, lg: 12 }} p={3} mb={{ base: 3, lg: 8 }}><Link to="/">Speakers</Link></Text>
              <Text className="menu-text" fontSize={{ base: 28, lg: 40 }} fontFamily={{lg: "monospace"}} fontStyle={{ base: "normal", lg: "italic" }}  pl={{ base: 3, lg: 12 }} p={3} mb={{ base: 3, lg: 8 }}><Link to="/">Sponsors</Link></Text>
              <Text className="menu-text" fontSize={{ base: 28, lg: 40 }} fontFamily={{lg: "monospace"}} fontStyle={{ base: "normal", lg: "italic" }}  pl={{ base: 3, lg: 12 }} p={3} mb={{ base: 3, lg: 8 }}><Link to="/">Team</Link></Text>
            </Flex>
            <Flex display={{base: "none", lg: "flex"}} justifyContent="center" alignItems="center" flex={1}>
              Hello
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
