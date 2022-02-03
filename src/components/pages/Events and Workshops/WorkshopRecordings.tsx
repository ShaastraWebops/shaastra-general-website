import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import PayRecording from "./PayRecording";

const WorkshopRecordings = () => {
  const [w, setW] = React.useState("");
  const [w1, setW1] = React.useState("");
  const [w2, setW2] = React.useState("");
  const [w3, setW3] = React.useState("");
  return (
    <Flex
      width={"100%"}
      flexDirection={["column", "column", "row", "row"]}
      justifyContent={"center"}
    >
      <Flex
        flexDirection={"column"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"10px"}
      >
        <Heading m={2} p={2}></Heading>
        <Text
          paddingTop={"20px"}
          fontSize={"30px"}
          fontWeight={800}
          paddingBottom={"0px"}
        >
          Get a Workshop Recording
        </Text>
        <Text
          paddingTop={"10px"}
          fontSize={"25px"}
          fontWeight={600}
          paddingBottom={"0px"}
        >
          At Price &#8377;400
        </Text>
        <Text
          paddingTop={"0px"}
          fontSize={"20px"}
          fontWeight={600}
          paddingBottom={"20px"}
        >
          Select a workshop
        </Text>

        <Flex width={"90%"} justifyContent={"center"}>
          <Select
            placeholder="Select a Workshop"
            value={w}
            onChange={(e) => setW(e.target.value)}
            marginBottom={"20px"}
          >
            <option value="ckxf0bz5k003cdbp7edik9klx">
              Inverse Kinematics using ROS Moveit
            </option>
            <option value="ckxepglch00122bp7gjk52d0i">
              Sustainability using Machine Learning and Data Science
            </option>
            <option value="ckxf366390043cup7872ocv1y">
              Circuit simulation and PCB design
            </option>
            <option value="ckxljoxqa00639bp7gu9o1sz9">
              Grant Writing Workshop
            </option>
            <option value="ckxf1ihnv003ccup7d2bn7a67">
              Path Tracking in Autonomous Vehicles
            </option>
            <option value="ckxen074m000p1up7bo0q5l17">
              A Complete Guide to Machine Learning
            </option>
            <option value="ckxezxg8v0030dbp7e8xq13uw">
              Build your own Autonomous Robot
            </option>
            <option value="ckxexs6fl002fcup7hcrld72v">
              Computers can fly now? (Intro to Cloud Computing)
            </option>
            <option value="ckxen40g6000q2bp7924y6qrm">
              Parallel Processing and Real-Time Operating Systems
            </option>
            <option value="ckxf0iexs003gdbp7fyuy0fe6">
              Full Stack Web development
            </option>
            <option value="ckxekc92m000c1up72t0h4h45">
              Zero to Hero in Computer Vision
            </option>
            <option value="ckxezt6nt002udbp76oar48e5">
              Learn Fusion 360: Design, Animate & Simulate
            </option>
            <option value="ckxemw5oi000o2bp77xtg9v0f">
              Introduction to Robotics
            </option>
            <option value="ckxf22vta003kcup79stiedlw">
              Art of Data Visualisation
            </option>
            <option value="ckxbr05w00004c9p74mji2rgd">
              Introduction to Embedded Systems Programming
            </option>
            <option value="ckxekmufd000e1up7dbj361ib">
              Understanding the Finite Element Method and its Applications
            </option>
            <option value="ckxewph1e001hcup72ls1hrjx">
              How to make a Discord Bot from scratch
            </option>
            <option value="ckxenjobj000u1up75tsph890">
              Introductory Data Science course With Real Life Projects
            </option>
            <option value="ckxepp6pj00182bp7h5790jnr">
              Introduction to Arduino and IoT
            </option>
            <option value="ckxentwt1000w1up7gi013e4e">
              Artificial Intelligence and Reinforcement Learning
            </option>
            <option value="ckxey7kfz0029dbp70sqbcovb">
              Hacking 101 with Microcontrollers
            </option>
            <option value="ckxepkbtu00142bp7cjws6894">
              Simulation of Mechanisms using MATLAB
            </option>
            <option value="ckxevm6oi000gcup70lp17fa1">
              Product Management 101
            </option>
            <option value="ckxnilxyt000j0bp7d9gp9a7e">Consult 101</option>
            <option value="cky6uehup00frfsp7br7sblfn">
              Engineering Robotics with Mathworks
            </option>
          </Select>
        </Flex>
        <PayRecording workshopIds={[w]} offerType="WORKSHOP" />
      </Flex>
      <Flex
        flexDirection={"column"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"10px"}
      >
        <Heading m={2} p={2}></Heading>
        <Text
          paddingTop={"20px"}
          fontSize={"30px"}
          fontWeight={800}
          paddingBottom={"0px"}
        >
          Get 3 Workshop Recordings
        </Text>
        <Text
          paddingTop={"10px"}
          fontSize={"25px"}
          fontWeight={600}
          paddingBottom={"0px"}
        >
          At Only Discounted Price &#8377;999
        </Text>
        <Text
          paddingTop={"0px"}
          fontSize={"20px"}
          fontWeight={600}
          paddingBottom={"20px"}
          textDecorationLine={"line-through"}
        >
          &#8377;1500
        </Text>
        <Text
          paddingTop={"0px"}
          fontSize={"20px"}
          fontWeight={600}
          paddingBottom={"20px"}
        >
          Select three workshops
        </Text>

        <Flex width={"90%"} justifyContent={"center"}>
          <Select
            placeholder="Select 1st Workshop"
            value={w1}
            onChange={(e) => setW1(e.target.value)}
            marginBottom={"20px"}
          >
            <option value="ckxf0bz5k003cdbp7edik9klx">
              Inverse Kinematics using ROS Moveit
            </option>
            <option value="ckxepglch00122bp7gjk52d0i">
              Sustainability using Machine Learning and Data Science
            </option>
            <option value="ckxf366390043cup7872ocv1y">
              Circuit simulation and PCB design
            </option>
            <option value="ckxljoxqa00639bp7gu9o1sz9">
              Grant Writing Workshop
            </option>
            <option value="ckxf1ihnv003ccup7d2bn7a67">
              Path Tracking in Autonomous Vehicles
            </option>
            <option value="ckxen074m000p1up7bo0q5l17">
              A Complete Guide to Machine Learning
            </option>
            <option value="ckxezxg8v0030dbp7e8xq13uw">
              Build your own Autonomous Robot
            </option>
            <option value="ckxexs6fl002fcup7hcrld72v">
              Computers can fly now? (Intro to Cloud Computing)
            </option>
            <option value="ckxen40g6000q2bp7924y6qrm">
              Parallel Processing and Real-Time Operating Systems
            </option>
            <option value="ckxf0iexs003gdbp7fyuy0fe6">
              Full Stack Web development
            </option>
            <option value="ckxekc92m000c1up72t0h4h45">
              Zero to Hero in Computer Vision
            </option>
            <option value="ckxezt6nt002udbp76oar48e5">
              Learn Fusion 360: Design, Animate & Simulate
            </option>
            <option value="ckxemw5oi000o2bp77xtg9v0f">
              Introduction to Robotics
            </option>
            <option value="ckxf22vta003kcup79stiedlw">
              Art of Data Visualisation
            </option>
            <option value="ckxbr05w00004c9p74mji2rgd">
              Introduction to Embedded Systems Programming
            </option>
            <option value="ckxekmufd000e1up7dbj361ib">
              Understanding the Finite Element Method and its Applications
            </option>
            <option value="ckxewph1e001hcup72ls1hrjx">
              How to make a Discord Bot from scratch
            </option>
            <option value="ckxenjobj000u1up75tsph890">
              Introductory Data Science course With Real Life Projects
            </option>
            <option value="ckxepp6pj00182bp7h5790jnr">
              Introduction to Arduino and IoT
            </option>
            <option value="ckxentwt1000w1up7gi013e4e">
              Artificial Intelligence and Reinforcement Learning
            </option>
            <option value="ckxey7kfz0029dbp70sqbcovb">
              Hacking 101 with Microcontrollers
            </option>
            <option value="ckxepkbtu00142bp7cjws6894">
              Simulation of Mechanisms using MATLAB
            </option>
            <option value="ckxevm6oi000gcup70lp17fa1">
              Product Management 101
            </option>
            <option value="ckxnilxyt000j0bp7d9gp9a7e">Consult 101</option>
            <option value="cky6uehup00frfsp7br7sblfn">
              Engineering Robotics with Mathworks
            </option>
          </Select>
        </Flex>
        <Flex width={"90%"} justifyContent={"center"}>
          <Select
            placeholder="Select 2nd Workshop"
            value={w2}
            onChange={(e) => setW2(e.target.value)}
            marginBottom={"20px"}
          >
            <option value="ckxf0bz5k003cdbp7edik9klx">
              Inverse Kinematics using ROS Moveit
            </option>
            <option value="ckxepglch00122bp7gjk52d0i">
              Sustainability using Machine Learning and Data Science
            </option>
            <option value="ckxf366390043cup7872ocv1y">
              Circuit simulation and PCB design
            </option>
            <option value="ckxljoxqa00639bp7gu9o1sz9">
              Grant Writing Workshop
            </option>
            <option value="ckxf1ihnv003ccup7d2bn7a67">
              Path Tracking in Autonomous Vehicles
            </option>
            <option value="ckxen074m000p1up7bo0q5l17">
              A Complete Guide to Machine Learning
            </option>
            <option value="ckxezxg8v0030dbp7e8xq13uw">
              Build your own Autonomous Robot
            </option>
            <option value="ckxexs6fl002fcup7hcrld72v">
              Computers can fly now? (Intro to Cloud Computing)
            </option>
            <option value="ckxen40g6000q2bp7924y6qrm">
              Parallel Processing and Real-Time Operating Systems
            </option>
            <option value="ckxf0iexs003gdbp7fyuy0fe6">
              Full Stack Web development
            </option>
            <option value="ckxekc92m000c1up72t0h4h45">
              Zero to Hero in Computer Vision
            </option>
            <option value="ckxezt6nt002udbp76oar48e5">
              Learn Fusion 360: Design, Animate & Simulate
            </option>
            <option value="ckxemw5oi000o2bp77xtg9v0f">
              Introduction to Robotics
            </option>
            <option value="ckxf22vta003kcup79stiedlw">
              Art of Data Visualisation
            </option>
            <option value="ckxbr05w00004c9p74mji2rgd">
              Introduction to Embedded Systems Programming
            </option>
            <option value="ckxekmufd000e1up7dbj361ib">
              Understanding the Finite Element Method and its Applications
            </option>
            <option value="ckxewph1e001hcup72ls1hrjx">
              How to make a Discord Bot from scratch
            </option>
            <option value="ckxenjobj000u1up75tsph890">
              Introductory Data Science course With Real Life Projects
            </option>
            <option value="ckxepp6pj00182bp7h5790jnr">
              Introduction to Arduino and IoT
            </option>
            <option value="ckxentwt1000w1up7gi013e4e">
              Artificial Intelligence and Reinforcement Learning
            </option>
            <option value="ckxey7kfz0029dbp70sqbcovb">
              Hacking 101 with Microcontrollers
            </option>
            <option value="ckxepkbtu00142bp7cjws6894">
              Simulation of Mechanisms using MATLAB
            </option>
            <option value="ckxevm6oi000gcup70lp17fa1">
              Product Management 101
            </option>
            <option value="ckxnilxyt000j0bp7d9gp9a7e">Consult 101</option>
            <option value="cky6uehup00frfsp7br7sblfn">
              Engineering Robotics with Mathworks
            </option>
          </Select>
        </Flex>
        <Flex width={"90%"} justifyContent={"center"}>
          <Select
            placeholder="Select 3rd Workshop"
            value={w3}
            onChange={(e) => setW3(e.target.value)}
            marginBottom={"20px"}
          >
            <option value="ckxf0bz5k003cdbp7edik9klx">
              Inverse Kinematics using ROS Moveit
            </option>
            <option value="ckxepglch00122bp7gjk52d0i">
              Sustainability using Machine Learning and Data Science
            </option>
            <option value="ckxf366390043cup7872ocv1y">
              Circuit simulation and PCB design
            </option>
            <option value="ckxljoxqa00639bp7gu9o1sz9">
              Grant Writing Workshop
            </option>
            <option value="ckxf1ihnv003ccup7d2bn7a67">
              Path Tracking in Autonomous Vehicles
            </option>
            <option value="ckxen074m000p1up7bo0q5l17">
              A Complete Guide to Machine Learning
            </option>
            <option value="ckxezxg8v0030dbp7e8xq13uw">
              Build your own Autonomous Robot
            </option>
            <option value="ckxexs6fl002fcup7hcrld72v">
              Computers can fly now? (Intro to Cloud Computing)
            </option>
            <option value="ckxen40g6000q2bp7924y6qrm">
              Parallel Processing and Real-Time Operating Systems
            </option>
            <option value="ckxf0iexs003gdbp7fyuy0fe6">
              Full Stack Web development
            </option>
            <option value="ckxekc92m000c1up72t0h4h45">
              Zero to Hero in Computer Vision
            </option>
            <option value="ckxezt6nt002udbp76oar48e5">
              Learn Fusion 360: Design, Animate & Simulate
            </option>
            <option value="ckxemw5oi000o2bp77xtg9v0f">
              Introduction to Robotics
            </option>
            <option value="ckxf22vta003kcup79stiedlw">
              Art of Data Visualisation
            </option>
            <option value="ckxbr05w00004c9p74mji2rgd">
              Introduction to Embedded Systems Programming
            </option>
            <option value="ckxekmufd000e1up7dbj361ib">
              Understanding the Finite Element Method and its Applications
            </option>
            <option value="ckxewph1e001hcup72ls1hrjx">
              How to make a Discord Bot from scratch
            </option>
            <option value="ckxenjobj000u1up75tsph890">
              Introductory Data Science course With Real Life Projects
            </option>
            <option value="ckxepp6pj00182bp7h5790jnr">
              Introduction to Arduino and IoT
            </option>
            <option value="ckxentwt1000w1up7gi013e4e">
              Artificial Intelligence and Reinforcement Learning
            </option>
            <option value="ckxey7kfz0029dbp70sqbcovb">
              Hacking 101 with Microcontrollers
            </option>
            <option value="ckxepkbtu00142bp7cjws6894">
              Simulation of Mechanisms using MATLAB
            </option>
            <option value="ckxevm6oi000gcup70lp17fa1">
              Product Management 101
            </option>
            <option value="ckxnilxyt000j0bp7d9gp9a7e">Consult 101</option>
            <option value="cky6uehup00frfsp7br7sblfn">
              Engineering Robotics with Mathworks
            </option>
          </Select>
        </Flex>

        <PayRecording workshopIds={[w1, w2, w3]} offerType="3_WORKSHOPS" />
      </Flex>
    </Flex>
  );
};

export default WorkshopRecordings;
