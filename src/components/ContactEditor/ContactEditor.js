import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import toast, { Toaster } from 'react-hot-toast';

export const ContactEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const text = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    const contactsArray = contacts.filter(
      contact => contact.name === text.name
    );

    if (contactsArray.length !== 0) {
      toast.error(`${text.name} is alredy in contacts`);
      return;
    }

    dispatch(addContact(text));
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" />
        <input name="number" />
        <button type="submit">Add task</button>
      </form>
      <Toaster />
    </>
  );
};
