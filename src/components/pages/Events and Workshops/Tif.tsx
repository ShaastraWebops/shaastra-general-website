import React from 'react'
import {
    Text,
    Stack,
    Center,
    Box,
    Heading,
    Image,
    SimpleGrid,
    Flex,
} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import CustomBox from '../../shared/CustomBox'
import tif1 from '../../../images/EventsWorkshops/tif/tif_1.png'
import tif2 from '../../../images/EventsWorkshops/tif/tif_2.png'
import tif3 from '../../../images/EventsWorkshops/tif/tif_3.png'
import tif4 from '../../../images/EventsWorkshops/tif/tif_4.png'
import tif5 from '../../../images/EventsWorkshops/tif/tif_6.png'
import tif6 from '../../../images/EventsWorkshops/tif/tif_9.png'
import '../../../styles/Events.css'

function Tif() {
    return (
        <CustomBox>
          <Box height='100vh'>
        <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 8}}
        py={{ base: 20, md: 20 }}>
        <Heading noOfLines = {2}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'} textAlign='center'>
          Explore {' '}
          <Text as={'span'} color={'orange.400'}>
            Tech and Innovation Fair
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'} fontSize={'20px'} padding={2}>
         The event helps the participants to take their tech-based prototype to the next level by converting it into an MVP
         (Minimum-viable product).These benchmark models can further be incubated for the commencement of a start-up.
         </Text>
         </Stack>
           <Center marginBottom={10}>
            <Heading
          fontWeight={700}
          lineHeight={'110%'} textAlign='center'>
          Our{'   '}
          <Text as={'span'} color={'orange.400'}>
            Partners
          </Text>
        </Heading>
          </Center>
        <Center>
          <Image src={tif1} alt="tif_1"  h="300px" w='600px'></Image>
           </Center>
           <Stack  textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 8}}
        py={{ base: 20, md: 20 }}>
           <Box shadow="lg" borderWidth="2px" marginBottom={3} marginTop={3}>
           <Text padding={2} color={'gray.500'} maxW={'3xl'} fontSize={'17px'}>The fair comprises multiple stages of professional guidance in the form of Workshops, Panel discussions and
            seminars based on entrepreneurship and management and a culmination event during Shaastra where they will exhibit
            their product to the massive crowd of Shaastra.The event concludes with the final pitching competition which takes place at IITM research park.
            By the end of the event, participants will be equipped with the knowledge, resources, and opportunities they need to
            kickstart their startup journey.</Text>
           </Box>
          </Stack>
           <Center>
            <Heading
          fontWeight={700}
          lineHeight={'110%'} textAlign='center'>
          Workshops and{'   '}
          <Text as={'span'} color={'orange.400'}>
            Seminar
          </Text>
        </Heading>
          </Center>
          <SimpleGrid minChildWidth="300px" spacing="30px" marginBottom={12} marginTop={12}>
              <Center alignItems='center'>
                   <Image src={tif2} alt="tif_2" width = "301px" height = "301px" objectFit='fill'></Image>
          <Box zIndex="-1" position="absolute" height='350px' width='350px'>
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
             <Center alignItems='center'>
                <Image src={tif3} alt="tif_3" w="301px" h="301px" objectFit='fill'></Image>
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
              <Center alignItems='center'>
          <Image src={tif4} alt="tif_4" w="301px" h="301px" objectFit='fill'></Image>
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
          </SimpleGrid>
          <Center>
            <Heading
          fontWeight={700} textAlign='center' lineHeight={'110%'}>
          Success{'   '}
          <Text as={'span'} color={'orange.400'}>
            Stories
          </Text>
        </Heading>
          </Center>
         <SimpleGrid  textAlign={'center'}
        columns={2} marginLeft={5} marginRight = {5} spacing={30} marginTop={5} marginBottom={12}
        >
           <Box shadow="lg" borderWidth="2px"  borderRadius="md" maxwidth = {500} padding={2}>
            <Heading fontSize="xl" fontWeight='bold' color={'gray.500'} marginTop={2}>Scavenger robot to eradicate manual scavenging 
            (1st Runners up- TIF 2021)</Heading>
           <Text padding = {2} color={'gray.500'} maxW={'3xl'}>
            “Competition has a lot things we can learn even if we win or not, these learnings will be useful throughout our lives. The team of
            Shaastra did a great job. The volunteers guided us patiently and virtual creation of IIT Madras was great.”
            <br/>
            <Text fontStyle='italic' fontWeight='bold'>-Harikrishnan, Team Scavenger</Text>
            </Text>
           </Box>
           <Box shadow="lg" borderWidth="2px"  borderRadius="md" maxwidth = {500}  padding={2}>
            <Heading fontSize="xl" fontWeight='bold' color={'gray.500'} marginTop={2}>Drowning rescue kit - Finds drowning people and launches 
            life jackets for rescue (Winner TIF- 2020)</Heading>
           <Text padding = {2} color={'gray.500'} maxW={'3xl'}>
            “Initially, when we got the mail saying we’ve been shortlisted for TIF at IIT Madras, we were surprised.
            No one in our entire family, our generation, had ever seen an IIT. We got a really good mentor and, Tech
            and Innovation Fair was really supportive from Day 0. I thank the entire team for everything they’ve done
            for us.”
            <br/>
            <Text fontStyle='italic' fontWeight='bold'>-Mohammed Safi, Team Night Fury</Text>
            </Text>
           </Box>
           <Box shadow="lg" borderWidth="2px"  borderRadius="md" maxwidth = {500}  padding={2}>
            <Heading fontSize="xl" fontWeight='bold' color={'gray.500'} marginTop={2}>Non Invasive Measurement of Blood Glucose &Haemoglobin (Winner TIF-2019)</Heading>
           <Text padding = {2} color={'gray.500'} maxW={'3xl'}>
            “We were working on our device for few months and always wanted to make it into a startup to help people.
            That’s when we came across Tech and Innovation Fair at Shaastra ‘19 in IIT Madras. The TIF platform helped us by organising workshops
            on IPR and Pitching. At the end of the day, we were also given an opportunity for pre-incubation
            at the IITM Research Park. This event helped us take our product to the next phase.”
            <br/>
            <Text fontStyle='italic' fontWeight='bold'>-Sriram Shreedharan, Team Leader Glucoglobin.</Text>
            </Text>
           </Box>
           <Box shadow="lg" borderWidth="2px"  borderRadius="md" maxwidth = {500}  padding={2}>
            <Heading fontSize="xl" fontWeight='bold' color={'gray.500'} marginTop={2}>Foldable House (Winner TIF-2018)</Heading>
           <Text padding = {2} color={'gray.500'} maxW={'3xl'}>
            “We were a project prototype while we registered for Shaastra TIF 2018. TIF 2018 gave us much insights through its
            mentoring sessions and webinars. It helped us to work more aggressively on our project and now its soon to be
            launched as a startup.”
            <br/>
            <Text fontStyle='italic' fontWeight='bold'>-Shree Ram, CEO & Co-founder, Modulus Housing</Text>
            </Text>
           </Box>
            
          </SimpleGrid>
           <Center>
            <Heading textAlign='center'
          fontWeight={700}  lineHeight={'110%'}>
          Exhibitions and{'   '}
          <Text as={'span'} color={'orange.400'}>
            Research Park Visit
          </Text>
        </Heading>
          </Center>
          <SimpleGrid minChildWidth="320px" spacing="40px" marginBottom={10} marginTop={10} paddingBottom={12}>
              <Center>
          <Image src={tif5} alt="tif_5" w="301px" h="301px" objectFit='fill'></Image>
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
             <Center>
                <Image src={tif6} alt="tif_6" w="301px" h="301px" objectFit='fill'></Image>
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
          </SimpleGrid>
          </Box>
         </CustomBox>
    )
}

export default Tif