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


const Card = ({data}) =>{
    
  const Descriptionbg = useColorModeValue("#191e38","#0E101B");
  const Tagcolor = useColorModeValue("#00d0ff","#1c72c7");
  
    return(
       
        <Box
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
              <Tag size="lg" bg={Tagcolor} className="cardtext">{data.year}</Tag>
              </Text>
              <Text className="cardtext"   textShadow="1px 0px #00d0ff">{data.title}</Text>
              <Box className="overview" bg={Descriptionbg} color="#ffffff">
              <Heading as={'h3'} mb={"3"} fontSize={"2xl"}   textShadow="1px 0px #00d0ff">
               {data.title}
              </Heading>
              <Text as={"h4"} size={"4"} >{data.description}</Text>
            </Box>
            </Stack>
          
          </Box>
        </Box>
       
        )
}

export default Card;