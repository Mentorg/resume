import { useState } from "react";

export default function Experience({ onAddExperience }) {
  const [experience, setExperience] = useState({
    institutionName: "",
    institutionDepartment: "",
    startDate: "",
    endDate: "",
    milestones: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleAddExperience = () => {
    onAddExperience(experience);
    setExperience({
      institutionName: "",
      institutionDepartment: "",
      startDate: "",
      endDate: "",
      milestones: "",
    });
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col mt-3">
          <label htmlFor="institutionName">Institution Name</label>
          <input
            type="text"
            className="form-control"
            name="institutionName"
            value={experience.institutionName}
            onChange={handleChange}
          />
        </div>
        <div className="col mt-3">
          <label htmlFor="institutionDepartment">Institution Department</label>
          <input
            type="text"
            className="form-control"
            name="institutionDepartment"
            value={experience.institutionDepartment}
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
            value={experience.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="col mt-3">
          <label htmlFor="endDate">End Date</label>
          <input
            type="number"
            className="form-control"
            name="endDate"
            value={experience.endDate}
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
            value={experience.milestones}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col mt-3">
          <button className="btn btn-primary" onClick={handleAddExperience}>
            <i className="fa-solid fa-plus"></i> Add Experience
          </button>
        </div>
      </div>
    </>
  );
}
