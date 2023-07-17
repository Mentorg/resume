export default function Personal({ handlePersonalData, personalData }) {
  return (
    <>
      <div className="row mt-5">
        <div className="col mt-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            onChange={handlePersonalData}
            name="firstName"
            value={personalData.firstName}
          />
        </div>
        <div className="col mt-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            onChange={handlePersonalData}
            name="lastName"
            value={personalData.lastName}
          />
        </div>
      </div>
      <div className="row">
        <div className="col mt-3">
          <label htmlFor="emailAddress" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailAddress"
            onChange={handlePersonalData}
            name="emailAddress"
            value={personalData.emailAddress}
          />
        </div>
        <div className="col mt-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            onChange={handlePersonalData}
            name="phoneNumber"
            value={personalData.phoneNumber}
          />
        </div>
      </div>
    </>
  );
}
