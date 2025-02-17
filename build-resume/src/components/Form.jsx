import Input from "./Input.jsx";
import Textarea from "./Textarea.jsx";

// inputs is an array of input objects
function Form({
  inputs,
  setInputs,
  setShowForm,
  setSubmitForm,
  handleCancelClick,
}) {
  function handleInputChange(indexToChange) {
    return function (e) {
      const newInputs = [...inputs];
      newInputs[indexToChange].value = e.target.value;
      setInputs(newInputs);
    };
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setShowForm(false);
    setSubmitForm(true);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {inputs.map((input, index) => {
          if (input.element === "input") {
            return (
              <Input
                key={index}
                labelTxt={input.label}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onInput={handleInputChange(index)}
              />
            );
          }
          if (input.element === "textarea") {
            return (
              <Textarea
                labelTxt={input.label}
                name={input.name}
                onInput={handleInputChange(index)}
              />
            );
          }
        })}
        <button type="submit">Submit</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </form>
    </>
  );
}

export default Form;
