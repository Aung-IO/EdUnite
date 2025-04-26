import { useState } from "react";
import { CheckCircle, Clock } from "lucide-react";

const learningPaths = [
  {
    title: "Frontend Developer Path",
    steps: [
      { label: "HTML & CSS Basics", completed: true },
      { label: "JavaScript Fundamentals", completed: true },
      { label: "React & JSX", completed: false },
      { label: "Next.js & Routing", completed: false },
    ],
  },
  {
    title: "Backend Developer Path",
    steps: [
      { label: "Node.js Basics", completed: true },
      { label: "Express & REST APIs", completed: false },
      { label: "MongoDB Integration", completed: false },
      { label: "Authentication & Security", completed: false },
    ],
  },
];

export default function LearningPath() {
  const [path] = useState(learningPaths[0]);

  return (
    <div className="p-6 bg-gradient-to-br from-white to-purple-50 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-800 mb-2">Learning Path</h1>
      <p className="text-gray-600 mb-10">Visual roadmap for: <strong>{path.title}</strong></p>

      <div className="relative flex justify-between items-center max-w-4xl mx-auto">
        {path.steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center relative">
            {/* Connector Line */}
            {i !== path.steps.length - 1 && (
              <div className="absolute top-5 left-full w-full h-1 bg-gray-300 z-0" style={{ width: "100%", height: "2px", marginLeft: "-1px" }}></div>
            )}

            {/* Circle Step */}
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full z-10 border-4 transition-all
                ${step.completed ? "bg-purple-600 border-purple-600 text-white" : "bg-white border-gray-300 text-gray-500"}`}
            >
              {step.completed ? <CheckCircle className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
            </div>
            <span className="text-center text-sm mt-2 w-24 text-wrap text-gray-700">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
