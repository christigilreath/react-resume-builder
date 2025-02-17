import { useState } from "react";

import Form from "./Form.jsx";

function GeneralInformationSection() {
  const [submitForm, setSubmitForm] = useState(false);

  const [inputs, setInputs] = useState([
    {
      element: "input",
      name: "first",
      label: "First Name: ",
      type: "text",
      placeholder: "John",
      value: "",
    },
    {
      element: "input",
      name: "last",
      label: "Last Name: ",
      type: "text",
      placeholder: "Smith",
      value: "",
    },
    {
      element: "input",
      name: "phone",
      label: "Telephone: ",
      type: "tel",
      placeholder: "555-555-5555",
      value: "",
    },
    {
      element: "input",
      name: "email",
      label: "Email: ",
      type: "email",
      placeholder: "abc@123.com",
      value: "",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  function handleAddForm() {
    setShowForm(true);
  }
  function handleEditClick() {
    setShowForm(true);
    setSubmitForm(false);
  }
  function handleCancelClick() {
    setShowForm(false);
    setSubmitForm(false);
    const newInputs = inputs.map((input) => {
      input.value = "";
      return input;
    });
    setInputs(newInputs);
  }

  return (
    <>
      <h1>General Information</h1>
      {submitForm ? (
        <>
          {inputs.map((input, index) => {
            return <p key={index}>{input.value}</p>;
          })}
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleCancelClick}>Delete</button>
        </>
      ) : showForm ? (
        <>
          <Form
            inputs={inputs}
            setInputs={setInputs}
            setShowForm={setShowForm}
            setSubmitForm={setSubmitForm}
            handleCancelClick={handleCancelClick}
          />
        </>
      ) : (
        <button onClick={handleAddForm}>Add Information</button>
      )}
    </>
  );
}

export default GeneralInformationSection;
