import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucideNotepadText } from "lucide-react";
import {  Teacher } from "@/types/User";



export default function TeacherRow({ user }: { user: Teacher }) {


  return (
    <TableRow key={user.id} className="hover:bg-purple-heart-50 transition-colors duration-200">
      <TableCell className="text-purple-heart-400 font-medium">{user.name}</TableCell>
      <TableCell className="text-gray-700">{user.email}</TableCell>
      <TableCell className="text-gray-700">{user.phone_number}</TableCell>
      
      <TableCell className="text-gray-700 text-center">{user.subjects[0].name}</TableCell>
      <TableCell className="text-gray-700 text-center">{user.created_courses?.length}</TableCell>
      <TableCell className="text-gray-700 text-center">{user.subjects_type}</TableCell>
      
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
