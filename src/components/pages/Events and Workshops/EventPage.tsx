import { Box, Flex, Stack , Image, Text, Button, Heading, Center, Container, useColorModeValue, Icon } from '@chakra-ui/react'
import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { GetEventsDocument, useDeleteEventMutation, useGetEventQuery } from '../../../generated/graphql'
import bg from "../../../images/EventsWorkshops/events/bg.jpeg"
import CustomBox from '../../shared/CustomBox'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import moment from 'moment'
import EventFaqs from './EventFaqs'
import gold from "../../../images/EventsWorkshops/events/gold.png";
import silver from "../../../images/EventsWorkshops/events/silver.png";
import bronze from "../../../images/EventsWorkshops/events/bronze.png";
import { FaTrophy } from "react-icons/fa";
import RegisterNow from './RegisterNow'
import Loader from '../../shared/Loader'

const EventPage = () => {
    const {id} : {id : string | undefined} = useParams();

    const history = useHistory()

    const {data, error , loading} = useGetEventQuery({
        variables : {
            EventID : id!
        }
    })
  
    const [deleteevent] = useDeleteEventMutation();
    const bgcolor = useColorModeValue("#ea8a94","#ffffff")
    if(loading)
    return(
      <Loader />
    )
    return (
        <CustomBox>
          <Container maxWidth="6xl" alignItems="center" justifyItems={"center"} marginBottom={5} paddingBottom={2}>
          <Center flexDirection={['column','column','row']}>
            <Image
              h={["2%", "300px", "300px"]}
              width={'auto'}
              objectFit={"contain"}
              src={data?.getEvent.pic ? data.getEvent.pic : bg}
              marginTop={"50px"}
              p={4}
              rounded={["3xl", "3xl"]}
            />
          </Center>
          <Center style={{  borderRadius: 8 }} p={4}  shadow="lg"
            borderWidth="2px"
            borderRadius="md">
            <Text fontWeight={"medium"} fontSize={"lg"} padding={2} color={"gray.500"}>
              <ReactMarkdown
                children={data?.getEvent.description!}
                remarkPlugins={[remarkGfm]}
              ></ReactMarkdown>
            </Text>
          </Center>
          <Flex width={"100%"} m={2}>
          <Box width={"100%"} float={"left"}><RegisterNow isAdmin={false} data={data?.getEvent}/></Box>
          </Flex>
         
          <Flex flexDirection={'column'} width={"100%"} alignItems={'center'} justifyItems={'center'} p={2}>
          <Heading fontWeight={"medium"} p={3} color={"gray.500"} display={"inline-flex"}><Icon as={FaTrophy}/> Points Distribution</Heading>
            <Flex flexDirection={['column','row']} justifyContent={'space-evenly'} width={"100%"}>
            <Box p={2}>
                <Center flexDirection={'column'}>
                <Image src={silver} />
                <Flex  color={"gray.500"}>
                  <Heading>2nd Position : {data?.getEvent.secondplace}</Heading>
                  </Flex>
                </Center>
              </Box>
              <Box p={2}>
                <Center flexDirection={'column'}>
                <Image src={gold} />
                <Flex  color={"gray.500"}>
                  <Heading>1st Position : {data?.getEvent.firstplace}</Heading>
                  </Flex>
                </Center>
                
              </Box>
              <Box p={2}>
                <Center flexDirection={'column'}>
                <Image src={bronze} />
                <Flex  color={"gray.500"}>
                  <Heading>3rd Position : {data?.getEvent.thirdplace}</Heading>
                  </Flex>
                </Center>
                
              </Box>

            </Flex>
          </Flex>

        

         <Flex flexDirection={['column','column','row','row']} p={2} justifyContent={'space-between'}>
         <Flex flexDirection={'column'} width={["100%","100%","50%","50%"]} p={2}>
          <Flex marginTop="12px" style={{  borderRadius: 8 }} p={2} shadow="lg"  borderWidth="2px"
            borderRadius="md">
           <Text fontWeight={"medium"} p={2} fontSize={"lg"} color={"gray.500"}>
           <strong>Requirements: &nbsp;</strong> {data?.getEvent.requirements}
           </Text>
          </Flex>

          <Flex className="events-details-box-container" >
            {/* <Flex className="events-details-box" backgroundColor={bgcolor}>
              <strong>Audience: &nbsp;</strong>
            </Flex> */}
            <Flex className="events-details-box" style={{  borderRadius: 8 }} p={2}  shadow="lg"  borderWidth="2px"
            borderRadius="md">
              <Text fontWeight={"medium"} fontSize={"lg"} padding={2} color={"gray.500"}>
              <strong>Platform: &nbsp;</strong>
              {data?.getEvent.platform}
              </Text>
            </Flex>
          </Flex>

          <Flex className="events-details-box-container" >
            <Flex className="events-details-box" style={{  borderRadius: 8 }} p={2}  shadow="lg"  borderWidth="2px"
            borderRadius="md"> 
              <Text fontWeight={"medium"} fontSize={"lg"} padding={2} color={"gray.500"}>
              <strong>Registration Type: &nbsp;</strong>
              {data?.getEvent.registrationType}
              </Text>
            </Flex>
            {data?.getEvent.registrationType === "TEAM" && (
              <Flex className="events-details-box"  style={{  borderRadius: 8 }} p={4}  shadow="lg"  borderWidth="2px"
              borderRadius="md">
                <Text fontWeight={"medium"} fontSize={"lg"} padding={2} color={"gray.500"}>
                <strong>Max. team size: &nbsp;</strong>
                {data.getEvent.teamSize}
                </Text>
              </Flex>
            )}
          </Flex>
          </Flex>
          <Flex flexDirection={'column'} width={["100%","100%","40%","40%"]}  style={{  borderRadius: 8 }} p={5}  shadow="lg"
            borderWidth="2px"
            borderRadius="md" m={2} justifyContent={'space-around'} >
                  <Heading as="h4" size={"sm"} fontWeight={"medium"} fontSize={"lg"} padding={2} color={"gray.500"}> Points Distribution</Heading>
                  <Flex justifyContent="space-between" p={2}  color={"gray.500"}>
                      <Text>1ST</Text>
                      <Text>{data?.getEvent.firstplace}</Text>
                  </Flex>
                  <Flex justifyContent="space-between" p={2}  color={"gray.500"}>
                      <Text>2ND</Text>
                      <Text>{data?.getEvent.secondplace}</Text>
                  </Flex>
                  <Flex justifyContent="space-between" p={2}  color={"gray.500"}>
                      <Text>3RD</Text>
                      <Text>{data?.getEvent.thirdplace}</Text>
                  </Flex>
                  <Flex justifyContent="space-between" p={2}  color={"gray.500"}>
                      <Text>PARTICIPATION</Text>
                      <Text>{data?.getEvent.participation}</Text>
                  </Flex>
              </Flex>
         </Flex>
          {
              localStorage.getItem("role") === "Admin" && 
              (<Box m={2} width={"100%"}>
               <Flex flexDirection={["column","column","row","row"]}>
               <Button m={2} p={2} width={["100%","100%","50%","50%"]} onClick={(e:any)=> {e.preventDefault(); history.push( `/admin/edit/${data?.getEvent.id}`)}}>Edit</Button>
               <Button m={2} p={2} width={["100%","100%","50%","50%"]}
               onClick={async()=>{

                await deleteevent({
                  variables : {
                    id : data?.getEvent.id!
                  },
                  refetchQueries: [
                    {
                      query: GetEventsDocument,
                      variables: { getEventsFilter: data?.getEvent.vertical },
                    }]
                  }).then(res => {
                  if(res.data?.deleteEvent){
                    history.push("/admin")
                  }
                })
                .catch(err => alert(err.message))
               }}
               
               >Delete</Button>
               </Flex>
               </Box>
              )}
        </Container>
        <Container maxWidth="6xl" alignItems="center" justifyItems={"center"}>
          {data?.getEvent.registrationType !== "NONE" && (
            <Flex className="datetime-container" backgroundColor={"#20BDFF"} p={2} color={'black'}>
              <Heading className="datetime-head">Registrations</Heading>
              <Flex className="datetime-box" >
                <Heading className="datetime" size={'md'}>
                  {moment(parseInt(data?.getEvent.registrationOpenTime!)).format(
                    "MMMM Do YYYY, h:mm a"
                  )}
                </Heading>
                <Heading style={{ width: "10%" }} className="datetime" size={'md'}>
                  to
                </Heading>
                <Heading className="datetime" size={'md'}>
                  {moment(parseInt(data?.getEvent.registrationCloseTime!)).format(
                    "MMMM Do YYYY, h:mm a"
                  )}
                </Heading>
              </Flex>
            </Flex>
          )}

          <Flex className="datetime-container" style={{  borderRadius: 8 }} p={2} backgroundColor={'#A5FECB'}>
            <Heading className="datetime-head"  color={'black'}>Event Timeline</Heading>
            <Flex className="datetime-box">
              <Heading className="datetime" size={'md'} color={"black"}>
                {moment(parseInt(data?.getEvent.eventTimeFrom!)).format(
                  "MMMM Do YYYY, h:mm a"
                )}
              </Heading>
              <Heading style={{ width: "10%" }} className="datetime" size={'md'} color={"black"}>
                to
              </Heading>
              <Heading className="datetime" size={'md'} color={"black"}>
                {moment(parseInt(data?.getEvent.eventTimeTo!)).format(
                  "MMMM Do YYYY, h:mm a"
                )}
              </Heading>
            </Flex>
          </Flex>
          {  data?.getEvent &&
            <EventFaqs   event ={data?.getEvent!}  /> 
        
        }
        </Container>  
    </CustomBox>
    )
}

export default EventPage
