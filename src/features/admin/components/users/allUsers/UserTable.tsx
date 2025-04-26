import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserRow from "./UserRow";
import { useEffect, useState } from "react";
import { BaseUser } from "@/types/User";
import { getAllUsers } from "@/services/userServices";

export default function UserTable() {
  const [users, setUsers] = useState<BaseUser[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <section className="px-5 rounded-lg mt-5 max-h-[24rem] overflow-y-auto">
      <Table className="bg-white rounded-lg shadow-lg">
        <TableHeader>
          <TableRow className="bg-white-lilac-50 ">
            <TableHead className="text-purple-heart-600  font-semibold uppercase tracking-wide">Name</TableHead>
            <TableHead className="text-purple-heart-600 font-semibold uppercase tracking-wide">Email</TableHead>
            <TableHead className="text-purple-heart-600  font-semibold uppercase tracking-wide">Phone Number</TableHead>
            <TableHead className="text-purple-heart-600  text-center font-semibold uppercase tracking-wide">Role</TableHead>
            <TableHead className="text-purple-heart-600  text-right font-semibold uppercase tracking-wide">Action</TableHead>
          </TableRow>

        </TableHeader>
        <TableBody>
          {users.map((user) => {
            return (
              <UserRow
                key={user.id}
                user={user}
              />
            )
          })}
        </TableBody>
      </Table>
    </section>
  )
}
