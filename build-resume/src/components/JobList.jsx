import { useState } from "react";
import JobItem from "./JobItem.jsx";
function JobList() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Cracker Barrel",
      title: "Server",
      dates: "May 2006  - December 2008",
      description:
        "Maintined work station. Worked as a team player to serve customers and keep patrons pleased.",
    },
  ]);

  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDates, setJobDates] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  function addJob() {
    const newJob = {
      id: Date.now(),
      company: { companyName },
      title: { jobTitle },
      dates: { jobDates },
      description: { jobDescription },
    };
    setJobs([...jobs, newJob]);
    setCompanyName("");
    setJobTitle("");
    setJobDates("");
    setJobDescription("");
  }
  function deleteJob(id) {
    jobs.filter((job) => id !== job.id);
  }
  return (
    <section>
      <h1>Experience</h1>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} deleteJob={deleteJob} />
      ))}
      <label>
        Company Name:{" "}
        <input
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <label>
        Job Title:{" "}
        <input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
      </label>
      <label>
        Dates:{" "}
        <input value={jobDates} onChange={(e) => setJobDates(e.target.value)} />
      </label>
      <div>
        <label>
          Job Description:{" "}
          <textarea
            rows={4}
            cols={40}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </label>
      </div>
      <button onClick={addJob}>Add Job</button>
    </section>
  );
}

export default JobList;
