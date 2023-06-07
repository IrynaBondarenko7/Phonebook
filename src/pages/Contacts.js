import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  StyledContactList,
  StyledContactText,
  StyledContactsItem,
  StyledDeleteBtn,
  StyledNumber,
} from '../components/Contacts/ContactList.styled.jsx';
import { MdClose } from 'react-icons/md';
import { selectContacts, selectFilter } from 'redux/contacts/selectors.js';
import { deleteContact, fetchContacts } from 'redux/contacts/operations.js';
import { GiSmartphone } from 'react-icons/gi';
import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { ContactEditor } from 'components/ContactEditor/ContactEditor.js';
import { Filter } from 'components/Filter/Filter.jsx';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <>
      <ContactEditor />
      <Filter />
      <StyledContactList>
        {filtredContacts.map(contact => {
          return (
            <StyledContactsItem key={contact.id}>
              <StyledContactText>{contact.name}</StyledContactText>
              <StyledNumber>
                <GiSmartphone />
                {contact.number}
              </StyledNumber>
              <StyledDeleteBtn onClick={() => handleDelete(contact.id)}>
                <MdClose />
              </StyledDeleteBtn>
            </StyledContactsItem>
          );
        })}
      </StyledContactList>
    </>
  );
}
