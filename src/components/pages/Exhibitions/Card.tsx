import * as React from "react";
import { 
  Stack,
  Box,
  BoxProps,
  Heading,
  Image,
  Tag,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react";
import { motion } from 'framer-motion';

const MotionBox = motion<BoxProps>(Box);

const Card = ({data}) =>{

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef()as React.MutableRefObject<HTMLInputElement>

    return(
       
        <MotionBox
          ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: "2"}}
          maxW={'270px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'200px'}
            w={'full'}
            src={data.image}
          />
          <Box  p={6}>
            <Stack spacing={1} align={'center'}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              <Tag size="lg">{data.year}</Tag> - {data.title}
              </Heading>
            </Stack>
            <Center>
            <Button mt={4} onClick={onOpen} >
             Read More
            </Button>
            </Center>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{data.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {data.description}
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </MotionBox>
       
        )
}

export default Card;