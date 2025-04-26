import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import { dummyCourses } from "@/assets/dummy-datas/course";

export default function CourseRequestDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const request = dummyCourses.find((request) => request?.id === id);
  if (!request) {
    navigate("/admin");
  }

  return (
    <section className="px-5 my-8">
  <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 border border-purple-heart-200">
    <header className="mb-8 border-b pb-4">
      <h1 className="text-3xl font-bold text-purple-heart-700 flex items-center gap-4">
        <Book className="w-8 h-8" />
        {request?.title}
        <span
          className={`ml-auto px-4 py-1 text-sm rounded-full font-medium 
            ${
              request?.status === "pending"
                ? "bg-yellow-100 text-yellow-800"
                : request?.status === "approved"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
        >
          {request?.status.toUpperCase()}
        </span>
      </h1>
      <p className="text-sm text-gray-500 mt-2">
        Submitted by <span className="font-medium">{request?.username}</span> on{" "}
        <span>
          {request?.created_at
            ? new Date(request.created_at).toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              })
            : "N/A"}
        </span>
      </p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-gray-800">
      <div>
        <h3 className="text-purple-heart-700 font-semibold mb-1">Course Category</h3>
        <p>{request?.course_category}</p>
      </div>

      <div>
        <h3 className="text-purple-heart-700 font-semibold mb-1">Planned Schedule</h3>
        <p>{request?.schedule}</p>
      </div>

      <div>
        <h3 className="text-purple-heart-700 font-semibold mb-1">Start & End Dates</h3>
        <p>{request?.start_date} → {request?.end_date}</p>
      </div>

      <div>
        <h3 className="text-purple-heart-700 font-semibold mb-1">Target Student Count</h3>
        <p>{request?.student_quantity?.length}</p>
      </div>

      <div className="md:col-span-2">
        <h3 className="text-purple-heart-700 font-semibold mb-1">Course Description</h3>
        <div className="mt-1 bg-purple-heart-50 border-l-4 border-purple-heart-300 p-4 rounded-md text-gray-700">
          {request?.description}
        </div>
      </div>
    </div>

    {request?.status === "pending" && (
      <div className="flex gap-4 pt-10">
        <Button className="bg-purple-heart-700 hover:bg-purple-heart-600 text-white px-6 py-2 rounded transition">
          Approve
        </Button>
        <Button className="bg-gray-50 hover:bg-gray-200 text-gray-900 px-6 py-2 rounded transition">
          Reject
        </Button>
      </div>
    )}
  </div>
</section>

  );
}

