import { useState } from "react";

export default function EducationForm({ onAddEducation }) {
  const [education, setEducation] = useState({
    schoolName: "",
    schoolDepartment: "",
    startDate: "",
    endDate: "",
    milestones: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };

  const handleAddEducation = () => {
    onAddEducation(education);
    setEducation({
      schoolName: "",
      schoolDepartment: "",
      startDate: "",
      endDate: "",
      milestones: "",
    });
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col mt-3">
          <label htmlFor="schoolName">School Name</label>
          <input
            type="text"
            className="form-control"
            name="schoolName"
            value={education.schoolName}
            onChange={handleChange}
          />
        </div>
        <div className="col mt-3">
          <label htmlFor="schoolDepartment">School Department</label>
          <input
            type="text"
            className="form-control"
            name="schoolDepartment"
            value={education.schoolDepartment}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col mt-3">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="number"
            className="form-control"
            name="startDate"
            value={education.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="col mt-3">
          <label htmlFor="endDate">End Date</label>
          <input
            type="number"
            className="form-control"
            name="endDate"
            value={education.endDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col mt-3">
          <label htmlFor="milestones">Milestones</label>
          <textarea
            className="form-control"
            name="milestones"
            rows="5"
            value={education.milestones}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col mt-3">
          <button className="btn btn-primary" onClick={handleAddEducation}>
            <i className="fa-solid fa-plus"></i> Add Education
          </button>
        </div>
      </div>
    </>
  );
}
