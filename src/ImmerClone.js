import { useImmer } from "use-immer";

// To avoid repeating the spread syntax
//  in a nested object we use the immer library
//  to flatten it.
export default function ImmerClone() {
  const [person, UpdatePerson] = useImmer({
    firstName: "Chukwudalu",
    lastName: "Pius",
    email: "howell2028@yahoo.com",
    job: "Web developer",
    location: {
      city: "Abuja, Nigeria"
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ ...person });
  };

  return (
    <>
      <h3>Immer clone</h3>
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="First name"
            value={person.firstName}
            onChange={(e) =>
              UpdatePerson((draft) => {
                draft.firstName = e.target.value;
              })
            }
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Last name"
            value={person.lastName}
            onChange={(e) =>
              UpdatePerson((draft) => {
                draft.lastName = e.target.value;
              })
            }
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            value={person.email}
            onChange={(e) =>
              UpdatePerson((draft) => {
                draft.email = e.target.value;
              })
            }
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Job"
            value={person.job}
            onChange={(e) =>
              UpdatePerson((draft) => {
                draft.job = e.target.value;
              })
            }
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="City"
            value={person.location.city}
            // With immer library, you are allow to do this
            // updatePerson(draft=> {
            //   draft.location.city: 'Lagos'
            // })
            // unlike a regular mutation, it doesn't
            // overwrite the past state
            onChange={(e) =>
              UpdatePerson((draft) => {
                draft.location.city = e.target.value;
              })
            }
          />
        </div>
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </>
  );
}
