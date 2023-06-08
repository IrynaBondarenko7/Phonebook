import { useSelector, useDispatch } from 'react-redux';

import {
  StyledContactList,
  StyledContactText,
  StyledContactsItem,
  StyledDeleteBtn,
  StyledNumber,
} from './ContactList.styled';
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
  );
};
