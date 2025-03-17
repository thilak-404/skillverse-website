import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleProfileSetup = () => {
    console.log({ name, dob, jobTitle });
    alert("Profile Created!");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Complete Your Profile</h1>
      <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
      <input type="date" onChange={(e) => setDob(e.target.value)} />
      <input type="text" placeholder="Job Title (Student or Employee)" onChange={(e) => setJobTitle(e.target.value)} />
      <button onClick={handleProfileSetup}>Save Profile</button>
    </div>
  );
}
