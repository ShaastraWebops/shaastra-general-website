import * as React from "react";
import { 
  Stack,
  Box,
  Text,
  Image,
  Tag,
  Heading,
 
} from "@chakra-ui/react";

const Card = ({data}) =>{

    return(
       
        <Box
          maxW={'270px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          h={'100%'}
          p={0}
          >

          <Image
            h={'200px'}
            w={'full'}
            src={data.image}
            className="card-img"
          />
          <Box  p={6}>
            <Stack spacing={1} align={'center'}>
              <Text as={'h1'} className="Tag" p={1}>
              <Tag size="lg" bg={["secondary.500","secondary.100"]}
              color={["highlight.100","highlight.100"]}>{data.year}</Tag>
              </Text>
              <Text>{data.title}</Text>
              <Box className="overview">
              <Heading mb={2} p={2} >Description</Heading>
              <Text as={"h4"} size={"4"}>{data.description}</Text>
            </Box>
            </Stack>
          
          </Box>
        </Box>
       
        )
}

export default Card;