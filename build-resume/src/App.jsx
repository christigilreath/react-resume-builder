import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralInformationSection from "./components/GeneralInformationSection.jsx";
import Form from "./components/Form.jsx";
import SchoolSection from "./components/SchoolSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
function App() {
  function onSubmit(submit, setSubmit) {
    return function () {
      submit ? setSubmit(false) : setSubmit(true);
    };
  }
  function onChange(data, setData) {
    return function (e) {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  }
  return (
    <>
      {/* <Form inputs={inputs} /> */}
      <GeneralInformationSection />
      {/* <Education onChange={onChange} onSubmit={onSubmit} /> */}
      {/* <SchoolSection /> */}
      {/* <ExperienceSection /> */}
    </>
  );
}

export default App;
