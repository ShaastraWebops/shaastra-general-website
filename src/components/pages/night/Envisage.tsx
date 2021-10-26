import React from 'react'
import {
  Heading,
  useBreakpointValue,
  useColorModeValue,
  Grid,
  GridItem,
  Container,
  Text,
  Box,
  Center,
  Flex,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'
import './../../../styles/night/night.css'
import { Link } from 'react-router-dom'
import Particles from 'react-tsparticles'
import CustomBox from './../../shared/CustomBox'
import { ReactComponent as LogoBlack } from './../../../images/night/Envisage_black.svg'
import { ReactComponent as LogoWhite } from './../../../images/night/Envisage_white (1).svg'
import image1 from './../../../images/night/envisage_1.png'
import image2 from './../../../images/night/envisage_2.png'
import Footer from '../../shared/Footer'
import '../../../styles/night/Envisage.css'
import { FaArrowsAltV } from 'react-icons/fa'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Main() {
  return (
    <CustomBox>
      <Flex
        alignItems='center'
        justifyContent='center'
        direction='column'
        minHeight='100vh'
        className='main-ctn'
        maxW='100%'
        overflowX='hidden'
      >
        <Box className='header-ctn' marginTop={12}>
          <Heading marginTop={12} fontSize='7xl'>
            <span>ENVISAGE</span>
          </Heading>
        </Box>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('gray.700', 'gray.200')}
          textColor={useColorModeValue('white', 'black')}
          boxShadow={'lg'}
          p={8}
          marginTop={8}
          marginLeft={8}
          marginRight={8}
          marginBottom={8}
          justifyContent='center'
          alignItems='center'
          textAlign='center'
        >
          <SimpleGrid columns={[1, 1, 2]} spacing='40px'>
            <Center>
              <Image
                alt='image1'
                src={image1}
                rounded='xl'
                width='100%'
                height='auto'
              ></Image>
            </Center>
            <Flex flexDirection='column'>
              <Heading margin={2} padding={2} className='sub-heading'>
                ABOUT US
              </Heading>
              <Text fontSize='lg' padding={2}>
                The Annual Technical Festival of IIT Madras, Shaastra introduced
                a technologically aided cultural show in the year 2013,
                capitalizing on the entertainment factor. This techno – cultural
                show was named Envisage and today it is India’s first and only
                student organised techno-entertainment show. The projects
                exhibited by Envisage attract a bunch of not-so-technically
                oriented guests too. The projects are designed in conformity
                with the tagline of Envisage – “Technology meets Entertainment”.
                Alongside conducting the show on 1st day of Shaastra, a number
                of other interactive projects and video games are also developed
                and exhibited to a vast crowd at KV Stalls during Shaastra. Over
                the past few years Envisage has been exploring and presenting
                projects at various avenues like IIM Bangalore, Anna University
                and in several other universities as part of Samparks, Publicity
                event of Shaastra. The coming version marks the entry of
                Envisage into its very 10th year.
              </Text>
              <Heading margin={2} padding={2} className='sub-heading'>
                VISION
              </Heading>
              <Text fontSize='lg' padding={2}>
                As the tagline “Where Technology Meets Entertainment” suggests,
                we inspire and enable students to explore their creative and
                engineering skills through various technical projects for the
                techno cultural show and the tech exhibition during Shaastra.
              </Text>
            </Flex>
          </SimpleGrid>
        </Box>
        <Flex
          justifyContent='center'
          flexDirection='column'
          margin={2}
          padding={2}
        >
          <Heading marginBottom={12} className='sub-heading'>
            VERTICALS
          </Heading>
          <VerticalTimeline className='timeline'>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{
                background: '#EDEDED',
                color: 'black',
              }}
              iconStyle={{ background: '#E63E6D', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  #EDEDED',
              }}
              icon={<FaArrowsAltV />}
            >
              <h3 className='vertical-timeline-element-title'>Shows</h3>
              <p>
                This vertical comprises large scale projects which are presented
                in the Envisage show, which is organized on the first day of
                Shaastra. This is the first and only student-run
                techno-entertainment show in India and witnessed by an audience
                of around 5000.
              </p>
              <Link
                to={{ pathname: `/project/1`, state: 'Shows' }}
                className='link-ctn '
              >
                Learn More
              </Link>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{
                background: '#EDEDED',
                color: 'black',
              }}
              contentArrowStyle={{
                borderRight: '7px solid  #EDEDED',
              }}
              iconStyle={{ background: '#E63E6D', color: '#fff' }}
              icon={<FaArrowsAltV />}
            >
              <h3 className='vertical-timeline-element-title'>Tech Ambience</h3>
              <p>
                This vertical comprises interactive projects which are presented
                at KV grounds during Shaastra as a part of tech- exhibition of
                Envisage.
              </p>
              <Link
                to={{ pathname: `/project/2`, state: 'Tech Ambience' }}
                className='link-ctn'
              >
                Learn More
              </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              iconStyle={{ background: '#E63E6D', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  #EDEDED',
              }}
              contentStyle={{
                background: '#EDEDED',
                color: 'black',
              }}
              icon={<FaArrowsAltV />}
            >
              <h3 className='vertical-timeline-element-title'>Game Dev</h3>
              <p>
                This vertical is involved in creating video games from scratch
                and are displayed at KV stalls during Shaastra as a part of our
                Tech-Exhibition. We also compete in a lot of entertaining game
                jam sessions and conduct game development workshops as a team to
                show the entertaining aspect of game development to others.
              </p>
              <Link
                to={{ pathname: `/project/3`, state: 'Game Dev' }}
                className='link-ctn'
              >
                Learn More
              </Link>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Flex>
      </Flex>
      <Footer
        designed={[
          { name: 'Prithiviraj P', mail: 'na19b052@smail.iitm.ac.in' },
        ]}
      />
    </CustomBox>
  )
}
