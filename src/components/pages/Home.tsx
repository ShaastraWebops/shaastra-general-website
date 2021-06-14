import * as React from 'react'
import {
    Text,
    VStack,
    Code,
    Grid,
    useColorModeValue,
    Box,
  } from "@chakra-ui/react"
import { ColorModeSwitcher } from '../../styles/themes/ColorModeSwitcher'
import {ReactComponent as DiceOutlineDarkAnimated} from "./../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg"
import {ReactComponent as DiceOutlineLightAnimated} from "./../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg"

interface Props {
    
}

const Home = (props: Props) => {

    const Logo = useColorModeValue(DiceOutlineDarkAnimated, DiceOutlineLightAnimated)
    const bg = useColorModeValue("link", "primary")
    return (
        <Box bg={bg} textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            {/* <img src={"./../../images/logo/animated/looped/Dice_Outline_Light_animated.svg"} alt="Shaastra Logo" /> */}
            <Logo height="200" width="auto" />
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
          </VStack>
        </Grid>
      </Box>
    )
}

export default Home
