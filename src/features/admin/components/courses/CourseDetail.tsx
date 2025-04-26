import { useNavigate, useParams } from "react-router-dom";
import { dummyStudentRequests } from "../../data/studentRequestData";
import { Clock } from "lucide-react";

export default function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const request = dummyStudentRequests.find((request) => request?.id === id);
    if (!request) {
        navigate("/admin");
    }

    return (
        <section className="px-5 my-6">
            <div className="max-w-5xl bg-white border border-purple-100 rounded-2xl shadow-lg p-8">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 mb-8 flex items-center gap-4">
                    {request?.title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
                    <div className="bg-purple-50 rounded-lg p-4">
                        <span className="text-sm text-purple-600 font-medium">Requested by</span>
                        <p className="text-lg font-semibold text-purple-900">{request?.username}</p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4">
                        <span className="text-sm text-purple-600 font-medium">Course Category</span>
                        <p className="text-lg font-semibold text-purple-900">{request?.course_category}</p>
                    </div>

                    <div className="bg-purple-100 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-1 text-purple-700">
                            <Clock />
                            <span className="text-sm font-semibold">Duration</span>
                        </div>
                        <p className="text-gray-800">
                            {request?.start_date} - {request?.end_date}
                        </p>
                    </div>


                    <div className="bg-purple-50 rounded-lg p-4">
                        <span className="text-sm text-purple-600 font-medium">Schedule</span>
                        <p className="text-lg font-semibold text-purple-900">{request?.schedule}</p>
                    </div>




                    <div className="md:col-span-2 bg-purple-50 rounded-lg p-6 shadow-sm border-l-4 border-purple-400">
                        <span className="block text-md text-purple-800 font-semibold mb-2">Description</span>
                        <p className="text-gray-700 leading-relaxed">{request?.description}</p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4">
                        <span className="text-sm text-purple-600 font-medium">Created At</span>
                        <p className="text-md font-medium text-gray-700">
                            {request?.created_at
                                ? new Date(request.created_at).toLocaleString("en-US", {
                                    dateStyle: "medium",
                                    timeStyle: "short",
                                })
                                : "N/A"}
                        </p>
                    </div>




                </div>
                <div className="bg-purple-100 rounded-lg p-6 mt-8">
                    <span className="block text-sm text-purple-600 font-semibold mb-2">Total Students</span>

                    <div className="text-4xl font-extrabold text-purple-800 mb-4">
                        {request?.student_quantity.length}
                    </div>

                    <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-2">
                        {request?.student_quantity.map((student: any) => (
                            <div
                                key={student.id}
                                className="flex items-center gap-4 bg-white rounded-md p-3 shadow-sm hover:bg-purple-50 transition"
                            >
                                <img
                                    src={student.avatar}
                                    alt={student.name}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-purple-300"
                                />
                                <span className="text-md font-medium text-gray-800">{student.name}</span>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>

    );
}
