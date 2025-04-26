import { useState } from "react";
import StuSignUpForm from "./StuSignUpForm";
import TeacherSignUpForm from "./TeacherSignUpForm";

export default function AuthTabs() {
  const [activeTab, setActiveTab] = useState<"student" | "teacher">("student");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Toggle Buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
            activeTab === "student"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("student")}
        >
          Student
        </button>
        <button
          className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
            activeTab === "teacher"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("teacher")}
        >
          Teacher
        </button>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md p-6">
        {activeTab === "student" ? (
          <div>
            
         <StuSignUpForm/>
          </div>
        ) : (
          <div>
           <TeacherSignUpForm/>
          </div>
        )}
      </div>
    </div>
  );
}
