function SchoolItem({ school, deleteSchool }) {
  return (
    <div>
      <p>
        {school.nameText} {school.degreeText} {school.yearText}{" "}
        <button onClick={() => deleteSchool(school.id)}>X</button>
      </p>
    </div>
  );
}
export default SchoolItem;
