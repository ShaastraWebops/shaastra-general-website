import React from 'react'
import {
  Flex,
  Text,
  Heading,
  Center,
  Box,
  VStack,
  Image,
  Link,
  StackDivider
} from "@chakra-ui/react";
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Link as ReachLink } from "react-router-dom"
import summit from '../../../images/EventsWorkshops/summit/summit_5.jpg'
import tif from '../../../images/EventsWorkshops/tif/tif_4.png'



 import CustomBox from "../../shared/CustomBox";


function EventsHome() {



  return (
    <Box overflowX='hidden' maxWidth='100%' height='100vh'>
    <CustomBox>  
        <Center h='300px'>
          <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'} textAlign='center'>
          Events and{' '}
          <Text as={'span'} color={'orange.400'}>
            Workshops
          </Text>
        </Heading>
      </Center>
      <VStack
  spacing={10}
  align="stretch"
>
  {/*Events*/}
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '75%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '10%' }}
            marginTop="5%">
              <Image
                borderRadius="lg"
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
                alt="events"
                objectFit="contain"
              />
          </Box>
          <Box zIndex="1" width="90%" position="absolute" height="100%"  marginLeft={{ base: '0', sm: '3%' }}>
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="1"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }} marginRight={8}>
          <Heading marginTop="1" textAlign='center'>
           Events
          </Heading>
          <Text textAlign = 'center'
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
            <Text fontSize="2xl" textAlign='center' marginTop={8}><Link as={ReachLink} to="/events">Explore Events</Link></Text>
          </Box>
      </Box>
      {/*Workshops*/}
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '75%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '10%' }}
            marginTop="5%">
              <Image
                borderRadius="lg"
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
                alt="workshops"
                objectFit="contain"
              />
          </Box>
          <Box zIndex="1" width="90%" position="absolute" height="100%"  marginLeft={{ base: '0', sm: '3%' }}>
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="1"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }} marginRight={8}>
          <Heading marginTop="1" textAlign='center'>
           Workshops
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg" textAlign='center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
            <Text fontSize="2xl" textAlign='center' marginTop={8}><Link as={ReachLink} to="/workshops">Explore Workshops</Link></Text>
          </Box>
      </Box>
      {/*Summit*/}
       <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '75%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '10%' }}
            marginTop="5%">
              <Image
                borderRadius="lg"
                src={summit}
                alt="summit"
                objectFit="contain"
              />
          </Box>
          <Box zIndex="1" width="90%" position="absolute" height="100%"  marginLeft={{ base: '0', sm: '3%' }}>
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="1"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }} marginRight={8}>
          <Heading marginTop="1" textAlign='center'>
           Summit
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg" textAlign='center'>
            Summit is the flagship conference of Shaastra, which provides a networking platform for its participants 
            to interact with the pioneers of today, and opportunities to enhance their expertise.
             With a line-up of lectures, panel discussions and workshops spanning over 3 days, participants, 
             which include college students, personnel from startups and professionals are ensured to
            get an all-round experience. Every year Summit ventures into a unique and relevant theme to contribute to the developments in these fields of technology and to create an impact on society. 
          </Text>
            <Text fontSize="2xl" textAlign='center' marginTop={8}><Link as={ReachLink} to="/summit">Explore Summit</Link></Text>
          </Box>
      </Box>
      {/*Tif*/}
       <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '75%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '10%' }}
            marginTop="5%">
              <Image
                borderRadius="lg"
                src={tif}
                alt="tif"
                objectFit="contain"
              />
          </Box>
          <Box zIndex="1" width="90%" position="absolute" height="100%"  marginLeft={{ base: '0', sm: '3%' }}>
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="1"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }} marginRight={8}>
          <Heading marginTop="1" textAlign='center'>
           Tech and Innovation Fair
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg" textAlign='center'>
            Tech and Innovation fair is one of the flagship events in Shaastra that scouts for budding entrepreneurs by providing a
            platform to develop tech based projects and enhance their potential to grow into a  commercial product. TIF envisions
            leveraging IIT Madras’s rich startup ecosystem in its mission to promote innovation and address the dearth of hardcore tech startups in India
          </Text>
            <Text fontSize="2xl" textAlign='center' marginTop={8}><Link as={ReachLink} to="/tif">Explore TIF</Link></Text>
          </Box>
      </Box>
     </VStack>
    </CustomBox>
    </Box>
  )
}

export default EventsHome
