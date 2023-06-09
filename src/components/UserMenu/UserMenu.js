import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button, Text, Flex } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex gap="5">
      <Text fontSize="lg" color="#fff">
        {user.email}
      </Text>
      <Button colorScheme="teal" size="sm" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};