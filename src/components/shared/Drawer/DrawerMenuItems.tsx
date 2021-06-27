import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import { Flex, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const DrawerDesktopMenuItems = () => {

    const [menu, setMenu] = useState<string>("e&w")

    const menuItems = () => {
        switch (menu) {
            case "e&w":
                return (
                    <>
                        <Text textAlign="left" width="100%" fontSize={40}><Link to="/events">Events</Link></Text>
                        <Text textAlign="left" width="100%" fontSize={40}><Link to="/summit">Summit</Link></Text>
                        <Text textAlign="left" width="100%" fontSize={40}><Link to="/tif">TiF</Link></Text>
                        <Text textAlign="left" width="100%" fontSize={40}><Link to="/workshops">Workshops</Link></Text>
                    </>
                )
            case "exhibitions":
                return (
                    <>
                        <Text textAlign="left" width="100%" fontSize={40}><Link to="/defence-tech">Defence Tech</Link></Text>
                        <Text textAlign="left" width="100%" fontSize={40}><Link to="/exhibitions-speakers">Exhibitions Speakers</Link></Text>
                        <Text textAlign="left" width="100%" fontSize={40}><Link to="/others-exhibitions">Others</Link></Text>
                    </>
                )
            case "shaastra-nights":
                return (
                    <>
                        <Text textAlign="left" width="100%" fontSize={40}><Link to="/shows">Shows</Link></Text>
                        <Text textAlign="left" width="100%" fontSize={40}><Link to="/envisage">Envisage</Link></Text>
                    </>
                )
            case "schools":
                return (
                    <>
                        <Text textAlign="left" width="100%" fontSize={40}><Link to="/shaastra-juniors">Shaastra Juniors</Link></Text>
                        <Text textAlign="left" width="100%" fontSize={40}><Link to="/jmt">JMT</Link></Text>
                    </>
                )
            case "click":
                return <Text textAlign="left" width="100%" fontSize={40}><Link to="/workshops"> Please click to go </Link></Text>
            default:
                return <Text textAlign="left" width="100%" fontSize={40}><Link to="/workshops"> Please hover to see options </Link></Text>
        }
    }

    return (
        <>
            <Flex flexDirection="column" justifyContent="flex-start" height="90%" flex={2}>
                <Text className="menu-text" _hover={{background: "primary.400"}} onMouseOver={() => setMenu("e&w")} fontSize={40} fontFamily={"monospace"} fontStyle={"italic"} pl={12} p={3} pr={8} mb={4}>Events and Workshops</Text>
                <Text className="menu-text" _hover={{background: "primary.400"}} onMouseOver={() => setMenu("exhibitions")} fontSize={40} fontFamily={"monospace"} fontStyle={"italic"} pl={12} p={3} pr={8} mb={4}>Exhibitions</Text>
                <Text className="menu-text" _hover={{background: "primary.400"}} onMouseOver={() => setMenu("shaastra-nights")} fontSize={40} fontFamily={"monospace"} fontStyle={"italic"} pl={12} p={3} pr={8} mb={4}>Shaastra Nights</Text>
                <Text className="menu-text" _hover={{background: "primary.400"}} onMouseOver={() => setMenu("schools")} fontSize={40} fontFamily={"monospace"} fontStyle={"italic"} pl={12} p={3} pr={8} mb={4}>Schools</Text>
                <Text className="menu-text" _hover={{background: "primary.400"}} onMouseOver={() => setMenu("click")} fontSize={40} fontFamily={"monospace"} fontStyle={"italic"} pl={12} p={3} pr={8} mb={4}><Link to="/social-endeavours">Social Endeavours</Link></Text>
                <Text className="menu-text" _hover={{background: "primary.400"}} onMouseOver={() => setMenu("click")} fontSize={40} fontFamily={"monospace"} fontStyle={"italic"} pl={12} p={3} pr={8} mb={4}><Link to="/speakers">Speakers</Link></Text>
                <Text className="menu-text" _hover={{background: "primary.400"}} onMouseOver={() => setMenu("click")} fontSize={40} fontFamily={"monospace"} fontStyle={"italic"} pl={12} p={3} pr={8} mb={4}><Link to="/sponsors">Sponsors</Link></Text>
                <Text className="menu-text" _hover={{background: "primary.400"}} onMouseOver={() => setMenu("click")} fontSize={40} fontFamily={"monospace"} fontStyle={"italic"} pl={12} p={3} pr={8} mb={4}><Link to="/team">Team</Link></Text>
            </Flex>
            <Flex display={{ base: "none", lg: "flex" }} flexDirection={"column"} justifyContent="center" alignItems="center" flex={1} height={"100%"}>
                {
                    menuItems()
                }
            </Flex>
        </>
    )
}

export const DrawerMobileMenuItems = () => {
    return (
        <Flex flexDirection="column" justifyContent="flex-start" height="90%" flex={1}>
            <Accordion allowToggle>
                <AccordionItem border={0}>
                    <AccordionButton pl={0}>
                        <Text fontSize={27} fontStyle={"normal"} >Events and Workshops</Text>
                    </AccordionButton>
                    <AccordionPanel>
                        <Text fontSize="xl"><Link to="/events">Events</Link></Text>
                        <Text fontSize="xl"><Link to="/summit">Summit</Link></Text>
                        <Text fontSize="xl"><Link to="/tif">TiF</Link></Text>
                        <Text fontSize="xl"><Link to="/workshops">Workshops</Link></Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem border={0}>
                    <AccordionButton pl={0}>
                        <Text fontSize={27} fontStyle={"normal"} >Exhibitions</Text>
                    </AccordionButton>
                    <AccordionPanel>
                        <Text fontSize="xl"><Link to="/defence-tech">Defence Tech</Link></Text>
                        <Text fontSize="xl"><Link to="/exhibitions-speakers">Exhibitions Speakers</Link></Text>
                        <Text fontSize="xl"><Link to="/others-exhibitions">Others</Link></Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem border={0}>
                    <AccordionButton pl={0}>
                        <Text fontSize={27} fontStyle={"normal"} >Shaastra Nights</Text>
                    </AccordionButton>
                    <AccordionPanel>
                        <Text fontSize="xl"><Link to="/shows">Shows</Link></Text>
                        <Text fontSize="xl"><Link to="/envisage">Envisage</Link></Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem border={0}>
                    <AccordionButton pl={0}>
                        <Text fontSize={27} fontStyle={"normal"} >Schools</Text>
                    </AccordionButton>
                    <AccordionPanel>
                        <Text fontSize="xl"><Link to="/shaastra-juniors">Shaastra Juniors</Link></Text>
                        <Text fontSize="xl"><Link to="/jmt">JMT</Link></Text>
                    </AccordionPanel>
                </AccordionItem>
                <Text p={2} pl={0} fontSize={27} fontStyle={"normal"}><Link to="/social-endeavours">Social Endeavours</Link></Text>
                <Text p={2} pl={0} fontSize={27} fontStyle={"normal"}><Link to="/speakers">Speakers</Link></Text>
                <Text p={2} pl={0} fontSize={27} fontStyle={"normal"}><Link to="/sponsors">Sponsors</Link></Text>
                <Text p={2} pl={0} fontSize={27} fontStyle={"normal"}><Link to="/team">Team</Link></Text>
            </Accordion>
        </Flex>
    )
}
