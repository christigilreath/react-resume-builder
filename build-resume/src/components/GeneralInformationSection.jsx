import { useState } from "react";

import GetInfoSection from "./GetInfoSection.jsx";

function GeneralInformationSection() {
  const [submit, setSubmit] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
  });
  const [showForm, setShowForm] = useState(false);

  const inputs = [
    {
      name: "first",
      label: "First Name: ",
      type: "text",
      placeholder: "John",

      value: generalInfo.first,
    },
    {
      name: "last",
      label: "Last Name: ",
      type: "text",
      placeholder: "Smith",

      value: generalInfo.last,
    },
    {
      name: "phone",
      label: "Telephone: ",
      type: "tel",
      placeholder: "555-555-5555",

      value: generalInfo.phone,
    },
    {
      name: "email",
      label: "Email: ",
      type: "email",
      placeholder: "abc@123.com",
      // onChange: handleChange,
      value: generalInfo.email,
    },
  ];

  function generalSubmit() {
    setSubmit(true);
  }
  function editInfo() {
    setShowForm(true);
    setSubmit(false);
  }
  if (submit) {
    return (
      <>
        {Object.values(generalInfo).map((value, index) => (
          <p key={index}>{value}</p>
        ))}
        <button onClick={editInfo}>Edit</button>
      </>
    );
  }
  return (
    <GetInfoSection
      sectionName="General Information"
      showBtnText="Add Information"
      inputs={inputs}
      info={generalInfo}
      setInfo={setGeneralInfo}
      customSubmit={generalSubmit}
      showForm={showForm}
      setShowForm={setShowForm}
    />
  );
}

export default GeneralInformationSection;
