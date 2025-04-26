import { Card, CardContent } from "@/components/ui/card"


import { EyeIcon } from "lucide-react"

const dummyCourses = [
  {
    id: "course-1",
    title: "Advanced Mathematics",
    teacher: "John Doe",
    students: 45,
    progress: 70,
    status: "In Progress",
  },
  {
    id: "course-2",
    title: "English Literature",
    teacher: "Sarah Smith",
    students: 32,
    progress: 40,
    status: "In Progress",
  },
  {
    id: "course-3",
    title: "Physics Fundamentals",
    teacher: "Albert Newton",
    students: 28,
    progress: 90,
    status: "Near Completion",
  },
]

export default function StartedCourses() {
  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-bold text-purple-heart-700 mb-6">Started Courses</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyCourses.map((course) => (
          <Card key={course.id} className="shadow-lg border-2 border-purple-heart-100 hover:shadow-xl transition">
            <CardContent className="p-5 space-y-3">
              <div className=" justify-between items-center">
                <h3 className="text-xl font-semibold text-purple-heart-800">{course.title}</h3>
                <div  className="mt-1 text-purple-heart-600 border-purple-heart-300">
                  {course.status}
                </div>
              </div>
              <p className="text-sm text-gray-600">Teacher: <span className="font-medium">{course.teacher}</span></p>
              <p className="text-sm text-gray-600">Students Enrolled: <span className="font-medium">{course.students}</span></p>
              <div className="flex items-center justify-between mt-auto">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div
                  className={`h-2.5 rounded-full ${
                    course.progress === 100 ? 'bg-green-500' : 'bg-purple-heart-500'
                  }`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-700 w-12 text-right">
                {course.progress}%
              </span>
            </div>
              <div className="text-end">
                <button className="text-sm text-purple-heart-600 hover:underline flex items-center gap-1">
                  <EyeIcon className="w-4 h-4" /> View Course
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
