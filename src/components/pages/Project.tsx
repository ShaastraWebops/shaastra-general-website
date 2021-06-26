import { GridItem, Grid, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

const projects = [
    [
        {
            imgUrl: "https://bit.ly/sage-adebayo",
            title: "Project 1",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
        {
            imgUrl: "https://bit.ly/sage-adebayo",
            title: "Project 2",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
        {
            imgUrl: "https://bit.ly/sage-adebayo",
            title: "Project 3",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
    ],
    [
        {
            imgUrl: "https://bit.ly/sage-adebayo",
            title: "Project 1",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
        {
            imgUrl: "https://bit.ly/sage-adebayo",
            title: "Project 2",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
        {
            imgUrl: "https://bit.ly/sage-adebayo",
            title: "Project 3",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
    ],
    [
        {
            imgUrl: "https://bit.ly/sage-adebayo",
            title: "Project 1",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
        {
            imgUrl: "https://bit.ly/sage-adebayo",
            title: "Project 2",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
        {
            imgUrl: "https://bit.ly/sage-adebayo",
            title: "Project 3",
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in earum, dicta repudiandae deleniti distinctio provident non fuga eaque quidem sit cum repellendus similique dolorem dolorum recusandae facere doloremque. In.
        Cumque, qui adipisci. Voluptatibus laborum quidem eveniet, unde adipisci distinctio fugit magnam ipsum vitae odit, repellat iste aliquam, necessitatibus reiciendis consectetur saepe quibusdam sed? Harum optio nam saepe quod animi?
        Rem nemo quas molestias dolorum aliquam repellendus delectus quia eveniet libero, natus deserunt. Repellat illum consequatur voluptates, vel asperiores iure, minus aliquid libero sint quisquam magnam autem in a veritatis.
        Sint molestiae voluptatem porro magni et minus laborum perferendis ut, dolore excepturi? Amet consequatur hic eaque quaerat quibusdam doloribus perferendis delectus ipsum enim praesentium natus officia, saepe expedita nihil sequi.
        Ipsa recusandae sed voluptatum quam at doloribus. Rerum facere nihil corporis tempora? Libero facere iure distinctio impedit. Exercitationem asperiores sapiente ducimus enim, laborum nihil ullam cumque iure numquam earum ipsum.`,
        },
    ],
];

export default function Project() {
    let { id }: { id: any | null } = useParams();
    const {
        location: { state },
    } = useHistory();
    if (isNaN(parseInt(id))) return <h1>404 Not Found</h1>;
    else id = parseInt(id);
    const data = projects[(id - 1) % 3];
    const { title } = state as any;
    return (
        <>
            {title && (
                <Heading textAlign="center" marginTop="10" textDecoration="underline" color="#00AB74">
                    {title}
                </Heading>
            )}
            <Grid templateColumns="repeat(1, 1fr)" className="projects" rowGap="10" p="20">
                {data &&
                    data.map(({ imgUrl, title, desc }) => (
                        <GridItem key={title}>
                            <Heading color="#35D7FF" textDecoration="underline">
                                {title}
                            </Heading>
                            <br />
                            <Flex>
                                <div>
                                    <Image width="60%" src={imgUrl} alt={title} />
                                </div>
                                <div>
                                    <Text color="#FFE8E0" textAlign="justify">
                                        {desc}
                                    </Text>
                                </div>
                            </Flex>
                        </GridItem>
                    ))}
            </Grid>
        </>
    );
}
