import { Box, Flex, Stack , Image, Text, Button, Heading, Center, Container, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { GetEventsDocument, useDeleteEventMutation, useGetEventQuery } from '../../../generated/graphql'
import bg from "../../../images/EventsWorkshops/events/bg.jpeg"
import CustomBox from '../../shared/CustomBox'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import moment from 'moment'
import EventFaqs from './EventFaqs'

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
    return (
        <CustomBox>
          <Container maxWidth="6xl" alignItems="center" justifyItems={"center"} marginBottom={5} paddingBottom={2}>
          <Center>
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
          <Center style={{  borderRadius: 8 }} backgroundColor={bgcolor} p={4}>
            <Text fontWeight={"medium"} fontSize={"lg"} p={6} color={'black'}>
              <ReactMarkdown
                children={data?.getEvent.description!}
                remarkPlugins={[remarkGfm]}
              ></ReactMarkdown>
            </Text>
          </Center>

          <Flex className="events-details-box" marginTop="12px" backgroundColor={bgcolor}>
            <strong>Requirements: &nbsp;</strong> {data?.getEvent.requirements}
          </Flex>

          <Flex className="events-details-box-container" >
            {/* <Flex className="events-details-box" backgroundColor={bgcolor}>
              <strong>Audience: &nbsp;</strong>
            </Flex> */}
            <Flex className="events-details-box" backgroundColor={bgcolor}>
              <strong>Platform: &nbsp;</strong>
              {data?.getEvent.platform}
            </Flex>
          </Flex>

          <Flex className="events-details-box-container" >
            <Flex className="events-details-box" backgroundColor={bgcolor}>
              <strong>Registration Type: &nbsp;</strong>
              {data?.getEvent.registrationType}
            </Flex>
            {data?.getEvent.registrationType === "TEAM" && (
              <Flex className="events-details-box" backgroundColor={bgcolor}>
                <strong>Max. team size: &nbsp;</strong>
                {data.getEvent.teamSize}
              </Flex>
            )}
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
        <Container maxWidth="6xl" alignItems="center" justifyItems={"center"} color={"black"}>
          {data?.getEvent.registrationType !== "NONE" && (
            <Flex className="datetime-container">
              <Flex className="datetime-head">Registrations</Flex>
              <Flex className="datetime-box">
                <Flex className="datetime">
                  {moment(parseInt(data?.getEvent.registrationOpenTime!)).format(
                    "MMMM Do YYYY, h:mm a"
                  )}
                </Flex>
                <div style={{ width: "10%" }} className="datetime">
                  to
                </div>
                <Flex className="datetime">
                  {moment(parseInt(data?.getEvent.registrationCloseTime!)).format(
                    "MMMM Do YYYY, h:mm a"
                  )}
                </Flex>
              </Flex>
            </Flex>
          )}

          <Flex className="datetime-container">
            <Flex className="datetime-head">Event Timeline</Flex>
            <Flex className="datetime-box">
              <Flex className="datetime">
                {moment(parseInt(data?.getEvent.eventTimeFrom!)).format(
                  "MMMM Do YYYY, h:mm a"
                )}
              </Flex>
              <div style={{ width: "10%" }} className="datetime">
                to
              </div>
              <Flex className="datetime">
                {moment(parseInt(data?.getEvent.eventTimeTo!)).format(
                  "MMMM Do YYYY, h:mm a"
                )}
              </Flex>
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
