function Input({ name, type, value, handleInputChange }) {
  return (
    <>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleInputChange}
      />
    </>
  );
}

export default Input;
