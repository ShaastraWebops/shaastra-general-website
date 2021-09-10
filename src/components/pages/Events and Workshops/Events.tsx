import React from 'react'
import {
    Text,
    Stack,
    Flex,
    Center,
    Box,
    Heading,
    Image,
    SimpleGrid,
    Container
} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import CustomBox from '../../shared/CustomBox'

function Events() {
    return (
        <CustomBox>
          <Box h='100vh'>
        <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 8}}
        py={{ base: 20, md: 20 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Explore{' '}
          <Text as={'span'} color={'orange.400'}>
            Events
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Have to add Events Content
         </Text>
         </Stack>
        </Box>
        </CustomBox>
    )
}

export default Events