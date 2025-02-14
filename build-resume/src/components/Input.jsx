function Input({
  key,
  name,
  label,
  type,
  placeholder,
  value,
  className,
  onChange,
  required,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={className}
        onChange={onChange}
        required={required}
      />
    </>
  );
}

export default Input;
