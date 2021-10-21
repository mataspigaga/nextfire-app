import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Totally not a Dev.to clone</h1>
      <ul>
        <Link href="/enter">Sign Up Page</Link>
        <br />
        <Link href="/admin">Admin Page</Link>
        <br />
        <Link href="/admin">User Page</Link>
        <br />
        <Link href="/admin">Post Page</Link>
        <br />
      </ul>
    </main>
  );
}
