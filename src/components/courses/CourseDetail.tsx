import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCourseByIdQueryOptions } from "@/queries/courseQueryOptions";
import Loading from "../Loading";
import Image from "@/assets/prof.svg";
import { User, Users, Tag, Calendar, Clock} from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: course, isLoading } = useQuery(getCourseByIdQueryOptions(id!));

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Loading />
      </div>
    );

  if (!course)
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Course not found.
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      {/* Banner */}
      <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-xl">
        <img
          src={Image}
          alt={course.title}
          className="w-full h-full object-cover transform scale-105 transition-transform duration-500 hover:scale-100"
        />
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-4xl font-extrabold text-purple-800">{course.title}</h1>
        <p className="text-xl font-medium text-purple-600">{course.course_category}</p>
      </div>

      {/* Course Details */}
      <div className="space-y-10">
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-700">About the Course</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{course.description}</p>
        </div>

        {/* Instructor & Tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
          <div className="flex items-center space-x-2">
            <User className="text-purple-700" />
            <span className="font-semibold text-gray-800">Instructor:</span> {course.username}
          </div>
          <div className="flex items-center space-x-2">
            <Users className="text-purple-700" />
            <span className="font-semibold text-gray-800">Enrolled Students:</span> {course.student_quantity.length}
          </div>
          <div className="flex items-center space-x-2">
            <Tag className="text-purple-700" />
            <span className="font-semibold text-gray-800">Category:</span> {course.course_category}
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="text-purple-700" />
            <span className="font-semibold text-gray-800">Duration:</span> {course.start_date} - {course.end_date}
          </div>
        </div>

        {/* Schedule Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
          <div className="flex items-center space-x-2">
            <Calendar className="text-purple-700" />
            <span className="font-semibold text-gray-800">Start Date:</span> {course.start_date}
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="text-purple-700" />
            <span className="font-semibold text-gray-800">Schedule:</span> {course.schedule}
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="pt-8 text-center">
        <button
          className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-10 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
