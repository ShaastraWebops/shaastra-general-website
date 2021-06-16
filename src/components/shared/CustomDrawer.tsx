import * as React from "react";
import { Flex } from "@chakra-ui/layout";
// import { useColorModeValue } from "@chakra-ui/color-mode";
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
import { Button } from "@chakra-ui/button";

interface Props {
  isOpen: boolean;  
  onClose: () => void
}

const CustomDrawer = (props: Props) => {

//   const bg = useColorModeValue("secondary.100", "primary.500");
  const closeButtonSize = useBreakpointValue({base: "lg", lg: "xl"})
  const { isOpen } = useDisclosure({ isOpen: props.isOpen, });

  return (
    <Drawer
      placement="right"
      onClose={props.onClose}
      isOpen={isOpen}
      size="full"
      // colorScheme="primary"
      variant="primary"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          Our Menu
          <DrawerCloseButton variant="unstyled" mt={3} mr={3} p={2} outline="none" borderRadius="50%" size={closeButtonSize}/> 
        </DrawerHeader>
        <DrawerBody>Hello</DrawerBody>
        <Button variant="primary">Check</Button>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
