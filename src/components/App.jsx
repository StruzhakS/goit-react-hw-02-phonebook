import s from './style.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import DoForm from './DoForm/DoForm';
import Filter from './FilterCOntacts/Filtercontacts';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.addContact(contact);
    this.setState({ name: '', number: '' });
  };

  addContact = user => {
    this.state.contacts.some(contact => {
      return contact.name.toLowerCase() === user.name.toLowerCase();
    })
      ? alert('fadsfsadfasefd')
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, user],
        }));
  };

  phoneNumber = e => {
    this.setState({
      number: e.target.elements.value,
    });
    return;
  };

  filterContacts = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedContacts);
    });
  };

  render() {
    const { number, filter, name } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <div className={s.input}>
            {/* <DoForm
              contacts={this.state.contacts}
              name={this.state.name}
              handleSubmit={this.handleSubmit}
            /> */}
            <form action="name" onSubmit={this.handleSubmit}>
              <h3>Name</h3>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                value={name}
              />
              <h3>Phone</h3>

              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="Enter your phone"
                onChange={this.handleChange}
                value={number}
              />
              <button>Add contact</button>
            </form>
          </div>
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.filterContacts} />

          <ul className={s.contactList}>
            {visibleContacts.map(contact => (
              <li className={s.listItem} key={nanoid()}>
                <span>{contact.name}: </span> <span>{contact.number}</span>
                <button type="button">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
