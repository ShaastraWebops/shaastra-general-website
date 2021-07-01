import * as React from "react";
import { 
  Stack,
  Box,
  Text,
  Image,
  Tag,
  Heading,
  useColorModeValue,
 
} from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionBox = motion(Box);
const Card = ({data}) =>{
    
  const Cardcolor = useColorModeValue("#086F83","#553C9A");
  const Descriptionbg = useColorModeValue("#B2F5EA","#373b69 ");
  
    return(
       
        <MotionBox
          maxW={'270px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          h={'100%'}
          bg={Cardcolor}
          >

          <Image
            h={'200px'}
            w={'full'}
            src={data.image}
            p={2}
            className="card-img"
          />
          <Box  p={2}  fontSize={"15px"} fontWeight={500}>
            <Stack spacing={1} align={'center'}>
              <Text as={'h3'} className="Tag" p={1}>
              <Tag size="lg" bg={"#DD6B20"}>{data.year}</Tag>
              </Text>
              <Text>{data.title}</Text>
              <Box className="overview" bg={Descriptionbg}>
              <Heading mb={2} p={3} >Description</Heading>
              <Text as={"h4"} size={"4"} >{data.description}</Text>
            </Box>
            </Stack>
          
          </Box>
        </MotionBox>
       
        )
}

export default Card;