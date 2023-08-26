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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

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
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                404 Not found
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
