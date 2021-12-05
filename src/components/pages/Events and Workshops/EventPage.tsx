import { Box, Flex, Stack , Image, Text, Button, Heading, Center, Container, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetEventQuery } from '../../../generated/graphql'
import bg from "../../../images/EventsWorkshops/events/bg.jpeg"
import CustomBox from '../../shared/CustomBox'


const EventPage = () => {
    const {id} : {id : string | undefined} = useParams();

    const {data, error , loading} = useGetEventQuery({
        variables : {
            EventID : id!
        }
    })
    const bgcolor = useColorModeValue("#ea8a94","#ffffff")
    return (
        <CustomBox>
             <Container maxWidth="6xl" alignItems="center" justifyItems={"center"}>
          <Center>
            <Image
              h={["2%", "300px", "300px"]}
              objectFit={"contain"}
              src={bg}
              p={4}
              rounded={["3xl", "3xl"]}
              className="card-img"
            />
          </Center>
          <Center style={{  borderRadius: 8 }} backgroundColor={bgcolor}>
            <Text fontWeight={"medium"} fontSize={"20px"} p={6} color={'black'}>
              {data?.getEvent.description}
            </Text>
          </Center>

          <Flex className="events-details-box" marginTop="12px" backgroundColor={bgcolor}>
            <strong>Requirements: &nbsp;</strong> {data?.getEvent.requirements}
          </Flex>

          <Flex className="events-details-box-container" >
            <Flex className="events-details-box" backgroundColor={bgcolor}>
              <strong>Audience: &nbsp;</strong>
            </Flex>
            <Flex className="events-details-box" backgroundColor={bgcolor}>
              <strong>Platform: &nbsp;</strong>
              {data?.getEvent.platform}
            </Flex>
          </Flex>

          <Flex className="events-details-box-container" >
            <Flex className="events-details-box" backgroundColor={bgcolor}>
              <strong>Registration: &nbsp;</strong>
              {data?.getEvent.registrationType}
            </Flex>
            {data?.getEvent.registrationType === "TEAM" && (
              <Flex className="events-details-box" backgroundColor={bgcolor}>
                <strong>Max. team size: &nbsp;</strong>
                {data.getEvent.teamSize}
              </Flex>
            )}
          </Flex>
        </Container>
        <Stack 
         textAlign={'center'}
         align={'center'}
         spacing={{ base: 8, md: 8 }}
         py={{ base: 20, md: 20 }}>
        <Box width="90%" p={3} m={2}>
            <Flex width="88vw" justifyContent="space-between" alignItems="center" className="admin-events-flex">
                <Flex flexDirection="column" alignItems="center" width="15vw" height="15vw" className="admin-events-image-flex">
                    <Image src={bg} width="15vw" height="15vw" marginBottom="2vh"></Image>
                    <Text as={'h3'}>{data?.getEvent.name}</Text>
                </Flex>
                <Box>
                <Text width="45vw">
                The entire globe is now turning to the biotech sector to discover answers that will 
                                assist humanity in overcoming the current Covid problem while also preparing us for 
                                future outbreaks. The participants will go through many levels of questions such as, 
                                Why did the second wave of Covid in India startle the whole world? Discuss the lessons 
                                that India may learn in order to develop an effective research ecosystem capable of detecting, 
                                understanding, and responding to future waves.
                </Text>
                </Box>
            </Flex>
            <Flex width="88vw" justifyContent="space-between" alignItems="center" marginTop="2vh" className="admin-events-details-flex">
                <Box>
                    <Text>First: 100</Text>
                    <Text>First: 100</Text>
                    <Text>First: 100</Text>
                    <Text>First: 100</Text>
                </Box>
                <Box>
                    <Text>Platform: xoom</Text>
                    <Text>Reguiremetns: asdfghj</Text>
                    <Text>Type: Team</Text>
                </Box>
                <Box>
                    <Text>Team size: 4</Text>
                    <Text>Reg start: 1234567890</Text>
                    <Text>Reg start: 1234567890</Text>
                </Box>
                <Box>
                    <Text>Reg start: 1234567890</Text>
                    <Text>Reg start: 1234567890</Text>
                    <Button width="100%">Edit</Button>
                </Box>
            </Flex>
        </Box>
    </Stack>
    </CustomBox>
    )
}

export default EventPage
