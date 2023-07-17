export default function Preview({
  personalData,
  educationData,
  experienceData,
}) {
  const { firstName, lastName, emailAddress, phoneNumber } = personalData;

  const educationArray = educationData.map((education) => {
    return (
      <div key={crypto.randomUUID()} className="education-wrapper">
        <div className="title">
          <h4>{education.schoolName}</h4>
          <p>
            {education.startDate} - {education.endDate}
          </p>
        </div>
        <div className="description">
          <p>{education.schoolDepartment}</p>
          <p>{education.milestones}</p>
          {/* <ul>
            <li>Recipient of Dean&apos;s List Academic Achievement Award</li>
            <li>Selected for the Venture Incubation Program at Harvard Innovation Lab and winner of Stretch Award 2016</li>
          </ul> */}
        </div>
      </div>
    );
  });

  const experienceArray = experienceData.map((experience) => (
    <div key={crypto.randomUUID()} className="experience-wrapper">
      <div className="title">
        <h4>{experience.institutionName}</h4>
        <p>
          {experience.startDate} - {experience.endDate}
        </p>
      </div>
      <div className="description">
        <p>{experience.institutionDepartment}</p>
        <p>{experience.milestones}</p>
        {/* <ul>
          <li>Founded design studio specialized in social impact that develops integral design strategies to increase effectiveness of social initiatives and empowers young designers from underserved communities in Mexico</li>
          <li>Led 20 design projects for nonprofits and social enterprises in the U.S., Mexico, India, Zambia, Australia, Switzerland</li>
          <li>Won Most Innovative Idea at Educational Innovation and Social Entrepreneurship Conference at Harvard - May 2015</li>
        </ul> */}
      </div>
    </div>
  ));

  return (
    <>
      <div className="personal-info">
        <h2>
          {firstName || "John"} {lastName || "Doe"}
        </h2>
        <p>
          {emailAddress || "john.doe@mail.com"} |{" "}
          {phoneNumber || "111-111-1111"}
        </p>
      </div>
      <hr />
      <div className="education mt-4">
        <h3>{educationData.some((e) => e.schoolName) && "Education"}</h3>
        {educationArray}
      </div>
      <div className="experience mt-4">
        <h3>
          {experienceData.some((e) => e.institutionName) &&
            "Professional experience"}
        </h3>
        {experienceArray}
      </div>
    </>
  );
}
