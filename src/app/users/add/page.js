import { sql } from "@vercel/postgres";
import { redirect, RedirectType } from 'next/navigation'
import { revalidateTag } from 'next/cache'
export default function Page() {
    async function createUser(formData) {
        'use server'

        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let email = formData.get('email');
        let phone = formData.get('phone');
        let gender = formData.get('gender');
        let bio = formData.get('bio');

        await sql`INSERT INTO user_profile (first_name, last_name, email, phone, gender, bio)
VALUES (${firstName}, ${lastName}, ${email}, ${phone}, ${gender}, ${bio});
`;
        revalidateTag('users')
        
        redirect('/')
       
    }
    return (
        <div>
            <h1>Add new user</h1>
            <form action={createUser} method="POST">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required="" />
                <br />
                <br />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required="" />
                <br />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" />
                <br />
                <br />
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required="" />
                <br />
                <br />
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="preferNotToSay">Prefer not to say</option>
                </select>
                <br />
                <br />
                <label htmlFor="bio">Short Bio:</label>
                <br />
                <textarea
                    id="bio"
                    name="bio"
                    rows={4}
                    cols={50}
                    placeholder="Tell us about yourself..."
                    defaultValue={""}
                />
                <br />
                <br />
                <input type="submit" defaultValue="Submit" />
            </form>

        </div>
    );
}