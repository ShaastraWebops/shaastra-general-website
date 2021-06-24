import { Text,Flex ,Stack , Box,BoxProps,Heading,Image,Container,SimpleGrid, Center} from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import EXHB2 from "../../../images/Exhibitions/exhb_2.png";
import Particles from "react-tsparticles";
import "../../../styles/Exhibitions.css";
import { options, exhibitions,CauroselImages } from "./Exhibitionsdata";
import Card from "./Card";
import { motion ,AnimatePresence } from 'framer-motion';

const MotionBox = motion<BoxProps>(Box);

const Exhibitions = ()=>{

    return(
      <CustomBox>
     
       <Particles options={ options } height="30%" className="App-particles__container" />
  
       <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'h1'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                }}>
                 Exhibitions
              </Text>
            </Heading>
            <Heading as={'h1'}>
                About Us
              </Heading>
            <Text fontSize="lg">
                 Shaastra Exhibitions is a platform to showcase cutting Edge technology.
                 Exhibitions provide an opportunity for a large number of buyers and sellers in an industry to interact with
                 each other.
                 They are responsible for conveying the ideas of the participants from a 
                  technologically practical perspective and as well as give the audience a 
                  glimpse into the  latest developments in technology
                  They offer an unparalleled and ideal opportunity to showcase innovative products to a broad
                 spectrum of people.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <MotionBox
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={EXHB2}
              />
            </MotionBox>
          </Flex>
        </Stack>
      </Container>
     
      <Container maxW={'7xl'}>
      <Center>
      <SimpleGrid columns={[1,1,2,3]} spacing={[10,20]}> 
        {
          exhibitions.map(item => {
            return(
              
              <Card data={item} />
             
            )
          })
        }
        </SimpleGrid>
      </Center>
        </Container>
     </CustomBox>
    );

}

export default Exhibitions;