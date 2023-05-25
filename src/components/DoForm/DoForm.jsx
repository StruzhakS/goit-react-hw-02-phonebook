const DoForm = ({ contacts, name }) => {
  const handleChange = e => {};
  const handleSubmit = e => {
    e.preventDefault();

    contacts.push(e.target[0].value);
  };
  return (
    <form action="name" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => {
          handleChange(e);
        }}
      />
      <button>Add contact</button>
    </form>
  );
};
export default DoForm;
