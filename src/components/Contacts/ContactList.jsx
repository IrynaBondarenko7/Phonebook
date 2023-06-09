import { useSelector, useDispatch } from 'react-redux';
import {
  List,
  ListItem,
  Flex,
  Text,
  Box,
  Spacer,
  Button,
} from '@chakra-ui/react';

import { MdClose } from 'react-icons/md';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { GiSmartphone } from 'react-icons/gi';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <List spacing={3} pt="20px">
      {filtredContacts.map(contact => {
        return (
          <ListItem
            key={contact.id}
            w="450px"
            borderColor="teal"
            borderWidth="1px"
            borderRadius="8px"
            p="8px"
          >
            <Flex alignItems="center">
              <Box w="200px">
                <Text fontSize="md">{contact.name}</Text>
              </Box>
              <Spacer />
              <Box w="180px">
                <Flex gap="5px" alignItems="center">
                  <GiSmartphone />
                  <Text fontSize="md">{contact.number}</Text>
                </Flex>
              </Box>
              <Spacer />
              <Box>
                <Button
                  color="#e74c3c"
                  w="50px"
                  variant="outline"
                  onClick={() => handleDelete(contact.id)}
                >
                  <MdClose />
                </Button>
              </Box>
            </Flex>
          </ListItem>
        );
      })}
    </List>
  );
};
