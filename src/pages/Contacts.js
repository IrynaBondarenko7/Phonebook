import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations.js';
import { ContactEditor } from 'components/ContactEditor/ContactEditor.js';
import { Filter } from 'components/Filter/Filter.jsx';
import { ContactList } from 'components/Contacts/ContactList.jsx';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactEditor />
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </>
  );
}
