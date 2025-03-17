import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SkillVerse - Cloud Job Simulations</title>
        <meta name="description" content="SkillVerse is a cloud-based job simulation platform for IT professionals and students." />
      </Head>
      <main style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Welcome to SkillVerse 🚀</h1>
        <p>Your cloud job simulation platform.</p>
      </main>
    </>
  );
}
