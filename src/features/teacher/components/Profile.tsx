import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, BookOpen, BookUser, BadgeCheck } from "lucide-react"
import Logout from "@/components/Logout"
import useUserStore from "@/store/userStore"

const TeacherProfile = () => {

  const { user: teacher } = useUserStore();

  return (
    <div className="p-10">
      <Card className="max-w-5xl mx-auto shadow-2xl border border-purple-300 rounded-lg overflow-hidden">
        <CardContent className="p-8 flex flex-col lg:flex-row gap-10">
          {/* Left: Avatar + Basic Info */}
          <div className="flex flex-col items-center lg:w-1/3 text-center">
            <Avatar className="w-28 h-28 shadow-lg ring-4 ring-purple-300">
              <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="Teacher Avatar" />
              <AvatarFallback>EL</AvatarFallback>
            </Avatar>
            <h2 className="mt-4 text-3xl font-bold text-purple-800">{teacher.name}</h2>
            <p className="text-gray-500 text-lg">{teacher.role}</p>

            <div className="mt-6 space-y-4 text-left w-full">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-6 h-6 text-purple-600" />
                <span className="text-lg">{teacher.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-6 h-6 text-purple-600" />
                <span className="text-lg">{teacher.phone_number}</span>
              </div>
            </div>
          </div>

          {/* Right: Additional Info */}
          <div className="flex-1 space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-purple-700 flex items-center gap-3">
                <BadgeCheck className="w-6 h-6" />
                Subject Type
              </h3>
              <p className="text-gray-700 capitalize text-lg">{teacher.subjects_type}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-purple-700 flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                Subjects
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                {teacher.subjects.map((subj:any, idx:any) => (
                  <li key={idx}>{subj.name}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-purple-700 flex items-center gap-3">
                <BookUser className="w-6 h-6" />
                Created Courses
              </h3>
              <p className="text-gray-700 text-lg">
                {teacher.created_courses.length} course(s)
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-purple-700 text-white hover:bg-purple-600 px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                Edit Profile
              </Button>
              <Logout />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TeacherProfile
