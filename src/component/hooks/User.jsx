import { useState } from "react";

const User = () => {
  const [firstName, setFirstName] = useState("Tilak");
  const [lastName, setLastName] = useState("Basnet");
  const [address, setAddresss] = useState("Nepal");

  function userUpdate() {
    setFirstName("Kshatish");
    setLastName("Basnet");
    setAddresss("Kathmandu");
  }

  return (
    <div>
      <h3>User Details</h3>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{address}</p>
      <button onClick={userUpdate}> Update User</button>
    </div>
  );
};
export default User;
