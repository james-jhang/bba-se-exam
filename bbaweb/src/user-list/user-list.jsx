import { Card, Title, Text, Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell } from "@tremor/react";
import useSWR from 'swr'
import "./user-list.css"

const fetcher = url => fetch(url).then(r => r.json())
export default function UserList() {
    const { data, error } = useSWR("/api/users", fetcher)

    if (error) return "Something wrong when getting users..."
    if (!data) return "Loading..."
    return (
        <Card className="max-w-screen-sm">
            <Title>User List</Title>
            {/* https://github.com/tremorlabs/tremor/issues/75#issuecomment-1327380036 */}
            <div className="[&_>_div]:max-h-96 [&_th]:bg-white">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>ID</TableHeaderCell>
                            <TableHeaderCell>Name</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>
                                    <Text>{user.name}</Text>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}