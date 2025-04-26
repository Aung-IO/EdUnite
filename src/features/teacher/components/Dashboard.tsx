import { Card, CardContent } from "@/components/ui/card";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Bell, FilePlus, BookOpen, Users } from "lucide-react";
import { dummyCourses } from "@/assets/dummy-datas/course";
import useUserStore from "@/store/userStore";



export default function TeacherDashboard() {

  const {user} = useUserStore();

  const courseData = dummyCourses.filter((cor) => cor.user_id === user.id);
  const approvedData = dummyCourses.filter((cor) => cor.user_id === user.id && cor.status === "approved");

  const data = courseData.map((courser) => ({
    name: courser.title,
    completion: Math.floor(Math.random() * 100),
  }));
  
  const courses = approvedData.map((courser) => ({
    title: courser.title,
    students: courser.student_quantity.length,
  }));
  
  const questions = [
    { student: "John Doe", question: "Can you explain useEffect again?" },
    { student: "Jane Smith", question: "How to deploy on Vercel?" },
  ];


  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 ">

      {/* Left Side - Overview */}
      <div className="lg:col-span-1 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-purple-800">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">Here’s what’s happening with your courses.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <BookOpen className="text-purple-600 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Courses</p>
                <p className="text-xl font-semibold">{courseData.length}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <Users className="text-purple-600 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Total Students</p>
                <p className="text-xl font-semibold">{approvedData.reduce((total, cor) => total + cor.student_quantity.length, 0)}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <FilePlus className="text-purple-600 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Assignments</p>
                <p className="text-xl font-semibold">15</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <Bell className="text-purple-600 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Notifications</p>
                <p className="text-xl font-semibold">5</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-purple-800 mb-4">Course Completion Rate</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completion" fill="#7e22ce" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Right Side - Courses and Questions */}
      <div className="lg:col-span-2 grid grid-rows-2 gap-6">
        {/* Top Right - Courses */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-purple-800 mb-4">Your Courses</h2>
            <ul className="space-y-2">
              {courses.map((course, i) => (
                <li key={i} className="flex justify-between items-center border-b pb-2">
                  <span className="text-purple-700 font-medium">{course.title}</span>
                  <span className="text-sm text-gray-500">{course.students} students</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Bottom Right - Questions */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-purple-800 mb-4">Student Questions</h2>
            <ul className="space-y-3">
              {questions.map((q, i) => (
                <li key={i} className="border rounded-md p-3 hover:bg-purple-50">
                  <p className="font-medium text-gray-700">{q.student}:</p>
                  <p className="text-sm text-gray-600">{q.question}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
