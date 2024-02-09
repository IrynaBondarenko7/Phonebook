import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Container, Box, Flex, Link, Text } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Container
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 16px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
      <Box
        as="footer"
        bg="teal"
        p={4}
        maxW="1200"
        w="100%"
        m="0 auto"
        alignSelf="flex-end"
        borderTop="1px solid #fff"
      >
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          justifyContent="center"
        >
          <Text
            fontSize={{ base: '16px', lg: '20px' }}
            textAlign="center"
            color="#ffffff"
          >
            Created by
          </Text>
          <Link
            href="https://github.com/IrynaBondarenko7"
            isExternal
            color="#ffffff"
            fontSize={{ base: '16px', lg: '20px' }}
          >
            Iryna_bd
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};
