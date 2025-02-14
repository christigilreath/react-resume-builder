function Form({ inputs, handleSubmit, toggleForm, handleInputChange }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputs.map((item, index) => {
          return (
            <label key={index} htmlFor={item.name}>
              {item.name}:
              <input
                type={item.type}
                name={item.name}
                value={item.value}
                onInput={handleInputChange}
              />
            </label>
          );
        })}
        <button type="submit">Submit</button>
        <button onClick={toggleForm}>Cancel</button>
      </form>
    </>
  );
}

export default Form;
