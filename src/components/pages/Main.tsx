import React from "react";
import { Heading } from "@chakra-ui/react";
import { Grid, GridItem, Container, Text, Box, Center, Flex } from "@chakra-ui/react";
import "../../main.css";
import { Link } from "react-router-dom";

const sections = [
    {
        title: "About Us",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti velit, veniam praesentium, rerum suscipit enim magnam dignissimos a, est cum ad repellat? Minima nostrum numquam animi odit dolor, similique amet?",
    },
    {
        title: "Vision",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti velit, veniam praesentium, rerum suscipit enim magnam dignissimos a, est cum ad repellat? Minima nostrum numquam animi odit dolor, similique amet?",
    },
];

const data = [
    {
        id: 1,
        title: "Shows",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur perferendis, facilis fugiat sequi dolore cupiditate maiores alias ipsum modi suscipit praesentium. Dolorem nihil veritatis assumenda ab ex harum? Magni, repellendus.",
    },
    {
        id: 2,
        title: "Tech Ambi",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur perferendis, facilis fugiat sequi dolore cupiditate maiores alias ipsum modi suscipit praesentium. Dolorem nihil veritatis assumenda ab ex harum? Magni, repellendus.",
    },
    {
        id: 3,
        title: "Game Dev",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur perferendis, facilis fugiat sequi dolore cupiditate maiores alias ipsum modi suscipit praesentium. Dolorem nihil veritatis assumenda ab ex harum? Magni, repellendus.",
    },
];

export default function Main() {
    return (
        <>
            <Heading color="#00AB74" size="xl" textAlign="center">
                ENVISAGE
            </Heading>

            <Flex className="sections--container" direction="column">
                {sections.map(({ title, desc }) => (
                    <Container className="sections__section" width="60%" margin="5">
                        <Heading color="#35D7FF" fontFamily="monospace">
                            {title}
                        </Heading>
                        <br />
                        <Text color="#FFE8E0" fontSize="xl">
                            {desc}
                        </Text>
                    </Container>
                ))}
            </Flex>
            <div>
                <Center>
                    <Container p="1" margin="1" maxW="container.xl">
                        <Box className="root" border="1px solid white" height="80px">
                            <Flex justify="center" align="center" height="100%">
                                <Heading color="#35D7FF" textAlign="center">
                                    Projects
                                </Heading>
                            </Flex>
                        </Box>
                        <Grid maxWidth="100%" templateColumns="repeat(3, 1fr)" columnGap="4" className="wrapper--level__1" wrap="nowrap">
                            {data.map(({ title, desc, id }) => (
                                <GridItem border="1px solid white" className="tree--level__1 node">
                                    <Link to={{ pathname: `/project/${id}`, state: { title } }}>
                                        <Container>
                                            <Heading color="#35D7FF" size="lg" textAlign="center" verticalAlign="center">
                                                {title}
                                            </Heading>
                                            <Container>
                                                <Text>{desc}</Text>
                                            </Container>
                                        </Container>
                                    </Link>
                                </GridItem>
                            ))}
                        </Grid>
                    </Container>
                </Center>
            </div>
        </>
    );
}