import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
 const handleChange=()=>{
    navigate("/")
 }
  const handleSubmit = async() => {
    // console.log(email, password);
    if(email!==""&& password!==""){
    await axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((res) => {
        // navigate("/login.jsx")
        console.log(res.status);
        if(res.status===200){
            handleChange()
        }
      })
      .catch((e) => {
        alert("Enter Valid email or password ");
        setError(true);
      });
    }else{
        alert("Enter Valid email or password ");
    }
  };
  return (
  
    

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        maxW={"100%"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} w="35%" py={20} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"3xl"}>Login </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleSubmit}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
   
  );
};
