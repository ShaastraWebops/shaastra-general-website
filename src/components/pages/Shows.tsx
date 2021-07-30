import React from "react";
import { Heading, Image, Center, Text, Grid, GridItem, Container, useBreakpointValue } from "@chakra-ui/react";
import { ListItem, ListIcon, List } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import CustomBox from "../shared/CustomBox";
import { ReactComponent as LogoBlack } from "./../../images/shows/Shows_black.svg"
import { ReactComponent as LogoWhite } from "./../../images/shows/Shows_white.svg"
// import { ColorModeSwitcher } from "../../styles/themes/ColorModeSwitcher";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Link } from "react-router-dom";
// import { Center, Square, Circle } from "@chakra-ui/react"



export default function Shows() {
    const cols = useBreakpointValue({ base: 1, md: 2 });
    const HeaderLogo = useColorModeValue(LogoBlack, LogoWhite)
    const height = useBreakpointValue({ base: "50", lg: "40" })

    return (
        
        <CustomBox >
            <Center  h="100px" >
                <HeaderLogo height={height} width="88" />
            </Center>
            {/* <Link to="/" >
                
            </Link> */}
            {/* <Heading textAlign="center" marginBottom="10" data-aos="fade-left" textTransform="uppercase" textDecor="underline">
                <HeaderLogo height={height} width="200" />
            </Heading> */}
            <Center data-aos="zoom-in">
                <Image src="/shows_1.png" borderRadius="8" width="80%" />
            </Center>
            <Center margin="20px 0">
                <Text width="80%" data-aos="fade-right" textAlign="justify">
                Professional shows are a fitting end to each day of Shaastra. These techno-entertainment shows, ever since their conception, have hosted artists from across the globe. Our audience counts up in thousands, which is a testament to its success and popularity. These include Mirage, a laser show by an international group, Sand Art show by world-renowned artists, Bike Stunt show by French performers and EDM (Electronic Dance Music) Night.

                </Text>
            </Center>
            <Grid templateColumns={`repeat(${cols || 2}, 1fr)`} justifyItems="center" padding="0 10px" rowGap="5">
                <GridItem>
                    <Center>
                        <Image borderRadius="8" data-aos="zoom-in" width="600px" src="/shows_2.png" height="500px"  />
                    </Center>
                </GridItem>
                <GridItem>
                    <Center>
                        <Image borderRadius="8" data-aos="zoom-in" width="600px" src="/shows_3.png" height="500px" />
                    </Center>
                </GridItem>
            </Grid>
            <Container marginTop="10" paddingBottom="20">
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        <Text as="span" color="#00A878">
                            2016
                        </Text>
                        <Text marginLeft="10">Adelaida, Vivek Patil (sand + light artist), Freestyle Air - 3 act</Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        <Text as="span" color="#00A878">
                            2017
                        </Text>
                        <Text marginLeft="10"> IDRL drone race</Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        <Text as="span" color="#00A878">
                            2018
                        </Text>
                        <Text marginLeft="10">Mariana Bo ( best ever EDM night), Get Massive (Duo), Broken Symmetry, Suhani Shah</Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        <Text as="span" color="#00A878">
                            2019
                        </Text>
                        <Text marginLeft="10">Vivek Patil, Vilas Nayak</Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        <Text as="span" color="#00A878">
                            2020
                        </Text>
                        <Text marginLeft="10">Heimdall, Vivek Desai </Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color="green.500" />
                        <Text as="span" color="#00A878">
                            2020-21
                        </Text>
                        <Text marginLeft="10"> Ray Li, Dan Rhodes (he recently blew up on YT, so it helps our case), Sonic Snares, Kenny Sebastian, Soda (Sudarshan Ramamurthy), Sushil Jazz, Rishabh Rajan</Text>
                    </ListItem>
                </List>
            </Container>
        </CustomBox>
    );
}

