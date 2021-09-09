import React from 'react'
import {
    Text,
    Stack,
    Flex,
    Center,
    Box,
    Heading,
    Image,
    SimpleGrid,
    Container
} from '@chakra-ui/react'
import summit1 from '../../../images/EventsWorkshops/summit/Summit_news.jpg'
import summit2 from '../../../images/EventsWorkshops/summit/summit_2.jpg'
import summit3 from '../../../images/EventsWorkshops/summit/summit_3.jpg'
import summit4 from '../../../images/EventsWorkshops/summit/summit_4.jpg'
import summit5 from '../../../images/EventsWorkshops/summit/summit_5.jpg'
import summit6 from '../../../images/EventsWorkshops/summit/summit_6.jpg'
import summit7 from '../../../images/EventsWorkshops/summit/summit_7.jpg'
import { useColorModeValue } from '@chakra-ui/color-mode'
import CustomBox from '../../shared/CustomBox'

function Summit() {
    return (
        <CustomBox>
          <Box h='100vh' className='container'>
        <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 8}}
        py={{ base:20, md: 20 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'} textAlign='center'>
          Explore{' '}
          <Text as={'span'} color={'orange.400'}>
            Summit
          </Text>
        </Heading>
        <Text padding={2} color={'gray.500'} maxW={'3xl'} fontSize={'20px'}>
         Previously we have successfully organised Archi-Tech Summit (2021), Defence Tech Summit (2020), Sports 
         Tech and Law Tech Summit (2019), Green Energy Summit (2018), Accessibility Summit (2017) and Makers Summit 
         (2016) collaborating with the likes of L&T Construction, L&T Defence, Star Sports, Shell, etc.  
         </Text>
         </Stack>
         <Center>
         <Image src={summit3} alt="summit_3" w="500px" h="300px" ></Image>
         </Center>
           <Stack  textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 8}}
        py={{ base: 20, md: 20 }}>
           <Box shadow="lg" borderWidth="2px">
           <Text padding={2} color={'gray.500'} maxW={'3xl'} fontSize={'17px'}>Shaastra 2021 saw IIT Madras hosting it’s very first virtual Summit that was attended by 120 delegates. 
            The theme for Summit 2021 was Archi-Tech which brought together the fields of architecture and technology. 
            With developments in technology like virtual reality, 3D printing and advancements in material science, 
            Shaastra Summit 2021 brought these technologies to light, to help our participants upskill in the field of 
            architecture</Text>
           </Box>
          </Stack>
          <SimpleGrid minChildWidth="320px" spacing="40px" marginBottom={5}>
            <Box>
              <Center>
          <Image src={summit2} alt="summit_2" w="301px" h="301px" objectFit='fill'></Image>
          <Box zIndex="-1" width="350px" position="absolute" height="350px">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="11px 11px"
              opacity="1"
              height="100%"
            />
          </Box>
          </Center>
           </Box>
           <Box>
             <Center>
                <Image src={summit1} alt="summit_1" w="301px" h="301px" objectFit='fill'></Image>
          <Box zIndex="-1" width="350px" position="absolute" height="350px">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="11px 11px"
              opacity="1"
              height="100%"
            />
          </Box>
             </Center>
             </Box>
            <Box>
              <Center>
          <Image src={summit4} alt="summit_4" w="301px" h="301px" objectFit='fill'></Image>
          <Box zIndex="-1" width="350px" position="absolute" height="350px">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="11px 11px"
              opacity="1"
              height="100%"
            />
          </Box>
          </Center>
            </Box>
          </SimpleGrid>
         <Stack  textAlign={'center'}
        align={'center'}
        spacing={{ base: 2, md: 2}}
        py={{ base: 10, md: 10 }}>
           <Box shadow="lg" borderWidth="2px">
           <Text padding={2} color={'gray.500'} maxW={'3xl'} fontSize={'17px'}>
             Summit successfully hosted talks by Ar. Rahul Mehrotra, Ar. Brinda Somaya and other renowned architects 
             as a part of the Summit Masterclass series. Archi-Tech Summit also organized the Post Covid Redesign 
             Contest and Innovation Hub Design Challenge that provided a platform for professionals and enthusiasts 
             in the field of architecture and design to leverage the power of designing spaces to solve societal 
             problems and build better communities.
            </Text>
           </Box>
          </Stack>
         <Stack  textAlign={'center'}
        align={'center'}
        spacing={{ base: 2, md: 2}}
        py={{ base: 15, md: 12.5 }}>
           <Box shadow="lg" borderWidth="2px">
           <Text padding={2} color={'gray.500'} maxW={'3xl'} fontSize={'17px'}>With Sports-Tech Summit Shaastra tried to expand into bringing its 
           participants up to speed on the latest developments by successfully organizing a case-study competition as a 
           part of the Summit and a Hackathon as a pre-event. Similarly, the Law-Tech Summit explored the influence of 
           modern day technology in legal practice by organising a one of a kind Moot court.</Text>
           </Box>
          </Stack>
          <SimpleGrid minChildWidth="320px" spacing="40px" marginTop={12} paddingBottom={12}>
            <Box>
              <Center>
          <Image src={summit5} alt="summit_5" w="301px" h="301px" objectFit='fill'></Image>
          <Box zIndex="-1" width="350px" position="absolute" height="350px">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="11px 11px"
              opacity="1"
              height="100%"
            />
          </Box>
          </Center>
           </Box>
           <Box>
             <Center>
                <Image src={summit6} alt="summit_6" w="301px" h="301px" objectFit='fill'></Image>
          <Box zIndex="-1" width="350px" position="absolute" height="350px">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="11px 11px"
              opacity="1"
              height="100%"
            />
          </Box>
             </Center>
             </Box>
            <Box>
              <Center>
          <Image src={summit7} alt="summit_7" w="301px" h="301px" objectFit='fill'></Image>
          <Box zIndex="-1" width="350px" position="absolute" height="350px">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="11px 11px"
              opacity="1"
              height="100%"
            />
          </Box>
          </Center>
            </Box>
          </SimpleGrid>
          </Box>
        </CustomBox>
    )
}

export default Summit

