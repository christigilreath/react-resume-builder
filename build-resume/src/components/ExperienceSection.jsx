import { useState } from "react";
import GetInfoSection from "./GetInfoSection.jsx";
function ExperienceSection() {
  const [showForm, setShowForm] = useState(false);
  const [workInfo, setWorkInfo] = useState({
    company: "",
    title: "",
    description: "",
    years: "",
  });
  const [workList, setWorkList] = useState([]);

  const inputs = [
    {
      type: "text",
      name: "company",
      value: workInfo.company,
    },
    {
      type: "text",
      name: "title",
      value: workInfo.title,
    },
    {
      type: "textarea",
      name: "description",
      value: workInfo.description,
    },
    {
      type: "text",
      name: "years",
      value: workInfo.years,
    },
  ];

  return (
    <GetInfoSection
      sectionName="Experience"
      showBtnText="Add Experience"
      inputs={inputs}
      list={workList}
      setList={setWorkList}
      info={workInfo}
      setInfo={setWorkInfo}
    />
  );
}

export default ExperienceSection;
