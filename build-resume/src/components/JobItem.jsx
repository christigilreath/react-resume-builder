function JobItem({ job, deleteJob }) {
  return (
    <>
      <div>
        <p>
          {job.company} {job.title} {job.dates}
          <button onClick={() => deleteJob(job.id)}>X</button>
        </p>

        <p>Job Description: </p>
        <p>{job.description}</p>
      </div>
    </>
  );
}

export default JobItem;
