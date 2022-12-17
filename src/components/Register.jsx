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
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loggedin, setLoggedIn] = useState(false);
  const isError = email === "";

  const navigate = useNavigate();
  const handleChange = (res) => {
    if (res.status === 200) {
      navigate("/login");
      setLoggedIn(true);
    } else {
      navigate("/register");
    }
  };

  const handleSubmit = () => {
    console.log("clicked")
    if (email !== "" && password !== "") {
      axios
        .post("http://localhost:5000/register", {
          email,
          password,
        })
        .then((res) => {
          console.log("res",res)
          handleChange(res);
        })
        .catch((e) => {
          alert("email already exist");
          setError(true);
        });
    } else {
      alert("Enter all fields");
    }
  };
  return (
    <>
      {}

      <Flex
        minH={"50vh"}
        height="550px"
        align={"center"}
        justify={"center"}
        width={"100%"}
        // border="1px solid green"
        // bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} w="95%" py={20} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign Up</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  // isInvalid
                  // errorBorderColor="red.300"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
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
                  Sign in
                </Button>
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                  bg={"blue.400"}
                  color={"white"}
                  m="0"
                  p={"0"}
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
    </>
  );
};
