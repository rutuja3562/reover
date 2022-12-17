import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import "../App.css";
import { Register } from "./Register";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Home Page</h1>

      <Button
        onClick={() => navigate("/register")}
        bg={"blue.400"}
        color={"white"}
        m={"10px"}
        _hover={{
          bg: "blue.500",
        }}
      >
        Sign Up
      </Button>

      <Button
        onClick={() => navigate("/login")}
        bg={"blue.400"}
        color={"white"}
        m={"10px"}
        _hover={{
          bg: "blue.500",
        }}
      >
        Log in
      </Button>
    </div>
  );
};

export default Home;
