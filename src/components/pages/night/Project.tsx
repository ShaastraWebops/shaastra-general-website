import {
  Heading,
  Text,
  Box,
  SimpleGrid,
  Image,
  Flex,
  useColorModeValue,
  Center,
} from '@chakra-ui/react'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './../../../styles/night/night.css'
import CustomBox from './../../shared/CustomBox'
import show1 from '../../../images/night/projects/show_1.png'
import show2 from '../../../images/night/projects/show_2.png'
import show3 from '../../../images/night/projects/show_3.png'
import show4 from '../../../images/night/projects/show_4.png'
import show5 from '../../../images/night/projects/show_5.png'
import show6 from '../../../images/night/projects/show_6.png'
import tech1 from '../../../images/night/projects/tech_1.png'
import tech2 from '../../../images/night/projects/tech_2.png'
import tech3 from '../../../images/night/projects/tech_3.png'
import tech4 from '../../../images/night/projects/tech_4.png'
import game1 from '../../../images/night/projects/game_1.jpg'
import game2 from '../../../images/night/projects/game_2.png'
import game3 from '../../../images/night/projects/game_3.jpg'
import Footer from '../../shared/Footer'
import '../../../styles/night/Projects.css'

const projects = [
  [
    {
      imgUrl: show1,
      title: 'XY Plotter',
      desc: `An X–Y plotter is a plotter that operates in two axes of motion ("X" and "Y") in order to draw continuous vector graphics. The term was used to differentiate it from standard plotters which had control only of the "y" axis, the "x" axis being continuously fed to provide a plot of some variable with time. Plotters differ from Inkjet and Laser printers in that a plotter draws a continuous line, much like a pen on paper, while inkjet and laser printers use a very fine matrix of dots to form images, such that while a line may appear continuous to the naked eye, it in fact is a discrete set of points.
            `,
    },
    {
      imgUrl: show2,
      title: 'Kinectic DJ',
      desc: `  Virtual Dj with kinect, as the name suggests focuses on creating a Dj environment virtually using Microsoft kinect as a controller and unity3d as a platform to create fabulous graphics .We have used Unity 3d software and kinect to make the DJ. Unity was used to make an avatar exactly like our mirror image .This mirror image motion was achieved using Kinect. Avatar can be anything eg:robot, skeleton,etc depending on our choice of 3d model. These different avatars are possible in Unity. Additionally when the avatar makes specific moves effects like smoke,explosion,volume, pitch , panning variation are observed. Smoke ,explosion and all other effects are also created in unity. We used LineRenderer, Particle System,Sprite Renderer to name a few to make effects and 3d sound reverb, stereo pan, pitch etc for audio parts. All the integration and control part was done by coding in C# language using monodevelop.`,
    },
    {
      imgUrl: show3,
      title: 'Kinectic Dance',
      desc: `Virtual kinetic dance, as the name suggests we create a virtual environment using Microsoft/Xbox kinect as controller.The basic idea is when a person is dancing  we capture the movements of the person using the kinect and make multiple avatars on the body. It’s pretty much similar to the Kinetic Dj, but instead of focusing on the audio we focus more on the movements of the body.The process on how to capture and make use of the movement of the body is by unity. Eg : when the person is dancing we can add multiple animations on the movements to make it look more engaging.Through Kinetic Dance is similar to Kinetic Dj the process of doing the animation/effects make them different.`,
    },
    {
      imgUrl: show4,
      title: 'Infinity Dodecahedron',
      desc: `An Infinity Dodecahedron is an extended version of a hypercube. The 12 faces are made of one-way mirrors (one way mirror reflective foils on acrylic plexiglass sheets) and each edge has an RGB LED strip attached to it. All edges of each dodecahedron look like infinite voids with multicolored lights expanding into infinity. This produces stunning visual effects inside the compact dodecahedron structure. Apart from that, a sound sensor is attached to the arduino to control the LED lights dynamically based on the music played to give unique patterns. The patterns generated can also be hard coded in the Arduino IDE. Modifications like placing a feature inside the dodecahedron could make it more visually appealing.`,
    },
    {
      imgUrl: show5,
      title: 'LED Mirror',
      desc: `Let's change the traditional mirror, how about a pixelated one. This project builds an interactive pixelated mirror from LEDs. This will include looking from camera and capturing face, enhancing the expressions and then encoding them so that it can be displayed in the “mirror”. This project has some unique future scope, which is transferring online video directly from pc (in a meet) to be displayed in led mirror. This way it can be interactive even in this online mode. `,
    },
    {
      imgUrl: show6,
      title: 'Dance Bot',
      desc: `As the name suggests, dance bot dances. This works by adding motors to its legs so that it can rotate based on the code/song. Since the legs are controlled, it can also walk, not just normal walk…...moonwalk. Obstacle avoidance is also there so it won’t bump into things. It is a compact bot that is covered with custom 3D printed shapes. Design your own shape to give your personal touch. Future functionalities that can be added are some hand motions using some more motors.

`,
    },
  ],
  [
    {
      imgUrl: tech1,
      title: 'Inside Out- FaceAI Robot',
      desc: `This IoT based project consists of many things, primarily of which is face recognition and responding to commands. It can be used to identify people at the security, or it can even be placed in a room following your voice commands. Integrating different modules like motors to move the face, camera to see, we could use some display screens to show eye structures, microphone and speakers to listen and give voice output will be an exciting journey. Here you can also apply your kinematic knowledge to use motors for jaw movement efficiently. Designing and 3d printing your desired face to make it look nice.`,
    },
    {
      imgUrl: tech2,
      title: 'I-Spy Ninja Gloves',
      desc: `We will use these smart gloves to navigate through our smart devices, and also use gesture control for some advanced navigation systems. Particular arm gestures will be recognized by sensors on the gloves which can be used to control functionality of the other project, or perform additional tasks.One of the scope is Gesture Vocalizer, this Smart Gloves can be used for Sign language translation for Mute Community and thereby aid to their special needs. `,
    },
    {
      imgUrl: tech3,
      title: 'Interactive LED Matrix/Dome/Table',
      desc: `It is an interactive matrix of LEDs consisting of  squares, with an LED and sensor at each triangle. This matrix will be laid out on a flat surface (if possible we can place them on a dome like 3D structure). It is programmed with a Raspberry Pi to light up and produce a MIDI signal that can each have a different sound depending on which triangle you place your hand on. This makes the dome a giant musical instrument, ideal for playing music with multiple people simultaneously.
Future Ideas: Converting this LED Matrix to a Pixelated mirror, which could either stream the video off of an online meet or show the face in front of it.
`,
    },
    {
      imgUrl: tech4,
      title: 'AR Painting OpenCV',
      desc: `Wouldn’t it be cool if you could just wave your hand in the air to draw something virtually and it actually draws it on the screen? It could be even more interesting if we didn’t use any special hardware to actually achieve this, just plain simple computer vision would do. As the name suggests, we are going to create an AR painter using AI. Given the real time webcam data, this paint-like python application uses OpenCV library to track an object-of-interest (like the fingers of your hand) and allows the user to draw by moving the object, which makes it both awesome and challenging to draw simple things. Many creative customizable features can be added too which will give diversity while painting.`,
    },
  ],
  [
    {
      imgUrl: game1,
      title: 'Narrative AR',
      desc: `A choice-based interactive narrative in augmented reality, with no external controller, and woven with a number of interactive demos. We start with a Cube character (non-rigid body which can transform into random objects)
Place it on a surface in augmented reality (preferably a table in the real world, use plane detection and guidelines) A story begins, the cube can speak. It morphs into objects as it tells its story.
At times, it stops and gives the player a choice in conversation. The choices are presented as augmented bubbles to the left and right of the cube. The player can focus on and tap to choose a dialog
`,
    },
    {
      imgUrl: game2,
      title: 'Alternating Endless Runner',
      desc: `The game can be 2D or 3D.
Gameplay: there are two phases of alternating gameplay. The first phase is where the player is running endlessly for a fixed distance, say 2 or 3 km. This part is procedurally generated or stitched using prefabs like in Subway Surfers. 
The second phase is where the player is running in a fixed map - they can never stop though - they’re running in the map making choices of their paths, trying to collect things and open doors / loot houses / take down enemies / cook food / etc.
After moving in the first phase, switch to second, then first, then second and keep alternating. Design some different maps for the second phase. Design appropriate transitions in the environment for the first phase.
On top of this mechanism, any themes can be applied: cops chasing robbers in the middle of the night with homes as the second phase maps; or a man trying to escape marine creatures in a magical, sea setting; or a monkey (player) being chased by a person through the hostel - raiding rooms in the second phase.
`,
    },
    {
      imgUrl: game3,
      title: 'CVI Perspective Games',
      desc: `A couple of games that use CVI (Face recognition) to give a sense of perspective, and to demonstrate a responsive CVI based control scheme for a game.
Proposal: two games, one as a tech demo, second as the full game
1.	A linear obstacle avoiding game based in space with a retro/wireframe art scheme.
The player controls the location of the ship with the coordinates of their… face.
Environment reacts with perspective change as ship location changes (based on VRBallGame perspective mechanism). Mobile version works with gyro/accel, not CVI. Target both PC and Mobile.

2.	A 3D hidden odyssey game (requires modelling work), with objects with embedded cameras scattered in the room (laptop, smartphone, cctv, camcorder). To switch perspective, the player winks/blinks at another camera. To identify a Hidden Object, the player winks/blinks at it. Cameras move according to player head movement - move left when head goes right wrt screen, to give an intuitive perspective feel.
Or another 3D game with camera-based room traversal.
`,
    },
  ],
]

