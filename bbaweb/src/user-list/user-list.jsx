import useSWR from 'swr'
import "./user-list.css"

const fetcher = url => fetch(url).then(r => r.json())
export default function UserList() {
    const { data, error } = useSWR("/api/users", fetcher)
    if (error) return "Something wrong when getting users..."
    if (!data) return "Loading..."
    return (
        <ul className="user-list">
            {data.users.map(user => (
                <li key={user.id}>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                </li>
            ))}
        </ul>
    )
}