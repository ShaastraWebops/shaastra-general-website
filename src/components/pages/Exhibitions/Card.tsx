import * as React from "react";
import { 
  Stack,
  Box,
  Text,
  Image,
  Tag,
  Heading,
  useColorModeValue,
  Center,
 
} from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionBox = motion(Box);
const Card = ({data}) =>{
    
  
  const Descriptionbg = useColorModeValue("#191e38","#0E101B");
  
    return(
       
        <MotionBox
          maxW={'270px'}
          w={'full'}
          rounded={'md'}
          overflow={'hidden'}
          h={'100%'}
          >

          <Image
            h={'200px'}
            w={'full'}
            src={data.image}
            p={2}
            rounded="3xl"
            className="card-img"
          />
          <Box  p={2}  fontSize={"15px"} fontWeight={500}>
            <Stack spacing={1} align={'center'}>
              <Text as={'h3'} className="Tag" p={1}>
              <Tag size="lg" bg={"#00A878"} className="cardtext">{data.year}</Tag>
              </Text>
              <Center>
              <Text className="cardtext" >{data.title}</Text>
              </Center>
              <Box className="overview" bg={Descriptionbg} color="#ffffff">
              <Heading mb={2} p={3} >Description</Heading>
              <Text as={"h4"} size={"4"} >{data.description}</Text>
            </Box>
            </Stack>
          
          </Box>
        </MotionBox>
       
        )
}

export default Card;