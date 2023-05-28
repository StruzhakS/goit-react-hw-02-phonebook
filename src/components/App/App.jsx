import s from './style.module.css';
import { Component } from 'react';
import DoForm from '../DoForm/DoForm';
import Filter from '../FilterCOntacts/Filtercontacts';
import ContactList from '../ContactList/ContactList';
import ClearButton from 'components/ClearButton/ClearButton';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  clearContact = () => {
    this.setState({
      contacts: [],
    });
    return;
  };
  addContact = user => {
    this.state.contacts.some(contact => {
      return contact.name.toLowerCase() === user.name.toLowerCase();
    })
      ? alert(`${user.name} is already in list`)
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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className={s.container}>
        <div className={s.form}>
          <h2>Phonebook</h2>
          <div className={s.input}>
            <DoForm
              contacts={this.state.contacts}
              addContact={this.addContact}
            />
          </div>
        </div>
        <div>
          {this.state.contacts.length ? <h2>Contacts</h2> : ''}

          {this.state.contacts.length > 1 ? (
            <Filter value={filter} filterContacts={this.filterContacts} />
          ) : (
            ''
          )}

          <ContactList
            visibleContacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </div>
        {this.state.contacts.length ? (
          <ClearButton clearContact={this.clearContact} />
        ) : (
          ''
        )}
        <p className={s.totalContacts}>
          Total Contacts:{' '}
          <span className={s.totalNumber}>{this.state.contacts.length}</span>
        </p>
      </div>
    );
  }
}

export default App;
