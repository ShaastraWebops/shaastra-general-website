import { Text,Flex ,Stack , Box,BoxProps,Heading,Image,Container,SimpleGrid, Center, TextProps, useColorModeValue} from "@chakra-ui/react";
import {ChevronLeftIcon,ChevronRightIcon} from "@chakra-ui/icons";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import EXHB2 from "../../../images/Exhibitions/exhb_2.png";
import "../../../styles/Exhibitions.css";
import {  exhibitions,CauroselImages } from "./Exhibitionsdata";
import Card from "./Card";
import { motion ,useAnimation } from 'framer-motion';
import Footer from "../../shared/Footer";
import ParticlesBg from 'particles-bg';
import { useInView } from "react-intersection-observer";

const MotionBox = motion<BoxProps>(Box);
const MotionText = motion<TextProps>(Text);
const MotionChevronLeftIcon = motion(ChevronLeftIcon);
const MotionChevronRightIcon = motion(ChevronRightIcon);

const Exhibitions = ()=>{

  const [current,setCurrent] = React.useState(0);
  const length = CauroselImages.length;
  const textcolor = useColorModeValue("#00A878", "#00A878");
  const {ref,inView} = useInView();
  const animation = useAnimation();
  const CardAnimations = [{x:"-100vw"},{opacity:0},{x:"+100vw"}];

  React.useEffect(()=>{

    if(inView){
      animation.start({
          x:0,
          opacity:1,
          transition: { duration: 1 }
      })
    }else{
      animation.start( (i : any) =>
        CardAnimations[i]
      )
    }

    const timer =  setInterval(()=>{
      setCurrent((prev)=>{ return prev+1 === length ? 0 : prev +1 });
    },5000)

    return ()=> clearInterval(timer);

  }, [inView] )

  const Titlevariants = {
    lhidden:{
      x: "-100vw" 
    },
    final : {
      x: 0,
      transition:{
        duration : "1",
      }
    },
    
  }

  const AboutusVariants = {
    hidden : {
      opacity : 0
    },
    visible : {
      opacity : 1,
      transition:{
        duration : "2",
        delay : 1
      }
    }

  }

  const prevSlide = ()=>{
        setCurrent(current ===0 ? length-1 : current-1);
  }
  const nextSlide = ()=>{
    setCurrent(current === length-1 ? 0 : current+1);
  }

    return(
      <CustomBox>
       <Container maxW={'7xl'} >
        <div className="App-particles__container">
        <ParticlesBg color={"#40606e"} num={150} type="cobweb" bg={true}/>
        </div>

        <Heading lineHeight={1.1} fontWeight={600} fontSize={"5xl"}>
        <Center pt={{ base:20, md: 20 }} mb={5}>
        <MotionText as={'h1'}
            initial={"lhidden"}
            animate = {"final"}
            variants={Titlevariants}
            className = "Title" > EXHIBITIONS </MotionText>
          </Center>
  
          </Heading>
          <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          my={5} p={15}
          direction={{ base: 'column', md: 'row' }}>

          <Stack flex={1} spacing={{ base: 5, md: 10 }}>

              <MotionBox
              initial = {"hidden"}
              animate = {"visible"}
              variants = {AboutusVariants}>
              <Heading as={'h1'} mb={"3"} color={"#6CD4FF"}>
                About Us
              </Heading>
               <Text as={"p"} color={textcolor} >
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
              initial = {"hidden"}
              animate = {"visible"}
              variants = {AboutusVariants}
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
      
     <Heading
              fontWeight={300}
              fontSize={"3xl"}
              m={[2,5]} p={[2,5]}
             >
               <Center >
              <MotionText as={'h2'}
                  className = "Title"
              >PREVIOUS EXHIBITIONS</MotionText>
             </Center>
            </Heading>
       
      <Center>
      <SimpleGrid columns={[1,1,2,3]} spacing={[10,20]} ref={ref}> 
        {

          exhibitions.map( (item,index) => {
            let i = index%3;
            return(
              <MotionBox
              custom = {i}
              animate = {animation}
              className="Card"
              >
              <Card data={item} />
              </MotionBox>
            )
          })
        }
        </SimpleGrid>
      </Center>

        <Center className="slider" mb={2}>
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
                
                 <MotionBox
                 whileHover={{scale : 1.1}}
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
                 </MotionBox>
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