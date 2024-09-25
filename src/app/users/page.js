import { sql } from "@vercel/postgres";
export const dynamic = 'force-dynamic';


export default async function Page() {
    const { rows: users } = await sql`SELECT * FROM user_profile;`;
    
    return (
        <div>
            <h2>User List</h2>

            {users.length === 0 ? (
                <p>No users available.</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.userid}>
                            <h3>{user.first_name} {user.last_name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Gender: {user.gender}</p>
                            <p>Bio: {user.bio}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}