import React from 'react'
import {
    Text,
    Stack,
    Flex,
    Center,
    Box,
    Heading,
    Image
} from '@chakra-ui/react'
import summit1 from '../../../images/EventsWorkshops/Summit_news.jpg'
import { useColorModeValue } from '@chakra-ui/color-mode'
import CustomBox from '../../shared/CustomBox'

function Summit() {
    return (
        <CustomBox>
        <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 8}}
        py={{ base: 20, md: 20 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Explore{' '}
          <Text as={'span'} color={'orange.400'}>
            Summit
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
         Previously we have successfully organised Archi-Tech Summit (2021), Defence Tech Summit (2020), Sports 
         Tech and Law Tech Summit (2019), Green Energy Summit (2018), Accessibility Summit (2017) and Makers Summit 
         (2016) collaborating with the likes of L&T Construction, L&T Defence, Star Sports, Shell, etc.  
         </Text>
         </Stack>
        <Center>
          <Image src={summit1} alt="summit_1" w="300px" h="300px"></Image>
          <Box zIndex="1" width="350px" position="absolute" height="350px">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="15px 15px"
              opacity="0.6"
              height="100%"
            />
          </Box>
           </Center>
           <Stack  textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 8}}
        py={{ base: 20, md: 20 }}>
           <Box shadow="lg" borderWidth="2px">
           <Text color={'gray.500'} maxW={'3xl'}>Shaastra 2021 saw IIT Madras hosting it’s very first virtual Summit that was attended by 120 delegates. 
            The theme for Summit 2021 was Archi-Tech which brought together the fields of architecture and technology. 
            With developments in technology like virtual reality, 3D printing and advancements in material science, 
            Shaastra Summit 2021 brought these technologies to light, to help our participants upskill in the field of 
            architecture</Text>
           <Image></Image>
           </Box>
          </Stack>
         
         
        </CustomBox>
    )
}

export default Summit

