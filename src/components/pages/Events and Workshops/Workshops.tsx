import React from 'react'
import {
    Text,
    Stack,
    Center,
    Box,
    Heading,
    Image,
    SimpleGrid,
} from '@chakra-ui/react'
import CustomBox from '../../shared/CustomBox'
import { useColorModeValue } from '@chakra-ui/color-mode'

function Workshops() {
    return (
       <CustomBox>
            <Box h='100vh'>
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
            Workshops
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
         Have to add Workshops content and images
         </Text>
         </Stack>
        <Center>
          <Image src={''} alt="summit_1" w="300px" h="300px"></Image>
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
           </Box>
          </Stack>
          <SimpleGrid minChildWidth="320px" spacing="40px">
            <Box>
              <Center>
          <Image src={''} alt="summit_2" w="300px" h="300px"></Image>
          <Box zIndex="-1" width="350px" position="absolute" height="350px">
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
           </Box>
           <Box>
             <Center>
                <Image src={''} alt="summit_3" w="300px" h="300px"></Image>
          <Box zIndex="-1" width="350px" position="absolute" height="350px">
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
             </Box>
            <Box>
              <Center>
          <Image src={''} alt="summit_4" w="300px" h="300px"></Image>
          <Box zIndex="-1" width="350px" position="absolute" height="350px">
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
            </Box>
          </SimpleGrid>
         <Stack  textAlign={'center'}
        align={'center'}
        spacing={{ base: 2, md: 2}}
        py={{ base: 10, md: 10 }}>
           <Box shadow="lg" borderWidth="2px">
           <Text color={'gray.500'} maxW={'3xl'}>
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
           <Text color={'gray.500'} maxW={'3xl'}>With Sports-Tech Summit Shaastra tried to expand into bringing its 
           participants up to speed on the latest developments by successfully organizing a case-study competition as a 
           part of the Summit and a Hackathon as a pre-event. Similarly, the Law-Tech Summit explored the influence of 
           modern day technology in legal practice by organising a one of a kind Moot court.</Text>
           </Box>
          </Stack>
          <SimpleGrid minChildWidth="320px" spacing="40px" marginTop={10}>
            <Box>
              <Center>
          <Image src={''} alt="summit_5" w="300px" h="300px"></Image>
          <Box zIndex="-1" width="350px" position="absolute" height="350px">
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
           </Box>
           <Box>
             <Center>
                <Image src={''} alt="summit_6" w="300px" h="300px"></Image>
          <Box zIndex="-1" width="350px" position="absolute" height="350px">
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
             </Box>
            <Box>
              <Center>
          <Image src={''} alt="summit_7" w="300px" h="300px"></Image>
          <Box zIndex="-1" width="350px" position="absolute" height="350px">
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
            </Box>
          </SimpleGrid>
          </Box>
       </CustomBox>
    )
}

export default Workshops
