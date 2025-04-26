import { useParams } from "react-router-dom";
import { dummyCourses } from "@/assets/dummy-datas/course";
import { Course } from "@/types/Course";
import { dummyStudents } from "@/assets/dummy-datas/user";
import { Link } from "react-router-dom";
import useUserStore from "@/store/userStore";
import AdminBreadCrumb from "@/components/AdminBreadCrumb";

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const {user} = useUserStore();
  let course: Course | undefined = dummyCourses.find(
    (course) => course.id === courseId
  );

  const storedCourse = localStorage.getItem("createdCourse");
  const parsedCourse = storedCourse ? JSON.parse(storedCourse) : null;

  const localCourse = parsedCourse
    ?
        {
          ...parsedCourse,
          user_id: user.id,
          username: user.name,
          student_quantity: [],
          status: "pending",
          created_at: new Date().toISOString(),
          id: String(dummyCourses.length + 1),
        }
    : {};

  if(!course) {
    course = localCourse
  }

  const enrolledStudents = dummyStudents.filter((student) =>
    student.enrolled_courses?.some((course) => course.id === courseId)
  );

  if (!course) {
    return (<div className="w-full h-screen flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">Course Not Found</h1>
      <p className="text-lg text-gray-600">
        The course you are looking for does not exist or has been removed.
      </p>
      <Link
        to="/teacher/profile"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        Go Back to Home
      </Link>
    </div>)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10 font-sans">
      <AdminBreadCrumb  currentPageTitle="Detail"/>
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold text-purple-900 tracking-tight mb-4 flex items-center space-x-4">
          <span>{course.title}</span>
          <span
            className={`px-3 py-1 text-sm font-medium rounded-full ${
              course.status === "approved"
          ? "bg-green-100 text-green-800"
          : course.status === "pending"
          ? "bg-yellow-100 text-yellow-800"
          : "bg-red-100 text-red-800"
            }`}
          >
            {course.status}
          </span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          {course.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-3xl shadow-xl">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Category</p>
          <p className="text-xl font-semibold text-purple-800">
            {course.course_category}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Created By</p>
          <p className="text-xl font-semibold text-purple-800">
            {course.username}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Start Date</p>
          <p className="text-xl font-semibold text-gray-800">
            {course.start_date}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">End Date</p>
          <p className="text-xl font-semibold text-gray-800">
            {course.end_date}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Schedule</p>
          <p className="text-xl font-semibold text-gray-800">
            {course.schedule}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Created At</p>
          <p className="text-xl font-semibold text-gray-800">
            {new Date(course.created_at).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">
          Enrolled Students
        </h2>
        {enrolledStudents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledStudents.map((student) => (
          <div
            key={student.id}
            className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl flex justify-between shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-200"
          >
            <div>
          <div className="text-lg font-semibold text-gray-800">
            {student.name}
          </div>
          <div className="text-sm text-gray-600">
            Grade: {student.grade}
          </div>
            </div>
            <div>
          <Link
            to="/"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            View Profile
          </Link>
            </div>
          </div>
        ))}
          </div>
        ) : (
          <p className="text-gray-600">
        No students are enrolled in this course yet.
          </p>
        )}
      </div>
    </div>
  );
}
