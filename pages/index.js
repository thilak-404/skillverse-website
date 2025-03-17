import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to SkillVerse</h1>
      <p>Get hands-on experience with real-world job simulations!</p>
      <Link href="/signup">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Get Started</button>
      </Link>
    </div>
  );
}
