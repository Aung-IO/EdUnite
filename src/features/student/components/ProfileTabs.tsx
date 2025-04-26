import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // for conditional styling
import StudentProfile from "./Profile";
import EnrolledCourses from "./EnrolledCourses";
import Certificate from "./Certificates";
// import { Certificates } from "./Certificates";
// import { OtherSettings } from "./OtherSettings";

const TABS = [
  { id: "profile", label: "Profile" },
  { id: "courses", label: "Courses" },
  { id: "certificates", label: "Certificates" },
  // { id: "others", label: "Others" },
  // { id: "logout", label: "Logout" }
];

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className=" bg-white px-6">
      {/* Nav Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {TABS.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "outline"}
            className={cn(
              "rounded-full px-6 py-2 text-sm",
              activeTab === tab.id
                ? "bg-purple-600 text-white hover:bg-purple-500"
                : "text-purple-600 border-purple-300 hover:bg-purple-50"
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-5xl mx-auto">
        {activeTab === "profile" && <StudentProfile />}
        {activeTab === "courses" && <EnrolledCourses />}
        {activeTab === "certificates" && <Certificate certificate={{
          courseTitle: "Next.js Fundamentals",
          studentName: "John Doe",
          instructor: "Jane Smith",
          date: "April 24, 2025",
        }} />}
        {activeTab === "logout" && (
          <p>Logout</p>
        )}
        {/* {activeTab === "certificates" && <Certificates />}
        {activeTab === "others" && <OtherSettings />} */}
      </div>
    </div>
  );
}
