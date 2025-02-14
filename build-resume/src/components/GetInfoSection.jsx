import { useState } from "react";
import Form from "./Form.jsx";
function GetInfoSection({
  sectionName,
  showBtnText,
  inputs,
  list,
  setList,
  info,
  setInfo,
  customSubmit,
  showForm,
  setShowForm,
}) {
  // const [showForm, setShowForm] = useState(false);
  function toggleForm() {
    if (showForm) {
      setShowForm(false);
      setInfo((prev) => {
        const infoKeys = Object.keys(prev);
        const clearedInfo = {};
        infoKeys.forEach((key) => (clearedInfo[key] = ""));
        return clearedInfo;
      });
    } else {
      setShowForm(true);
    }
  }
  function handleInputChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setList((prev) => [...prev, info]);

    toggleForm(setInfo);
  }

  function handleDelete(indexToDelete) {
    return setList(
      list.filter((_, index) => {
        return index !== indexToDelete;
      })
    );
  }
  function editInfo() {
    setShowForm(true);
    inputs.value = info.value;
  }

  return (
    <>
      <section>
        <h2>{sectionName}</h2>
        {showForm || <button onClick={toggleForm}>{showBtnText}</button>}
        {showForm && (
          <>
            <Form
              inputs={inputs}
              handleSubmit={customSubmit || handleSubmit}
              toggleForm={toggleForm}
              handleInputChange={handleInputChange}
            />
          </>
        )}
        {list && (
          <ul>
            {list.map((item, index) => {
              const values = Object.values(item);
              return (
                <li key={index}>
                  {values.map((value) => `${value} `)}{" "}
                  <button
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        {/* {!list && (
          <>
            {Object.values(info).map((value, index) => (
              <p key={index}>{value}</p>
            ))}
            <button onClick={editInfo}>Edit</button>
          </>
        )} */}
      </section>
    </>
  );
}
export default GetInfoSection;
