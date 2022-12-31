import { useState } from "react";

export default function SpreadClone() {
  const [person, setPerson] = useState({
    firstName: "Calistus",
    lastName: "Obeke",
    email: "howell2028@gmail.com",
    job: "Frontend engineer",
    location: {
      city: "Lagos, Nigeria"
    }
  });

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    // Using the spread syntax to copy the previous state.
    // Since the spread syntax is shallow, it only
    // copies things one level deep, and does a repeat
    // for nested object
    setPerson({
      // cloning the previous state
      ...person,
      // changes to fields
      [name]: value,
      location: {
        // Repeat the spread syntax for the
        // nested object to clone the location field
        ...person.location,
        //change to location field
        [name]: value
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ ...person });
  };

  return (
    <>
      <h3>Spread clone</h3>
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={person.firstName}
            onChange={onChangeHandler}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={person.lastName}
            onChange={onChangeHandler}
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={person.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="job"
            placeholder="Job"
            value={person.job}
            onChange={onChangeHandler}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={person.location.city}
            onChange={onChangeHandler}
          />
        </div>
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </>
  );
}
