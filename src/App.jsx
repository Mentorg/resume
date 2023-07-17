import Personal from "./components/Personal";
import Education from "./components/Education";
import Preview from "./components/Preview";
import Experience from "./components/Experience";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  const handlePersonalData = (event) => {
    setPersonalData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleAddEducation = (education) => {
    setEducationData((prevEducation) => [...prevEducation, education]);
  };

  const handleAddExperience = (experience) => {
    setExperienceData((prevExperience) => [...prevExperience, experience]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <section className="forms">
        <form onSubmit={handleSubmit}>
          <Personal
            handlePersonalData={handlePersonalData}
            personalData={personalData}
          />
          <Education onAddEducation={handleAddEducation} />
          <Experience onAddExperience={handleAddExperience} />
        </form>
      </section>
      <section className="preview">
        <Preview
          personalData={personalData}
          educationData={educationData}
          experienceData={experienceData}
        />
      </section>
    </main>
  );
}
