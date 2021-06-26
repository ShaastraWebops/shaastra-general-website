import { Text,Flex ,Stack , Box,BoxProps,Heading,Image,Container,SimpleGrid, Center, TextProps} from "@chakra-ui/react";
import {ChevronLeftIcon,ChevronRightIcon} from "@chakra-ui/icons";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import EXHB2 from "../../../images/Exhibitions/exhb_2.png";
import "../../../styles/Exhibitions.css";
import {  exhibitions,CauroselImages } from "./Exhibitionsdata";
import Card from "./Card";
import { motion ,AnimatePresence } from 'framer-motion';
import Footer from "../../shared/Footer";
import ParticlesBg from 'particles-bg';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionChevronLeftIcon = motion(ChevronLeftIcon);
const MotionChevronRightIcon = motion(ChevronRightIcon);

const Exhibitions = ()=>{

  const [current,setCurrent] = React.useState(0);
  const length = CauroselImages.length;

  const prevSlide = ()=>{
        setCurrent(current ===0 ? length-1 : current-1)
  }
  const nextSlide = ()=>{
    setCurrent(current === length-1 ? 0 : current+1)
}
    return(
      <CustomBox>
       <Container maxW={'7xl'}  >
      <div className="App-particles__container">
       <ParticlesBg color="#ff006f" num={200} type="cobweb" bg={true}/>
       </div>
       
       
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Center>
              <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <MotionText as={'h1'}
                  initial={{x: "-100vw" }}
                  animate = {{x: 0}}
                  transition={{duration : "1"}}
                  className = "Exhibitions"
              >
                EXHIBITIONS
              </MotionText>

            </Heading>
              </Center>
              <MotionBox
              initial = {{opacity : 0}}
              animate = {{opacity : 1}}
              transition ={{delay: 1.5,duration : "1.5" }}>
              <Heading as={'h1'} mb={"3"}>
                About Us
              </Heading>
               <Text as={"p"}
                >
                 Shaastra Exhibitions is a platform to showcase cutting Edge technology.
                 Exhibitions provide an opportunity for a large number of buyers and sellers in an industry to interact with
                 each other.
                 They are responsible for conveying the ideas of the participants from a 
                  technologically practical perspective and as well as give the audience a 
                  glimpse into the  latest developments in technology
                  They offer an unparalleled and ideal opportunity to showcase innovative products to a broad
                 spectrum of people.
            </Text>
              </MotionBox>
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
              overflow={'hidden'}
              mt={["0px","60px"]}
              >
              
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
     
      <Container maxW={'7xl'} mt={4}>
      <Center>
      <SimpleGrid columns={[1,1,2,3]} spacing={[10,20]}> 
        {
          exhibitions.map(item => {
            return(
              <MotionBox
              whileHover={{ scale: 1.1}}
              initial = {{opacity : 0}}
              animate = {{opacity : 1}}
              transition ={{delay: 2,duration : "1.5" }}
              className="Card"
              >
              <Card data={item} />
              </MotionBox>
            )
          })
        }
        </SimpleGrid>
      </Center>
      </Container>
        <Center className="slider" mb={5}>
        <MotionChevronLeftIcon
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="left-arrow" onClick={prevSlide}
         />
        <MotionChevronRightIcon 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="right-arrow" onClick={nextSlide} />
          {
            CauroselImages.map((img,index)=>{
              return(
               
               <Center
               className={index===current ? 'slide active':'slide'}
               key = {index}
               >
                  {
                   index === current && (<Image
                    alt={'Carousel Image'}
                    fit={'cover'}
                    align={'center'}
                    className="CarouselImg"
                    borderRadius="10px"
                    src={img}
    
                  />)
                  }
               </Center>
    
              )
            })
          }
       </Center>
       <Footer></Footer>
     </CustomBox>
    
    );

}

export default Exhibitions;