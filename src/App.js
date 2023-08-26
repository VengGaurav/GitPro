import React, { useState } from "react";
import {
  Box,
  ChakraProvider,
  Container,
  extendTheme,
  Heading,
} from "@chakra-ui/react";
import UsernameForm from "./components/UsernameForm";
import UserInfoCard from "./components/UserInfoCard";
import axios from "axios";

const theme = extendTheme({
  fonts: {
    body: "Arial, sans-serif",
  },
  colors: {
    primary: {
      50: "#E3FDFD",
      100: "#C5F6FA",
    },
    secondary: {
      50: "#FCE7F3",
      100: "#FBCFE8",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        borderRadius: "md",
      },
    },
    Box: {
      baseStyle: {
        borderRadius: "md",
      },
    },
  },
});

function App() {
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
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
  );
}

export default App;
