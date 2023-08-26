import React, { useState } from "react";
import {
  Box,
  ChakraProvider,
  Container,
  extendTheme,
  Heading,
} from "@chakra-ui/react";

import axios from "axios";
import UsernameForm from "../components/UsernameForm";
import UserInfoCard from "../components/UserInfoCard";

const HomePage = () => {
  const [userData, setUserData] = useState(null);

  const handleUsernameSubmit = (username) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  return (
    <Box
      bgGradient="linear(to-r, primary.100, secondary.100)"
      minHeight="100vh"
    >
      <Box bg="primary.900" p={2}>
        <Container maxW="container.lg" textAlign="center">
          <Heading color="primary.700">GitHub User Info</Heading>
        </Container>
      </Box>
      <Box py={6}>
        <Container maxW="container.md">
          <UsernameForm onSubmit={handleUsernameSubmit} />
          {userData && <UserInfoCard user={userData} mt={4} />}
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
