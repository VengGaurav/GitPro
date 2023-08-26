import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";

const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel fontSize={20}>Enter Username:</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            colorScheme="purple"
            border="2px"
          />
        </FormControl>
        <Flex justifyContent="center">
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            color="white"
            bgGradient="linear(to-r, teal.500, teal.700)"
          >
            Show Info
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default UsernameForm;
