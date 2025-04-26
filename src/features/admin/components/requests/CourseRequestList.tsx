import { Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Course } from "@/types/Course";

type CourseRequestListProps = {
  request: Course;
};

export default function CourseRequestList({ request }: CourseRequestListProps) {
  return (
    <div className="bg-white rounded-2xl flex flex-col justify-between shadow-md p-6 w-full max-w-md hover:shadow-xl transition-transform transform hover:scale-105">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-purple-heart-600 flex items-center gap-2">
          <Book className="w-6 h-6" />
          <span>{request.title}</span>
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Created by:{" "}
          <span className="font-medium">{request.username}</span>
        </p>
        <p className="text-xs text-gray-400">
          {new Date(request.created_at).toLocaleDateString()}
        </p>
      </div>

      <div className="flex flex-col gap-2 text-sm text-gray-700">
        <p>
          <span className="font-medium">Category:</span>{" "}
          {request.course_category}
        </p>
        <p className="line-clamp-2">
          <span className="font-medium">Description:</span>{" "}
          {request.description}
        </p>
        <p>
          <span className="font-medium">Schedule:</span> {request.schedule}
        </p>
        <p>
          <span className="font-medium">Duration:</span> {request.start_date} →{" "}
          {request.end_date}
        </p>
        <p>
          <span className="font-medium">Target Students:</span>{" "}
          {request.student_quantity?.length}
        </p>
        <p>
          <span className="font-medium">Status:</span>
          <span
            className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold 
          ${
            request.status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : request.status === "approved"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
          >
            {request.status}
          </span>
        </p>
      </div>

      <div className="mt-4">
        <Button className="bg-purple-heart-600 hover:bg-purple-heart-700 text-white w-full py-2 rounded-lg transition">
          <Link to={`/admin/request/create-course-requests/${request.id}/${request.title}`}>
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
}
