import { useState } from "react";
import SchoolItem from "./SchoolItem";

function SchoolList() {
  const [schools, setSchools] = useState([
    { id: 1, nameText: "KSU", degreeText: "B.S. Chemistry", yearText: "2008" },
  ]);
  const [nameText, setNameText] = useState("");
  const [degreeText, setDegreeText] = useState("");
  const [yearText, setYearText] = useState("");
  function addSchool(nameText, degreeText, yearText) {
    const newSchool = { id: Date.now(), nameText, degreeText, yearText };
    setSchools([...schools, newSchool]);
    setNameText("");
    setDegreeText("");
    setYearText("");
  }

  function deleteSchool(id) {
    setSchools(schools.filter((school) => school.id !== id));
  }
  return (
    <section>
      <h1>Education</h1>
      {schools.map((school) => (
        <SchoolItem
          key={school.id}
          school={school}
          deleteSchool={deleteSchool}
        />
      ))}
      <label>
        School Name:{" "}
        <input value={nameText} onChange={(e) => setNameText(e.target.value)} />
      </label>
      <label>
        Degree:{" "}
        <input
          value={degreeText}
          onChange={(e) => setDegreeText(e.target.value)}
        />
      </label>
      <label>
        Graduation Year:{" "}
        <input value={yearText} onChange={(e) => setYearText(e.target.value)} />
      </label>
      <button onClick={() => addSchool(nameText, degreeText, yearText)}>
        Add School
      </button>
    </section>
  );
}

export default SchoolList;
