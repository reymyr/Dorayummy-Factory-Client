import React from 'react';
import {
    Text,
    Box,
    Center,
    Heading,
    Flex,
    Icon,
    Stack,
    InputGroup,
    InputLeftAddon,
    Input,
    Button,
    Link as LinkCh
} from '@chakra-ui/react'
import { Container } from '../components/Container'
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom"
const Login = () => {
    return(
    <Container>
        <Box minH={"100vh"}>
            <Flex justifyContent="center" alignItems="center" w="100vw" h="100vh">
                <Box borderRadius="20px" boxShadow="md" h="420px" w="500px">
                    <Center borderTopRightRadius="20px" borderTopLeftRadius="20px" h="100px" bgColor={"#14279B"} color="white">
                        <Icon as={BsPersonFill} w={12} h={12} color="white" mr="10px"/>
                        <Heading>Login</Heading>
                    </Center>
                    <Flex mt="50px" flexDir={"column"} alignItems="center" justifyContent="center">
                        <Stack spacing={4} width="450px">
                            <InputGroup >
                                <InputLeftAddon children="Username" w="120px" bgColor={"#5C7AEA"} height="50px" color="white"/>
                                <Input type="text" placeholder="Enter username here" height="50px" />
                            </InputGroup>
                            <InputGroup >
                                <InputLeftAddon children="Password" w="120px" bgColor={"#5C7AEA"} height="50px" color="white"/>
                                <Input type="password" placeholder="Enter password here" height="50px"/>
                            </InputGroup>
                        </Stack>
                        <Link to="/">
                            <Button backgroundColor="#3D56B2" color="white" border="1px solid #888888" width="100px" mt="20px">
                                Login
                            </Button>
                        </Link>
                        <Center mt="20px">
                            <Text color="black">Belum punya akun? <Link to="/register"><LinkCh color="#3D56B2">Register</LinkCh></Link></Text>
                        </Center>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </Container>
    )
}
  
  export default Login