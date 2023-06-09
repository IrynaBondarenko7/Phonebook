import { useAuth } from 'hooks';
import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Flex as="nav" gap="5">
      <Link as={RouterLink} to="/" color="#ffffff">
        Home
      </Link>
      {isLoggedIn && (
        <Link as={RouterLink} to="/contacts" color="#ffffff">
          Contacts
        </Link>
      )}
    </Flex>
  );
};
