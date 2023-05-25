import s from './style.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import DoForm from './DoForm/DoForm';
class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    console.log(this.state.contacts);
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <div className={s.input}>
            <h3>Name</h3>
            <DoForm contacts={this.state.contacts} name={this.state.name} />
          </div>
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>{this.state.contacts.map(contact => console.log(contact))}</ul>
        </div>
      </>
    );
  }
}

export default App;
