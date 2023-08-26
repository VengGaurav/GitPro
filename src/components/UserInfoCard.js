import React from "react";
import { Box, Image, Text, VStack, Badge, Divider } from "@chakra-ui/react";

const UserInfoCard = ({ user }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      textAlign="center"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      color="white"
      boxShadow="md"
      mt={6}
    >
      <Image
        src={user.avatar_url}
        alt="Avatar"
        boxSize="100px"
        borderRadius="full"
        mx="auto"
      />
      <VStack align="center" spacing={2} mt={4}>
        <Text fontSize="xl" fontWeight="bold">
          {user.name}
        </Text>
        <Text color="gray.300">@{user.login}</Text>
        <Divider borderColor="gray.400" />
        <Box>
          <Badge colorScheme="blue">Public Repos: {user.public_repos}</Badge>
        </Box>
        <Divider borderColor="gray.400" />
        <Box>
          <Badge colorScheme="green">Public Gists: {user.public_gists}</Badge>
        </Box>
        <Divider borderColor="gray.400" />
        <Text>Profile Created At: {user.created_at.substring(0, 10)}</Text>
      </VStack>
    </Box>
  );
};

export default UserInfoCard;
