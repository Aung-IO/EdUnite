import Image from "@/assets/prof.svg"
import { Course } from "@/types/Course";
import { Link } from "react-router-dom";


export const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Link to={`/student/our-courses/${course.id}`} className="block">
      <div className="rounded-xl shadow-md overflow-hidden w-[280px] h-[420px] bg-white flex flex-col justify-between">
        <img
          src={Image}
          alt={course.title}
          className="w-full h-40 object-cover"
        />

        <div className="p-4 flex flex-col justify-between flex-grow space-y-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {course.title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2">
              {course.description}
            </p>

          </div>
          <div className="text-sm text-gray-600">
          Instructor :  <strong>{course.username}</strong>
          </div>

          <p className="text-sm text-gray-500 line-clamp-2 bg-purple-heart-100 rounded-full px-2 py-1 w-fit">
            {course.course_category}
          </p>
          <p className="text-sm text-gray-500 line-clamp-2">
            {course.schedule}
          </p>
          <p className="text-sm text-gray-500 line-clamp-2 font-bold">
            Start on - {course.start_date}
          </p>

         


        </div>
      </div>
    </Link>

  );
};
