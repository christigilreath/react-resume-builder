import { useState } from "react";

function GeneralInformationSection() {
  const [info, setInfo] = useState({
    first: "",
    last: "",
    telephone: "",
    email: "",
  });
  const [showInputs, setShowInputs] = useState(true);

  return (
    <section>
      <h1>General Information</h1>
      {showInputs ? (
        <>
          <label>
            First Name:{" "}
            <input
              value={info.first}
              onChange={(e) => setInfo({ ...info, first: e.target.value })}
            />
          </label>
          <label>
            Last name:{" "}
            <input
              value={info.last}
              onChange={(e) => setInfo({ ...info, last: e.target.value })}
            />
          </label>
          <label>
            Telephone Number:{" "}
            <input
              value={info.telephone}
              onChange={(e) => setInfo({ ...info, telephone: e.target.value })}
            />
          </label>
          <label>
            Email:{" "}
            <input
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />
          </label>
          <button onClick={() => setShowInputs(false)}>Add Information</button>
        </>
      ) : (
        <>
          <p>
            {info.first} {info.last}
          </p>
          <p>{info.telephone}</p>
          <p>{info.email}</p>
          <button onClick={() => setShowInputs(true)}>Edit</button>
        </>
      )}
    </section>
  );
}

export default GeneralInformationSection;
