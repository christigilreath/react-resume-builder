import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralInformationSection from "./components/GeneralInformationSection.jsx";

import SchoolList from "./components/SchoolList.jsx";
import JobList from "./components/JobList.jsx";
function App() {
  return (
    <>
      <GeneralInformationSection />

      <SchoolList />
      <JobList />
    </>
  );
}

export default App;
