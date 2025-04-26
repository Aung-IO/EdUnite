
import { dummyCourses } from "@/assets/dummy-datas/course";
import {
    BookOpen,
    Calendar,
    Clock,
    Users,
    Tag,
    UserCircle,
    FileText,
  } from "lucide-react";
import { useParams } from "react-router-dom";
  
  export function EnrolledCourseDetail() {

    const {id} = useParams();

    const course = dummyCourses.find((course) => course.id === id);

    if (!course) {
      return <div className="text-center text-gray-500">Course not found</div>;
    }


    return (
      <div className="w-full max-w-6xl mx-auto px-6 py-12 font-sans">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold text-purple-900 mb-3 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-purple-700" />
            {course.title}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
            {course.description}
          </p>
        </div>
  
        {/* Info Section */}
        <div className="bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
  
          <div className="flex items-start gap-4">
            <Tag className="text-purple-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Category</p>
              <p className="text-lg font-semibold text-gray-800">{course.course_category}</p>
            </div>
          </div>
  
          <div className="flex items-start gap-4">
            <UserCircle className="text-purple-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Created By</p>
              <p className="text-lg font-semibold text-gray-800">{course.username}</p>
            </div>
          </div>
  
          <div className="flex items-start gap-4">
            <Calendar className="text-purple-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Start Date</p>
              <p className="text-lg font-semibold text-gray-800">{course.start_date}</p>
            </div>
          </div>
  
          <div className="flex items-start gap-4">
            <Calendar className="text-purple-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-sm text-gray-500 font-medium">End Date</p>
              <p className="text-lg font-semibold text-gray-800">{course.end_date}</p>
            </div>
          </div>
  
          <div className="flex items-start gap-4">
            <Clock className="text-purple-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Schedule</p>
              <p className="text-lg font-semibold text-gray-800">{course.schedule}</p>
            </div>
          </div>
  
          <div className="flex items-start gap-4">
            <Users className="text-purple-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Enrolled Students</p>
              <p className="text-lg font-semibold text-purple-700">{course.student_quantity.length}</p>
            </div>
          </div>
  
          <div className="flex items-start gap-4 col-span-1 md:col-span-2">
            <FileText className="text-purple-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Course Status</p>
              <span
                className={`inline-block mt-1 px-3 py-1 text-xs font-bold rounded-full 
                  ${course.status === "approved" ? "bg-green-100 text-green-700" : 
                    course.status === "pending" ? "bg-yellow-100 text-yellow-700" : 
                    "bg-red-100 text-red-700"}`}
              >
                {course.status.toUpperCase()}
              </span>
            </div>
          </div>
  
          <div className="flex items-start gap-4 col-span-1 md:col-span-2">
            <Calendar className="text-purple-600 w-6 h-6 mt-1" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Created At</p>
              <p className="text-lg font-semibold text-gray-800">
                {new Date(course.created_at).toLocaleString()}
              </p>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  