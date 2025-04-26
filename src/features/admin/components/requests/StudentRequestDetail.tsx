import { useNavigate, useParams } from "react-router-dom";
import { dummyStudentRequests } from "../../data/studentRequestData";
import { Button } from "@/components/ui/button";
import { Clock, ArrowBigRight } from "lucide-react";

export default function StudentRequestDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const request = dummyStudentRequests.find((request) => request?.id === id);
  if (!request) {
    navigate("/admin");
  }

  return (
    <section className="px-5 my-6">
      <div className="max-w-5xl border-l-4 border-purple-heart-600 pl-6">
        <h1 className="text-3xl font-bold text-purple-heart-700 mb-6">
          {request?.title}
          <span
            className={`ml-2 px-3 py-1 rounded-full text-sm mb-2 font-medium inline-block mt-1
            ${
              request?.status === "pending"
                ? "bg-yellow-100 text-yellow-700"
                : request?.status === "approved"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {request?.status}
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-800">
          <div>
            <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
              Requested by
            </span>
            <span>{request?.username}</span>
          </div>

          <div>
            <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
              Course Type
            </span>
            <span>{request?.course_category}</span>
          </div>

          <div>
            <div className="flex gap-3">
            <Clock className="text-purple-heart-700" />
            <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
              Start <span className="font-bold px-3"><ArrowBigRight className=" inline" /></span>  End Date
            </span>
            </div>
            
            <span>
              {request?.start_date} <span className="font-bold px-3"><ArrowBigRight className=" inline" /></span> {request?.end_date}
            </span>
          </div>

          <div>
            <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
              Schedule
            </span>
            <span>{request?.schedule}</span>
          </div>

          <div>
            <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
              Total Students
            </span>
            <span>{request?.student_quantity.length}</span>
          </div>

          <div className="md:col-span-2">
            <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
              Description
            </span>
            <p className="mt-2 text-gray-700 bg-purple-heart-50 border-l-4 border-purple-heart-300 p-4 rounded-md">
              {request?.description}
            </p>
          </div>

          <div>
            <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
              Created At
            </span>
            <span>
              {request?.created_at
                ? new Date(request.created_at).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })
                : "N/A"}
            </span>
          </div>
        </div>

        {request?.status === "pending" && (
          <div className="flex gap-4 pt-8">
            <Button className="bg-purple-heart-700 text-white px-6 py-2 rounded hover:bg-purple-heart-800 transition">
              Approve
            </Button>
            <Button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition">
              Reject
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
