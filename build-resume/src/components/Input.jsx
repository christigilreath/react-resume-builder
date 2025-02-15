function Input({ labelTxt, name, type, placeholder, value, onInput }) {
  return (
    <>
      <label>
        {labelTxt}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onInput={onInput}
        />
      </label>
    </>
  );
}

export default Input;
