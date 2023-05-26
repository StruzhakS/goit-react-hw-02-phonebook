import s from './ContaactList.module.css';
import propTypes from 'prop-types';

const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <ul className={s.contactList}>
      {visibleContacts.map(contact => (
        <li className={s.listItem} key={contact.id}>
          <span>{contact.name}: </span> <span>{contact.number}</span>
          <button type="button" onClick={e => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  visibleContacts: propTypes.array.isRequired,
  deleteContact: propTypes.func.isRequired,
};
export default ContactList;
