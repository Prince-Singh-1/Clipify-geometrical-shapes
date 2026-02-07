function Form({ onChange, searchTerm }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onChange(searchTerm);
  };

  const formClass = "w-full max-sm:w-4/5 ";

  return (
    <form onSubmit={handleSubmit} className={formClass}>
      <input
        className='w-full   p-2 max-sm:p-1 border-2 rounded-full text-md'
        type='text'
        onChange={handleChange}
        value={searchTerm}
        placeholder=' Search...'
      />
    </form>
  );
}

export default Form;
