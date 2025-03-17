import Link from "next/link";

export default function Dashboard() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Your Dashboard</h1>
      <p>Explore job simulations and projects</p>
      <Link href="/projects">
        <button>View Projects</button>
      </Link>
    </div>
  );
}
