import { Text,Flex ,Stack , Box,BoxProps,Heading,Image,Container,SimpleGrid, Center, TextProps, useColorModeValue, VStack} from "@chakra-ui/react";
// import {ChevronLeftIcon,ChevronRightIcon} from "@chakra-ui/icons";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import EXHB2 from "../../../images/Exhibitions/exhb_2.png";
import "../../../styles/Exhibitions.css";
import {  exhibitions,CauroselImages, Titlevariants, AboutusVariants, AboutusData } from "./Exhibitionsdata";
import Card from "./Card";
import { motion ,useAnimation } from 'framer-motion';
import Footer from "../../shared/Footer";
import ParticlesBg from 'particles-bg';
import { useInView } from "react-intersection-observer";

const MotionBox = motion<BoxProps>(Box);
const MotionText = motion<TextProps>(Text);
// const MotionChevronLeftIcon = motion(ChevronLeftIcon);
// const MotionChevronRightIcon = motion(ChevronRightIcon);

const Exhibitions = ()=>{

  const [current,setCurrent] = React.useState(0);
  const length = CauroselImages.length;
  const {ref,inView} = useInView();
  const animation = useAnimation();
  const CardAnimations = [{x:"-100vw"},{opacity:0},{x:"+100vw"}];
  const Titlecolor = useColorModeValue("#1c72c7","#00d0ff");

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

  // const prevSlide = ()=>{
  //       setCurrent(current ===0 ? length-1 : current-1);
  // }
  // const nextSlide = ()=>{
  //   setCurrent(current === length-1 ? 0 : current+1);
  // }

    return(
      <CustomBox>
       <Container maxW={'7xl'} className="AboutUsContainer">
        <div className="App-particles__container">
        <ParticlesBg color={"#4492b3"} num={150} type="cobweb" bg={true}/>
        </div>

        <Heading lineHeight={1.1} fontWeight={600} fontSize={"5xl"}>
        <Center pt={{ base:20, md: 20 }} mb={5}>
        <MotionText as={'h1'}
            initial={"lhidden"}
            animate = {"final"}
            variants={Titlevariants}
            className = "Title"
            color={Titlecolor}> EXHIBITIONS </MotionText>
          </Center>
  
          </Heading>
          <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          my={5} p={15}
          direction={{ base: 'column-reverse', md: 'row' }}>

          <Stack flex={1} spacing={{ base: 5, md: 10 }}>

              <MotionBox
              initial = {"hidden"}
              animate = {"visible"}
              variants = {AboutusVariants}>
              <Heading as={'h1'} mb={"3"}>
                About Us
              </Heading>
               <Text 
                style = {{
                  fontSize: "20px",
                  letterSpacing : "1px",
                  fontFamily : 'Roboto',
                  zIndex : 1
                }}>
                 {AboutusData}
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
               height={["full","300px"]}
               width ={["full","90%"]}
              rounded={'2xl'}
              boxShadow={'2xl'}
              overflow={'hidden'}
              mt={["0px","60px"]}
              >
              <Image
                alt={'Display Image'}
                fit={"cover"}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={EXHB2}
              />
            </MotionBox>
          </Flex>
        </Stack>

      </Container>
           
      <Center mb={5}>
      <VStack>
      <Heading
              fontWeight={500}
              fontSize={["2xl","3xl","3xl"]}
               m={[2,5]} 
              className = "Title"
              color={Titlecolor}
              p={3}
             >
              PREVIOUS EXHIBITIONS
            </Heading>
        <SimpleGrid columns={[1,1,2,3]} spacing={[10,20]} ref={ref} mb={5} pb={20}> 
        {

          exhibitions.map( (item,index) => {
            let i = index%3;
            return(
              <MotionBox
              custom = {i}
              animate = {animation}
              className="ECard"
              key= {index}
              >
              <Card data={item} />
              </MotionBox>
            )
          })
        }
        </SimpleGrid>
      </VStack>
      </Center>

        {/* <Center className="slider" mb={2}>
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
       </Center> */}
       {/* <SimpleGrid columns={[1,1,2,3]}  spacingX={1} spacingY={1}  m={5}>
          {
            CauroselImages.map((img,index)=>{
              return(
                  <Image
                    alt={'Carousel Image'}
                    className="CarouselImg"
                    borderRadius="10px"
                    src={img}
                    margin={-1}
                  />
              )
            })
          }
        </SimpleGrid> */}
       <Footer designed={[{name : "Srinivas",mail :"ch19b052@smail.iitm.ac.in"}]} />
     </CustomBox>
    
    );

}

export default Exhibitions;