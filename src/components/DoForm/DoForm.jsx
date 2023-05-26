import propTypes from 'prop-types';
import s from './DoForm.css';
import { nanoid } from 'nanoid';
const { Component } = require('react');

class DoForm extends Component {
  state = {
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
    this.props.addContact(contact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { number, name } = this.state;
    return (
      <form action="name" onSubmit={this.handleSubmit}>
        <div className={s.inputName}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={e => this.handleChange(e)}
              value={name}
            />
          </label>
        </div>

        <div>
          <label>
            Phone
            <input
              className={s.inputPhone}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter your phone"
              onChange={e => this.handleChange(e)}
              value={number}
            />
          </label>
        </div>
        <button>Add contact</button>
      </form>
    );
  }
}

DoForm.propTypes = {
  contacts: propTypes.array.isRequired,
  addContact: propTypes.func.isRequired,
};

export default DoForm;
