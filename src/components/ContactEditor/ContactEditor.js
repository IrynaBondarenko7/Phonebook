import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    dispatch(addContact(text));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <input name="number" />
      <button type="submit">Add task</button>
    </form>
  );
};
