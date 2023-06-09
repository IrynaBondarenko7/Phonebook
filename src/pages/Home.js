import { Container, Heading, Text, Button, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {
  return (
    <Container maxW="1200px">
      <Heading
        as="h2"
        size="3xl"
        noOfLines={1}
        mt="200px"
        textAlign="center"
        color="teal"
      >
        ContactEase PhoneBook
      </Heading>
      <Text fontSize="3xl" textAlign="center" mt="50px" color="teal.800">
        Quickly and easily create and save contacts
      </Text>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        mt="40px"
      >
        <Button as={RouterLink} to="/register" colorScheme="teal">
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
