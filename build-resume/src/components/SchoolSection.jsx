import { useState } from "react";

import GetInfoSection from "./GetInfoSection.jsx";
function SchoolSection() {
  const [schoolInfo, setSchoolInfo] = useState({
    school: "",
    degree: "",
    year: "",
  });

  const [schoolList, setSchoolList] = useState([]);

  const inputs = [
    {
      type: "text",
      name: "school",
      value: schoolInfo.school,
    },
    {
      type: "text",
      name: "degree",
      value: schoolInfo.degree,
    },
    {
      type: "text",
      name: "year",
      value: schoolInfo.year,
    },
  ];

  return (
    <GetInfoSection
      sectionName="Education"
      showBtnText="Add School"
      inputs={inputs}
      list={schoolList}
      setList={setSchoolList}
      info={schoolInfo}
      setInfo={setSchoolInfo}
    />
  );
}

export default SchoolSection;
