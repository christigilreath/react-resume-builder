function TextArea({ name, handleInputChange }) {
  return (
    <>
      <textarea name={name} rows={4} cols={40} onChange={handleInputChange} />
    </>
  );
}

export default TextArea;
