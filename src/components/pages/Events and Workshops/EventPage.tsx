import { Box, Flex, Stack , Image, Text, Button, Heading, Center, Container, useColorModeValue, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { GetEventsDocument, useDeleteEventMutation, useExportCsvQuery, useGetEventQuery } from '../../../generated/graphql'
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
import { CalendarIcon, EditIcon } from '@chakra-ui/icons'
import fileDownload from 'js-file-download'

const EventPage = () => {
    const {id} : {id : string | undefined} = useParams();
    const [isAdmin, setAdmin] = useState(false);

    const history = useHistory()

    const {data, error , loading} = useGetEventQuery({
        variables : {
            EventID : id!
        }
    })
    React.useEffect(()=>{
      if(localStorage.getItem("role") === "Admin"){
         setAdmin(true)
      }
  },[isAdmin])

    const [deleteevent] = useDeleteEventMutation();
    const bgcolor = useColorModeValue("#ea8a94","#ffffff")
    const {data : data1 , error : error1 , loading : loading1} = useExportCsvQuery({
      variables : {
        EventID : id!
      }
    });
    if(loading)
    return(
      <Loader />
    )
    const timeline = (data?.getEvent.registrationOpenTime) || (data?.getEvent.eventTimeFrom) ;
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
          <Flex style={{  borderRadius: 8 }} p={4}  shadow="lg"
            borderWidth="2px"
            borderRadius="md" flexDirection={'column'}>
            <Text fontWeight={"medium"} fontSize={"lg"} padding={2} color={"gray.500"}>
              <ReactMarkdown
                children={data?.getEvent.description!}
                remarkPlugins={[remarkGfm]}
              ></ReactMarkdown>
            </Text>
            
            <Flex width={"100%"} justifyContent={"flex-end"}>
              {
                isAdmin ? (<Button
                  padding={["0.5vw","0.5vw","0.5vw", "1.25vw"]}
                  fontSize={["3vw","3vw","3vw", "1vw"]}
                        onClick={() => {
                          fileDownload(data1?.exportCSV!, `${data?.getEvent.name}_regristants.csv`);
                        }}
                      >
                        <EditIcon m={2} />
                        Download Registered Usersdata
                      </Button>) : (<RegisterNow isAdmin={isAdmin} data={data?.getEvent}/>)
              }
              </Flex>

          </Flex>      
          {
           (data?.getEvent.vertical !== "WORKSHOPS")&& (data?.getEvent.firstplace || data?.getEvent.secondplace || data?.getEvent.vertical) && (
              <Flex flexDirection={'column'} width={"100%"} alignItems={'center'} justifyItems={'center'} p={2}>
              <Heading fontWeight={"medium"} p={3} color={"gray.500"} display={"inline-flex"}><Icon as={FaTrophy}/> Points Distribution</Heading>
                <Flex flexDirection={['column','row']} justifyContent={'space-evenly'} width={"100%"}>
                <Box p={2}>
                   {
                     data?.getEvent.secondplace && ( <Center flexDirection={'column'}>
                     <Image src={silver} />
                     <Flex  color={"gray.500"}>
                       <Heading>2nd Position : {data?.getEvent.secondplace}</Heading>
                       </Flex>
                     </Center>)
                   }
                  </Box>
                  <Box p={2}>
                    {
                      data?.getEvent.firstplace &&(
                    <Center flexDirection={'column'}>
                    <Image src={gold} />
                    <Flex  color={"gray.500"}>
                      <Heading>1st Position : {data?.getEvent.firstplace}</Heading>
                      </Flex>
                    </Center>
                      )
                    }
                    
                  </Box>
                  <Box p={2}>
                    {
                      data?.getEvent.thirdplace &&  (
                    <Center flexDirection={'column'}>
                    <Image src={bronze} />
                    <Flex  color={"gray.500"}>
                      <Heading>3rd Position : {data?.getEvent.thirdplace}</Heading>
                      </Flex>
                    </Center>
                      )
                    }
                  </Box>
                </Flex>
                {
                  data?.getEvent.participation && (
                    <Flex p={2}  color={"gray.500"} fontSize={['2xl','4xl']}>
                        <Text>Paricipation Points : <Text as='span' fontWeight={700}>{data?.getEvent.participation}</Text></Text>
                    </Flex>
                  )
                }
    
              </Flex>
            )
          }

         <Flex flexDirection={['column','column','row','row']} p={2} justifyContent={'space-between'}>
         <Flex flexDirection={'column'} width= { timeline ? ["100%","100%","45%","45%"] : "100%" } p={2} mb={2}>
          <Flex marginTop="12px" style={{  borderRadius: 8 }} p={2} shadow="lg"  borderWidth="2px"
            borderRadius="md">
           <Text fontWeight={"medium"} p={2} fontSize={"lg"} color={"gray.500"}>
           <strong>Prerequisites :  &nbsp;</strong> {data?.getEvent.requirements}
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
          {
            (timeline) && (
              <Flex flexDirection={'column'} width={["100%","100%","50%","50%"]}  style={{  borderRadius: 8 }} p={2}  shadow="lg"
            borderWidth="2px"
            borderRadius="md"  justifyContent={'space-evenly'} className='success-stories4'>
                  <Heading size={"lg"}><span><CalendarIcon boxSize={6}  mx={2}/></span>Timeline</Heading>
                  <Flex  flexDirection={'column'} p={2}>
                  {data?.getEvent.registrationOpenTime && data?.getEvent.registrationType !== "NONE" && ( 
                  <Flex flexDirection={'column'} p={2}>
                    <Heading size={"md"}>Registrations</Heading>
                    <Flex justifyContent="space-between" p={1}>
                      <Text>{moment(parseInt(data?.getEvent.registrationOpenTime!)).format(
                    "MMMM Do YYYY, h:mm a"
                  )}</Text>
                   <Text mx={1}>to</Text>
                    <Text mx={1}>{moment(parseInt(data?.getEvent.registrationCloseTime!)).format(
                    "MMMM Do YYYY, h:mm a"
                  )}</Text>
                     </Flex>
                     </Flex>)}
                    {
                      data?.getEvent.eventTimeFrom && (
                        <Flex flexDirection={'column'}>
                    <Heading size={"md"}>Event</Heading>
                    <Flex justifyContent="space-between" p={2} >
                      <Text>{moment(parseInt(data?.getEvent.eventTimeFrom!)).format(
                    "MMMM Do YYYY, h:mm a"
                  )}</Text>
                   <Text>to</Text>
                    <Text>{moment(parseInt(data?.getEvent.eventTimeTo!)).format(
                    "MMMM Do YYYY, h:mm a"
                  )}</Text>
                     </Flex>
                     </Flex>
                      )
                    }
                  </Flex>
              </Flex>
            ) 
          }
         </Flex>
          {
              localStorage.getItem("role") === "Admin" && 
              (<Box m={2} width={"100%"}>
               <Flex flexDirection={["column","column","row","row"]}>
               <Button m={2} p={2} width={["100%","100%","50%","50%"]} colorScheme={"green"} onClick={(e:any)=> {e.preventDefault(); history.push( `/admin/edit/${data?.getEvent.id}`)}}>Edit</Button>
               <Button m={2} p={2} width={["100%","100%","50%","50%"]}
               colorScheme={"red"}
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
          {  data?.getEvent &&
            <EventFaqs   event ={data?.getEvent!}  /> 
        
        }
        </Container>  
    </CustomBox>
    )
}

export default EventPage
