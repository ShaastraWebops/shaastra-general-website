import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Pricing(props) {
    return (
        <Center py={6}>
            <Box
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        bg={useColorModeValue('green.50', 'green.900')}
                        p={2}
                        px={3}
                        color={'#301b1b'}
                        rounded={'full'}>
                        {props.ComboName}
                    </Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        <Text fontSize={'3xl'}>&#8377;</Text>
                        <Text fontSize={'6xl'} fontWeight={800}>
                            {props.DiscountedPrice}
                        </Text>
                    </Stack>
                    <Text color={'gray.500'} textDecorationLine={'line-through'}>&#8377;{props.ActualPrice}</Text>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                    <List spacing={3}>
                        <Text fontWeight={600} fontSize={'17px'}>
                            {props.title}
                        </Text>
                        <Text paddingLeft={'20px'} fontWeight={600}>
                            <ul>
                                <li>
                                    {props.WS1}
                                    
                                </li>
                                <li>
                                    {props.WS2}
                                    
                                </li>                                <li>
                                    {props.WS3}

                                </li>
                            </ul>
                        </Text>
                        {/* <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            5.000 page views
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            50 automation executions
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            50 identified users
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            All features
                        </ListItem> */}
                    </List>

                    <Button
                        mt={10}
                        w={'full'}
                        bg={'#301b1b'}
                        color={'white'}
                        rounded={'xl'}
                        boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                        _hover={{
                            bg: '#543535',
                        }}
                        _focus={{
                            bg: '#543535',
                        }}>
                        Register Now
                    </Button>
                </Box>
            </Box>
        </Center>
    );
}