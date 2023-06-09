import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations.js';
import { ContactEditor } from 'components/ContactEditor/ContactEditor.js';
import { Filter } from 'components/Filter/Filter.jsx';
import { ContactList } from 'components/Contacts/ContactList.jsx';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';
import { Flex, Box } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Flex>
      <Box bg="teal" p="20px" pt="100" height="100vh" width="250px">
        <ContactEditor />
      </Box>
      <Box p="20px" m="0 auto">
        <Filter />
        {isLoading && <Loader />}
        <ContactList />
      </Box>
    </Flex>
  );
}
