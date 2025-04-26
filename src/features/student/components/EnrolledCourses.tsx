import { Card, CardContent } from "@/components/ui/card";
import { Book, ArrowRight } from "lucide-react";
import useUserStore from "@/store/userStore";
import { Link } from "react-router-dom";

const EnrolledCourses = () => {

  const {user} = useUserStore();


  return (
    <div className=" bg-white px-2">
      {/* Header */}
      <header className="mb-4 text-center">
        <h1 className="text-3xl font-bold text-purple-700">Your Enrolled Courses</h1>
        <p className="text-gray-500 mt-2">Continue learning at your own pace 📘</p>
      </header>

      {/* Courses Grid */}
      <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-3">
        {user.enrolled_courses.map((course: any) => (
         <Card key={course.id}  className="bg-gradient-to-br from-white via-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition h-full"
>
         <CardContent className="p-6 flex flex-col gap-4 h-full">
           <div className="flex items-center gap-3">
             <Book className="text-purple-600 w-6 h-6" />
             <h2 className="text-xl font-semibold text-purple-800">{course.title}</h2>
           </div>
       
           {/* Spacer to push bottom content to the end */}
           <div className="flex-grow" />
       
           {/* Bottom content */}
           <div className="flex flex-col gap-1">
             <p className="text-sm text-gray-500">Instructor: {course.username}</p>
             <p className="text-sm text-gray-400">Enrolled: {course.student_quantity.length}</p>
             <div className="flex justify-end mt-2">
                 <Link
                 to={`/student/enrolled-courses/${course.id}`}
                 className="text-purple-700 border border-purple-600 hover:bg-purple-100 hover:text-purple-900 flex items-center gap-2 px-3 py-1 rounded-md transition-all"
                 >
                 <span>View Course</span>
                 <ArrowRight className="w-4 h-4" />
                 </Link>
             </div>
           </div>
         </CardContent>
       </Card>
       
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;
