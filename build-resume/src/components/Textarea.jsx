function Textarea({ name, onInput }) {
  return (
    <>
      <label>
        {labelTxt}
        <textarea name={name} rows={4} cols={40} onInput={onInput} />
      </label>
    </>
  );
}

export default Textarea;
