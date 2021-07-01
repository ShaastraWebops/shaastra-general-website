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

  // const Tagcolor = useColorModeValue("")
    return(
       
        <MotionBox
         whileHover={{scale:1.1}}
          maxW={'270px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          h={'100%'}
          bg={"#553C9A"}
          >

          <Image
            h={'200px'}
            w={'full'}
            src={data.image}
            p={2}
            className="card-img"
          />
          <Box  p={6}>
            <Stack spacing={1} align={'center'}>
              <Text as={'h1'} className="Tag" p={1}>
              <Tag size="lg" bg={"#DD6B20"}
              color={["highlight.100","highlight.100"]}>{data.year}</Tag>
              </Text>
              <Text>{data.title}</Text>
              <Box className="overview">
              <Heading mb={2} p={2} >Description</Heading>
              <Text as={"h4"} size={"4"}>{data.description}</Text>
            </Box>
            </Stack>
          
          </Box>
        </MotionBox>
       
        )
}

export default Card;