import { useQuery } from "@tanstack/react-query";
import { CourseSection } from "./listing/Section";
import { getAllCoursesQueryOptions } from "@/queries/courseQueryOptions";
import Loading from "../Loading";


export default function Courses() {
  const { data: courses, isLoading } = useQuery(getAllCoursesQueryOptions());

  if (isLoading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <header className="py-10 bg-white border-b">
          <h1 className="text-3xl font-bold text-gray-800">Course & Events For Students</h1>
          <p className="text-gray-500 mt-2 max-w-xl">
            Explore curated content to enhance your skills and knowledge.
          </p>
        </header>
        <Loading/>
      </div>
    );
  }
    
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="py-10 bg-white border-b">
        <h1 className="text-3xl font-bold text-gray-800">Course & Events For Students</h1>
        <p className="text-gray-500 mt-2 max-w-xl">
          Explore curated content to enhance your skills and knowledge.
        </p>
      </header>

      

      <CourseSection title="Recommended Courses" courses={courses} />
      {/* Add more sections if needed */}
    </div>
  );
}

