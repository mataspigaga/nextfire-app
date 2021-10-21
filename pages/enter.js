import Link from "next/link";

export default function EnterPage({}) {
  return (
    <main>
      <h1>Sign Up</h1>
      <ul>
        <Link href="/">Home Page</Link>
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