export default function Project() {
  const color = useColorModeValue('white', 'black')
  const bgcolor = useColorModeValue('gray.700', 'gray.200')

  let { id }: { id: any | null } = useParams()
  const {
    location: { state },
  }: any = useHistory()
  if (isNaN(parseInt(id))) return <h1>404 Not Found</h1>
  else id = parseInt(id)
  const data = projects[(id - 1) % 3]

  return (
    <CustomBox>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
      >
        <Center className='header-ctn' marginTop={10}>
          <Heading marginTop={12} fontSize='7xl'>
            <span>{state}</span>
          </Heading>
        </Center>
        {data &&
          data.map(({ imgUrl, title, desc }, index) => (
            <Box
              rounded={'lg'}
              boxShadow={'lg'}
              textColor={color}
              bgColor={bgcolor}
              p={8}
              marginTop={8}
              marginLeft={8}
              marginRight={8}
              marginBottom={8}
              justifyContent='center'
              alignItems='center'
              textAlign='center'
            >
              <SimpleGrid columns={[1, 1, 2]} spacing='40px'>
                <Center>
                  <Image
                    alt='image1'
                    src={imgUrl}
                    rounded='xl'
                    width='100%'
                    height='auto'
                    maxH='400px'
                  ></Image>
                </Center>
                <Flex
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                  textAlign='center'
                >
                  <Heading margin={2} padding={2} className='sub-heading'>
                    {title}
                  </Heading>
                  <Text fontSize='lg' padding={2}>
                    {desc}
                  </Text>
                </Flex>
              </SimpleGrid>
            </Box>
          ))}
      </Flex>
      <Footer
        designed={[
          { name: 'Prithiviraj P', mail: 'na19b052@smail.iitm.ac.in' },
        ]}
      />
    </CustomBox>
  )
}
