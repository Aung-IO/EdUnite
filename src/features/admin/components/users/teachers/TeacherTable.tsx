import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { useEffect, useState } from "react";
import {  Teacher } from "@/types/User";
import { getAllTeachers } from "@/services/userServices";
import TeacherRow from "./TeacherRow";

export default function TeacherTable() {
    const [users, setUsers] = useState<Teacher[]>([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const fetchedUsers = await getAllTeachers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }

        fetchUsers();
    }, []);
    console.log("Teachers", users);

    return (
        <section className="px-5 rounded-lg mt-5 max-h-[24rem] overflow-y-auto">
            <Table className="bg-white rounded-lg shadow-lg">
                <TableHeader>
                    <TableRow className="bg-white-lilac-50 ">
                        <TableHead className="text-purple-heart-600  font-semibold uppercase tracking-wide">Name</TableHead>
                        <TableHead className="text-purple-heart-600 font-semibold uppercase tracking-wide">Email</TableHead>
                        <TableHead className="text-purple-heart-600  font-semibold uppercase tracking-wide">Phone Number</TableHead>
                        <TableHead className="text-purple-heart-600  text-center font-semibold uppercase tracking-wide">Subjects</TableHead>
                        <TableHead className="text-purple-heart-600  text-center font-semibold uppercase tracking-wide">Courses</TableHead>
                        <TableHead className="text-purple-heart-600  text-center font-semibold uppercase tracking-wide">Status</TableHead>
                        <TableHead className="text-purple-heart-600  text-right font-semibold uppercase tracking-wide">Action</TableHead>
                    </TableRow>

                </TableHeader>
                <TableBody>
                    {users.flatMap((user) =>
                        user.role === "Teacher" ? [<TeacherRow key={user.id} user={user} />] : []
                    )}

                </TableBody>
            </Table>
        </section>
    )
}
