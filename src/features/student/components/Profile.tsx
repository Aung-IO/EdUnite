import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logout from "@/components/Logout";

const StudentProfile = () => {

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  },[]);

  return (
    <div className="bg-white my-14 px-6">
  {/* Header */}
  <header className="mb-10 text-center">
    <h1 className="text-3xl font-bold text-purple-700">Your Profile</h1>
    <p className="text-gray-500 mt-2">Manage your personal information</p>
  </header>

  {/* Profile Card */}
  <Card className="max-w-2xl mx-auto shadow-sm border border-purple-100 rounded-xl">
    <CardContent className="py-6 px-8">
      {/* Avatar and Name */}
      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-24 h-24 shadow-md border border-purple-200">
          <AvatarImage src="https://i.pravatar.cc/150?img=6" alt="Frank Miles Avatar" />
          <AvatarFallback>FM</AvatarFallback>
        </Avatar>
        <h2 className="mt-4 text-2xl font-semibold text-purple-800">Frank Miles</h2>
        <p className="text-sm text-gray-500">Student - Grade 10</p>
      </div>

      {/* Profile Info Display Style */}
      <div className="space-y-5">
        <div>
          <Label className="text-sm text-purple-700">Email</Label>
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-800 mt-1 shadow-sm">
            frank@student.com
          </div>
        </div>
        <div>
          <Label className="text-sm text-purple-700">Phone Number</Label>
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-800 mt-1 shadow-sm">
            9876543210
          </div>
        </div>
        <div>
          <Label className="text-sm text-purple-700">Enrolled Courses</Label>
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-800 mt-1 shadow-sm">
            No courses enrolled
          </div>
        </div>
        <div className="mt-8 flex justify-between">
            <Button className="bg-purple-700 text-white hover:bg-purple-600 px-6 py-4">
              Edit Profile
            </Button>
            <Logout />
          </div>
      </div>
    </CardContent>
  </Card>
</div>


  );
};

export default StudentProfile;
