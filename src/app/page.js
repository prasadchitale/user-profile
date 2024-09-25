import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Maintain Users</p>
      <p>
      <Link href='/users'>List of Users</Link>
      </p>
      <p>
      <Link href='/users/add'>Add new user</Link>
      </p>
    </div>
  );
}
