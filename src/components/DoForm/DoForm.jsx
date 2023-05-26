// const { Component } = require('react');

// class DoForm extends Component {
//   state = { name: '', number: '' };
//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const contact = {
//       name: this.state.name,
//       number: this.state.number,
//     };
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, contact],
//     }));
//   };
//   render() {
//     return (
//       <form action="name" onSubmit={this.handleSubmit}>
//         <h3>Name</h3>
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={this.handleChange}
//         />
//         <h3>Phone</h3>

//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           placeholder="Enter your phone"
//           value={this.state.number}
//           onChange={this.handleChange}
//         />
//         <button>Add contact</button>
//       </form>
//     );
//   }
// }

// export default DoForm;
