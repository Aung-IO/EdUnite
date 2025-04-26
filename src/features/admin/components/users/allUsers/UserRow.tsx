import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucideNotepadText } from "lucide-react";
import { BaseUser } from "@/types/User";



export default function UserRow({ user }: { user: BaseUser }) {


  return (
    <TableRow key={user.id} className="hover:bg-purple-heart-50 transition-colors duration-200">
      <TableCell className="text-purple-heart-400 font-medium">{user.name}</TableCell>
      <TableCell className="text-gray-700">{user.email}</TableCell>
      <TableCell className="text-gray-700">{user.phone_number}</TableCell>
      <TableCell className="text-center">
        <span
          className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${user.role === "Admin"
              ? "bg-purple-heart-100 text-purple-heart-800"
              : user.role === "Teacher"
                ? "bg-indigo-100 text-indigo-800"
                : "bg-pink-100 text-pink-800"
            }`}
        >
          {user.role}
        </span>
      </TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end items-center gap-2">
          <Button variant="outline" size="sm" className="hover:bg-purple-heart-100 text-purple-heart-700 border-purple-heart-200">
            <LucideNotepadText className="w-4 h-4" />
          </Button>
          {/* <Link to={`/admin/${user.id}/details`}>
          <Button variant="outline" size="sm" className="hover:bg-purple-heart-100 text-purple-heart-700 border-purple-heart-200">
            <LucideNotepadText className="w-4 h-4" />
          </Button>
        </Link> */}
        </div>
      </TableCell>
    </TableRow>

  )
}
