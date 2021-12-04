import React from 'react'
import {
  Text,
  Stack,
  Flex,
  Link,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import bg from "../../../images/EventsWorkshops/events/bg.jpeg"
import BE from "../../../images/EventsWorkshops/events/BE.jpg"
import Aero from "../../../images/EventsWorkshops/events/Aerofest.jpeg"
import Bio from "../../../images/EventsWorkshops/events/Biogen.jpg"
import Cl from "../../../images/EventsWorkshops/events/Coding&Logic.png"
import DB from "../../../images/EventsWorkshops/events/Design&Build.png"
import Elec from "../../../images/EventsWorkshops/events/Elecfest.png"
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer';
import "../../../styles/Events.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Events() {

  const timeline = useColorModeValue("pink", "white-events")

  return (
    <CustomBox>
      <Box className="events">
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 20, md: 20 }}
        >
         <Flex>
           <Heading textAlign="right" fontSize="7xl">EVENTS <br /> WORKSHOPS</Heading>
           <Heading alignSelf="center" color="#ea8a94" fontSize="7xl">&</Heading>
         </Flex>
         <Box zIndex="5" width="100vw" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover">
            <VerticalTimeline className={timeline}>
              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{ background: 'transparent', color: '#fff', fontSize: "1.5vw" }}
                 iconStyle={{color: '#fff' }}
              >
                <Link href="/events/aerofest"><Image src={Aero}></Image></Link>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{ background: 'transparent', color: '#fff', fontSize: "1.5vw" }}
                 iconStyle={{color: '#fff' }}
              >
                <Link href="/events/biogen"><Image src={Bio}></Image></Link>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{background: 'transparent', color: '#fff', fontSize: "1.5vw" }}
                 iconStyle={{color: '#fff' }}
              >
                <Link href="/events/bevents"> <Image src={BE} boxSize="100%"></Image>
                  BEvents</Link>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{ background: 'transparent', color: '#fff', fontSize: "1.5vw" }}
                 iconStyle={{color: '#fff' }}
              >
                <Link href="/events/cl"><Image src={Cl}></Image></Link>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{ background: 'transparent', color: '#fff', fontSize: "1.5vw" }}
                 iconStyle={{color: '#fff' }}
              >
                <Link href="/events/db"><Image src={DB}></Image></Link>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{ background: 'transparent', color: '#fff', fontSize: "1.5vw" }}
                 iconStyle={{color: '#fff' }}
              >
                <Link href="/events/elecfest"><Image src={Elec}></Image></Link>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{ background: 'transparent', color: '#fff', fontSize: "1.5vw" }}
                 iconStyle={{color: '#fff' }}
              >
                <Link href="/events/ignite">Ignite</Link>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{ background: 'transparent', color: '#fff', fontSize: "1.5vw" }}
                 iconStyle={{color: '#fff' }}
              >
                <Link href="/events/strategists">Strategists</Link>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                 className="vertical-timeline-element--work"
                 contentStyle={{ background: 'transparent', color: '#fff', fontSize: "1.5vw" }}
                 iconStyle={{color: '#fff' }}
              >
                <Link href="/events/workshops">Workshops</Link>
              </VerticalTimelineElement>
            </VerticalTimeline>
         </Box>
        </Stack>
      </Box>
      <Footer
        designed={[{ name: 'Drishti', mail: 'me19b100@smail.iitm.ac.in' }]}
      />
    </CustomBox>
  )
}

export default Events
