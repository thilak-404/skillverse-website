import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { User } from "firebase/auth";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Your Dashboard</h1>
      {user && <p>Email: {user.email}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
