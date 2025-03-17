import { useState } from "react";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function ProfileSetup() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const router = useRouter();

  const handleSaveProfile = async () => {
    const user = auth.currentUser;
    if (user) {
      let profilePicUrl = "";
      if (profilePic) {
        const storageRef = ref(storage, `profile_pictures/${user.uid}`);
        await uploadBytes(storageRef, profilePic);
        profilePicUrl = await getDownloadURL(storageRef);
      }

      await setDoc(doc(db, "users", user.uid), {
        name,
        jobTitle,
        email: user.email,
        profilePicUrl,
      });

      router.push("/dashboard");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Complete Your Profile</h1>
      <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
      <input type="file" onChange={(e) => setProfilePic(e.target.files?.[0] || null)} />
      <button onClick={handleSaveProfile}>Save Profile</button>
    </div>
  );
}
