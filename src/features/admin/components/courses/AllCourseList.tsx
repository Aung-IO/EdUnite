import { Book } from "lucide-react"
import { Link } from "react-router-dom"

import { StudentRequest } from "@/types/Request"
type StudentRequestListProps = {
    request: StudentRequest
}


export default function AllCourseList({request}: StudentRequestListProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 w-full max-w-md hover:shadow-md transition">
  <div className=" mb-4">
    <h2 className="text-xl font-bold text-purple-heart-700 flex items-center gap-2">
      <Book className="w-5 h-5" />
      {request.title}
    </h2>
  </div>

  <div className="text-sm text-gray-600 space-y-2">
    <p>
      <span className="font-medium text-gray-800">Host by:</span> {request.username}
    </p>
    <p>
      <span className="font-medium text-gray-800">Category:</span> {request.course_category}
    </p>
    <p>
      <span className="font-medium text-gray-800">Start Date:</span> {request.start_date}
    </p>
    <p>
      <span className="font-medium text-gray-800">Students:</span> {request.student_quantity.length}
    </p>
  </div>

  <div className="mt-5">
    <Link
      to={`/admin/courses/${request.id}/${request.title}`}
      className="inline-block text-center w-full bg-purple-heart-600 hover:bg-purple-heart-700 text-white text-sm font-semibold py-2 rounded-md transition"
    >
      View Details
    </Link>
  </div>
</div>

  )
}
