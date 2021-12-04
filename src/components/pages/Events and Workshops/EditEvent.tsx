import * as React from "react"
import {
    Text,
    Stack,
    Flex,
    Link,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Image,
    Button,
    Select,
    RadioGroup,
    Radio,
    useColorModeValue
  } from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import CustomBox from '../../shared/CustomBox'
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "../../../styles/Events.css"

import bg from "../../../images/EventsWorkshops/events/bg.jpeg"

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });

const EditEvent = () => {

    const [value, setValue] = React.useState("Hello!")
    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");
    const [radio, setRadio] = React.useState("i")

    return(
        <CustomBox>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 8 }}
                py={{ base: 20, md: 20 }}
            >
            <Heading>EDIT EVENT</Heading>
            <Box backgroundImage={bg} width="100vw" padding="4vw" className="admin-add">
                <Box backgroundImage="linear-gradient(-45deg, #ffffff98, #ffffff09)" borderRadius="24px" backdropFilter="blur(30px)" padding="5vw">
                    <Flex width="100%" justifyContent="space-between" alignItems="flex-end">
                        <FormControl>
                            <FormLabel fontSize="1.5vw">Name of Event</FormLabel>
                            <Input 
                                type="text" outline="none" color="black"
                                backgroundColor="transparent" borderBottom="5px solid white">
                            </Input>
                        </FormControl>
                        <Select placeholder="Vertical" width="30vw" marginLeft="5vw">
                            <option value="aerofest">AeroFest</option>
                            <option value="biogen">Biogen</option>
                            <option value="bevents">BEvents</option>
                            <option value="cl">Coding & Logic</option>
                            <option value="db">Design & Build</option>
                            <option value="elecfest">ElecFest</option>
                            <option value="ignite">Ignite</option>
                            <option value="strategists">Strategists</option>
                            <option value="workshops">Workshops</option>
                        </Select>
                    </Flex>
                    <FormControl marginTop="4vh">
                        <FormLabel fontSize="1.5vw">Description</FormLabel>
                        <ReactMde
                        value={value}
                        onChange={setValue}
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={markdown =>
                          Promise.resolve(converter.makeHtml(markdown))
                        }
                       ></ReactMde>
                    </FormControl>
                    <Flex alignItems="center" justifyContent="space-between" width="100%">
                        <FormControl color="black" marginTop="4vh">
                            <RadioGroup value={radio} onChange={setRadio}>
                                <Radio value="i" marginRight="2vw">Individual</Radio>
                                <Radio value="t">Team</Radio>
                            </RadioGroup>
                        </FormControl>
                        {
                            radio==="t" &&
                            <FormControl marginTop="4vh" width="10vw">
                                <FormLabel color="black">Team size</FormLabel>
                                <Input type="number" outline="none" color="black" 
                                    backgroundColor="transparent" borderBottom="5px solid white"></Input>
                            </FormControl>
                        }
                    </Flex>
                    <Button marginTop="4vh" width="100%" backgroundColor="white" color="#0e101b">Submit</Button>
                </Box>
            </Box>
            </Stack>
        </CustomBox>  
    )
}

export default EditEvent